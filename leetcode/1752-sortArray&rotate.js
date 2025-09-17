function sortedAndRotated(nums) {
    let count = 0;
    let n = nums.length
    
    if (nums[0] < nums[n - 1]) {  //imaginary rotate , in which the array is sorted 
        count++;
    }

    for (let i = 0; i <= n - 1; i++) {
        if (nums[i] > nums[i + 1]) {
            count++;
        }
        if (count > 1) {
            return false
        }
    }
    return true

};
console.log(sortedAndRotated([3, 4, 5, 1, 2]))