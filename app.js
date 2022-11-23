const express = require('express');
const app = express();
const ExpressError = require('./expressError');

const {convertAndValidateNumArray, findMode, findMean, findMedian} = require ('./helpers');

app.get('/mean', function(req, res, next){
    if(!req.query.nums){
        throw new ExpressError('You must pass a query key of nums with a comma separating the list', 400);
    }
    let numString = req.query.nums.split(',');
    // checking for only numbers
    let nums = convertAndValidateNumArray(numString);
    if (nums instanceof Error){
        throw new ExpressError(nums.message);
    }

    let results = {
        operation: "mean",
        result: findMean(nums)
    }
    return res.send(results);
});

app.get('/mode', function(req, res, next){
    if(!req.query.nums){
        throw new ExpressError('You must pass a query key of nums with a comma separating the list', 400);
    }
    let numString = req.query.nums.split(',');
    // checking for only numbers
    let nums = convertAndValidateNumArray(numString);
    if (nums instanceof Error){
        throw new ExpressError(nums.message);
    }

    let results = {
        operation: "mode",
        result: findMode(nums)
    }
    return res.send(results);
});

app.get('/median', function(req, res, next){
    if(!req.query.nums){
        throw new ExpressError('You must pass a query key of nums with a comma separating the list', 400);
    }
    let numString = req.query.nums.split(',');
    // checking for only numbers
    let nums = convertAndValidateNumArray(numString);
    if (nums instanceof Error){
        throw new ExpressError(nums.message);
    }

    let results = {
        operation: "median",
        result: findMedian(nums)
    }
    return res.send(results);
});

//* for errors*/ 
app.use(function(res, req, next){
    const e = new ExpressError("Not Found", 404);

    return next(e);
});
app.use(function(e, req, res, next){
    res.status(e.status||500);

    return res.json({
        error:e,
        message:e.message
    });

});

app.listen(3000, function(){
    console.log(`Starting server on port: 3000`);
});