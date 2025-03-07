function intersectionBruteForce(nums1,nums2){
    let result=[];
    for(let i=0;i<nums1.length;i++){
        for(let j=0;j<nums2.length;j++){
            if(nums1[i]==nums2[j]){
                result.push(nums1[i]);
                 nums2.splice(j, 1);    //Hey JavaScript, go into the array nums2, and remove 1 element starting from index j
                 break;// stop after first match 
            }
        }
    }
    return result
}

console.log(intersection([3,5,7,8],[5,7,7]))


function intersectionOptimize(nums1,nums2){
    
}