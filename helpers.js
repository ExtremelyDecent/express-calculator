function createCounter(arr){
    return arr.reduce(function(acc, next){
        acc[next] = (acc[next]||0)+1;
        return acc;
    }, {});
}

function convertAndValidateNumArray(numString){
    let results = [];
    for (let i = 0; i<numString.length; i++){
        let toNum = Number(numString[i]);
        if(Number.isNaN(toNum)){
            return new Error(
                `The value of ${numString[i]} at index ${i} is not valid.`
            );
        }
        results.push(toNum);

    }
    return results;
}

function findMode(arr){
    let freq = createCounter(arr);

    let count = 0;
    let most;

    for(let key in freq){
        if (freq[key] > count){
            most = key;
            count = freq[key];
        }
    }
    return (most);
}
function findMean(nums){
    if (nums.length === 0) return 0;
    return nums.reduce(function(acc, cur){
        return acc+cur;
    })/nums.length;
}

function findMedian(nums){
    nums.sort((a,b) => a - b);
    let middle = Math.floor(nums.length/2);
    let median;
    if (nums.length %2 === 0){
        median = (nums[middle]+ nums[middle -1 ]/2);
    }
    else{
        median = nums[middle];
    }
    return median;
}

module.exports={
    createCounter,
    findMean,
    findMedian,
    findMode,
    convertAndValidateNumArray
};