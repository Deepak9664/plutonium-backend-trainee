const Publisher= require("../models/newPublisherModel")



const createPublisher= async function (req, res) {
    let author = req.body
    let authorCreated = await Publisher.create(author)
    res.send({data: authorCreated})
}





module.exports.createPublisher = createPublisher