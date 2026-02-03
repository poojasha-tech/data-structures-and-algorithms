// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.



function twoSum(nums,t){
    const sumMap=new Map();
    for(let i=0;i<nums.length;i++){
        let target_=t-nums[i];
        if(sumMap.has(target_)){
            return [sumMap.get(target_),i]; // mapped value to index [key , value]=> value:index
        }

        sumMap.set(nums[i],i);

    }
}

console.log(twoSum([2,7,11,15],9))