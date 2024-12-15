function maximumSubArrayBruteForce(nums){
    let maxSum=nums[0];   // cant be 0, because in a sigle element array then it will give wrong answer
    let startIndex=0;
    let endIndex=0;

    for(let i=0;i<nums.length;i++){
        let currentSum=0;
        for(let j=i;j<nums.length;j++){
            currentSum=currentSum+nums[j];

            if(currentSum>maxSum){
                maxSum=currentSum;
                startIndex=i;
                endIndex=j;

            }
        }
    }
    return{sum:maxSum, subArray:nums.slice(startIndex,endIndex+1)}

}

console.log(maximumSubArrayBruteForce([-1,7,8]))



function kadaneAlgo(nums){
    let sum=0;
    let maxSum=nums[0];
    for(let i=0;i<nums.length;i++){
        sum=sum+nums[i];

        if(sum>maxSum){
            maxSum=sum
        }
        if(sum<0){
            sum=0
        }
    }
    return maxSum
}

console.log(kadaneAlgo([-1,7,8]))