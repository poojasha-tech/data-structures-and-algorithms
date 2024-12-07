function maxAvgSubArray(nums,k){
    let subAraySum=0;
    for(let i=0; i<k;i++){
        subAraySum=subAraySum+nums[i]
    }

    let maxSubArraySum=subAraySum;
    for(let i=k; i<nums.length;i++){
        subAraySum=subAraySum - nums[i-k] + nums[i];
        maxSubArraySum=Math.max(maxSubArraySum,subAraySum)
    }
    return maxSubArraySum/k ;

}
console.log(maxAvgSubArray([1, 12, -5, -6, 50, 3],4));