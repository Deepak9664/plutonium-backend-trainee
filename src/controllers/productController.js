const productModel = require("../models/productModel")

const creatproduct = async function(req,res){
    let data = req.body
    let result = await productModel.create(data)
    res.send({data:result})
}
module.exports.creatproduct = creatproduct