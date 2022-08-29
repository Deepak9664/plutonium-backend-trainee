const { count } = require("console")
const UserModel1 = require("../models/UserModel1")
  

const Creatuser1 = async function(req,res){
    let data = req.body
   let savedData = await UserModel1.create(data)
   res.send({data:savedData})
}
module.exports.Creatuser1 = Creatuser1