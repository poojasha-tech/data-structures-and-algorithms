function containDuplicates(nums, k) {
    for(let i = 0; i < nums.length; i++){
        for(let j = i+1; j <= i+k && j < nums.length; j++){
            if(nums[i] == nums[j]) return true;
        }
    }
    return false;
}

function containsDub(nums, k){
   const bag= new Set()

   for(let i=0; i<=k && i<nums.length ; i++){
    if(bag.has(nums[i])) return true 
    bag.add(nums[i])
   }

   for (let i=0; i<nums.length-k-1;i++){
    bag.delete(nums[i])
    if(bag.has(nums[i+k+1])) return true
    bag.add(nums[i+k+1])
   }
   return false;


}
console.log(containsDub([1,2,3,1,2,3], 2))

// 134212