const newbookModel= require("../models/newBookModel")



const createnewBook= async function (req, res) {
    let book = req.body
    let bookCreated = await bookModel.create(book)
    res.send({data: bookCreated})
}




module.exports.createnewBook= createnewBook