const jwt = require("jsonwebtoken");

const validateToken = function(req, res, next) {
  try{
    let token = req.headers["x-Auth-token"];
    if (!token) token = req.headers["x-auth-token"];
  
    //If no token is present in the request header return error
    if (!token) return res.status(401).send({ status: false, msg: "token must be present" });
  
    console.log(token);
    
    // If a token is present then decode the token with verify function
    // verify takes two inputs:
    // Input 1 is the token to be decoded
    // Input 2 is the same secret with which the token was generated
    // Check the value of the decoded token yourself
    let decodedToken = jwt.verify(token, "functionup-plutonium-very-very-secret-key");
    if (!decodedToken) {
      return res.status(403).send({ status: false, msg: "token is invalid" });
    }
    req.loggedInUser = decodedToken.userId
    next()
}
catch(err){
  res.status(500).send({error:err.message})
}
}

  const authorized = function(req,res,next){
    try{
  let requestedUserId = req.params.userId
  if(requestedUserId!== req.loggedInUser){
    return res.status(403).send({status:false,msg:"permission denied"})
  }
  next()
}
catch(err){
  res.status(500).send({error:err.message})
}
  }









module.exports.validateToken = validateToken
module.exports.authorized = authorized