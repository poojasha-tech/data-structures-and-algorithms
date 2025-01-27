function minSubArraySum(nums,target){
    let i=0;
    let subArraySum=0;
    let minLengthSubArray=Infinity;
    for(let j=0;j<nums.length; j++){
        subArraySum = subArraySum + nums[j] ;

        while(subArraySum >= target){
            minLengthSubArray=Math.min(minLengthSubArray , j-i+1);
            subArraySum = subArraySum - nums[i];
            i++ ;
        }
    }
    if(minLengthSubArray===Infinity){
        return 0;
    }
    else{
        return minLengthSubArray
    }
}

console.log(minSubArraySum([2,3,1,2,4,3],7));
