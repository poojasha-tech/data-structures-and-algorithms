// Given an array of integers nums, return the number of good pairs.

// A pair (i, j) is called good if nums[i] == nums[j] and i < j.

function numberGoodPair(nums){
    const freq=new Map;
   let count=0;
   for(let num of nums){
    freq.set(num,(freq.get(num)||0)+1)
   }
   for(const [num,value] of freq.entries()){
    if(value>1){
        count+=(value*(value-1))/2
        
    }
   }

   return count;
}
console.log(numberGoodPair([1,2,3,1,1,3]))