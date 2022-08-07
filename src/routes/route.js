const express = require('express');
const abc = require('../introduction/intro')
 const assign = require('../logger/logger')
 const assign1 = require('../util/helper')
 const assign2 = require('../validator/formatter')
const router = express.Router();

router.get('/test-me', function (req, res) {
    console.log('My batch is plutonium', )
    assign.Cuh()
    assign1.F1()
    assign1.F2()
    assign1.F3()
    assign2.Trim()
    assign2.Smallalpha()
    assign2.Bigalpha()
    res.send('My second ever api!')
});


router.get('/test-you', function(req, res){
    res.send('This is the second routes implementation')
});

router.get('/give-me-students-data',function(req, res){

});



module.exports = router;
// adding this comment for no reason