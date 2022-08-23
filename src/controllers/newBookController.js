const newAuthorModel = require("../models/newAuthorModel")
const newbookModel= require("../models/newBookModel")
const newPublisherModel = require("../models/newPublisherModel")
const router = require("../routes/route")



const createnewBook= async function (req, res) {
    let book = req.body
    let authorId = await newAuthorModel.findById(book.author)
    let publisherId = await newPublisherModel.findById(book.publisher)
    if(!book.author){
        return res.send("plz enter valid author")
    }
    else if(authorId == null){
        return res.send("plz enter valid author id")
    }
    if(!book.publisher){
        return res.send("plz enter valid publisher")
    }
    else if(publisherId == null){
        return res.send("plz enter valid author id")
    }
    // if(!Authorid){ 
    // return res.send({status:false,msg: "author must present"})
    // }
    // let publisherid = book.publisher
    // if(!publisherid){
    //     return res.send({status:false,msg: "publisher must present"})
    // }
    let bookCreated = await newbookModel.create(book)
    res.send({data: bookCreated})
}

// const updationBook = async function(res,req){
    
//     // let hardcover = req.body.isHardcover
//     let updatedhardcover = await newbookModel.updateOne({name:"rich dad poor dad"},{$set:req.body});
//     res.send({msg :updatedhardcover })
// }




const getBooksWithAuthorDetails1 = async function (req, res) {
    let specificBook1 = await newbookModel.find().populate('author').populate('publisher')
    res.send({data: specificBook1})

}



module.exports.getBooksWithAuthorDetails1 = getBooksWithAuthorDetails1
module.exports.createnewBook= createnewBook
// module.exports.updationBook = updationBook
