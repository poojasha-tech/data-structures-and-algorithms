function containDuplicates(nums, k) {
    const set = new Set();
    let left = 0;
    for (let right = 0; right <= nums.length - 1; right++) {
        if (set.has(nums[right])) return true
        else {
            set.add(nums[right]);
        }

        if (right - left >= k) {
            set.delete(nums[left]);
            left++
        }

    }
    return false;
}



function containDuplicates(nums,k){
    for(let i=0;i<nums.length-k-1;i++){
        for(let j=i+1;j<=i+k;j++){
            if(nums[i]===nums[j]){
                return true;
            }
        }
    }
    return false;

}

console.log(containDuplicates([1,3,1], 1))

// 134212