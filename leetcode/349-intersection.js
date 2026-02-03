 function intersection(nums1, nums2) {
    let result=[]
    const num1Set= new Set(nums1);
    const num2Set = new Set(nums2);
    for (const nums of nums1){
        if(num2Set.has(nums)){
            if(!result.includes(nums)){result.push(nums)}
        }
    }
    return result
};
console.log(intersection(nums1 = [1,2,2,1], nums2 = [2,2]))