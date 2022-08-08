const express = require('express');
const abc = require('../introduction/intro')
//  const assign = require('../logger/logger')
//  const assign1 = require('../util/helper')
//  const assign2 = require('../validator/formatter')
const Lodash = require('lodash');
const router = express.Router();

router.get('/test-me', function (req, res) {
    console.log('My batch is plutonium', )
    // assign.Cuh()
    // assign1.F1()
    // assign1.F2()
    // assign1.F3()
    // assign2.Trim()
    // assign2.Smallalpha()
    // assign2.Bigalpha()
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul","Aug", "Sep", "Oct", "Nov", "Dec"];
    const split = Lodash.chunk(months,4);
    console.log(split);
    const Odd = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19];
    const Tail = Lodash.tail(Odd)
    console.log(Tail);
    const Arrayyy = Lodash.union([1,2,3],[3,4,5],[4,5,6],[5,6,7],[7,8,9]);
    console.log(Arrayyy);
    const Pairs = [["horror","The Shining"],["drama","Titanic"],["thriller","Shutter Island"],["fantasy","Pans Labyrinth"]]
    const keypairs = Lodash.fromPairs(Pairs);
    console.log(keypairs);

    res.send('My second ever api!')
});


router.get('/test-you', function(req, res){
    res.send('This is the second routes implementation')
});

router.get('/give-me-students-data',function(req, res){

});



module.exports = router;
// adding this comment for no reason