const express = require('express');
const router = express.Router();

const authorController= require("../controllers/authorController")
const bookController= require("../controllers/bookController")
const newBookcontrollers = require("../controllers/newBookController")
const newauthorcontroller = require("../controllers/newAuthorController")
const newpublisher = require("../controllers/newPublisherController")
const getbookpopulate = require("../controllers/newBookController")
// const hardcoverupdate = require("../controllers/newBookController")
router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createAuthor", authorController.createAuthor  )

router.get("/getAuthorsData", authorController.getAuthorsData)

router.post("/createBook", bookController.createBook  )

router.get("/getBooksData", bookController.getBooksData)

router.get("/getBooksWithAuthorDetails", bookController.getBooksWithAuthorDetails)

router.post("/createnewBook",newBookcontrollers.createnewBook)
router.post("/newcreateAuthor",newauthorcontroller.newcreateAuthor)
router.post("/createPublisher",newpublisher.createPublisher)
router.get("/getBooksWithAuthorDetails1",getbookpopulate.getBooksWithAuthorDetails1 )
// router.put("/putupdation/",hardcoverupdate.updationBook)
module.exports = router;