function missingNumber(nums){
    let n=nums.length;
    let numsSum=0;
    let expectedSum=(n*(n+1))/2;

    for(let i=0;i<nums.length;i++){
        numsSum+=nums[i]
    }
    let missingNumber=expectedSum-numsSum
    return missingNumber
}

console.log(missingNumber([3,0,1]))