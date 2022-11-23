const{
    findMean,
    findMedian,
    findMode,
} = require("./helpers");

describe('#findMedian',function(){
    it("finds the median of an even array", function(){
        expect(findMedian([1,2,3,4])).toEqual(2.5)
    })
    it("finds the median of an odd array", function(){
        expect(findMedian([1,2,3])).toEqual(2)
    })
})

describe('#findMode',function(){
    it("finds the mode of an array", function(){
        expect(findMode([1,2,3,4,4,4,4,4])).toEqual(4)
    })
})

describe('#findMean',function(){
    it("finds the mean of an array", function(){
        expect(findMean([1,-1,4,6])).toEqual(2.5)
    })
    it("finds the mean of an empty array", function(){
        expect(findMean([])).toEqual(2)
    })
})