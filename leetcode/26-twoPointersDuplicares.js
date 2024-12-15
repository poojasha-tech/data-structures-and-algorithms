// function removeDuplicates(nums){
//     let repetaedNumberCount=0;
//     let uniqueNumberCount=0 ;
//     let newArray=[];
//     newArray.push(nums[0])
//      let i=0;
//      let j=1;
//      while(j<nums.length){
//             if(nums[i]==nums[j]){
//                 repetaedNumberCount+=1;
//                 j++;
//             }
//             else{
//                 i=j;
//                 newArray.push(nums[i]);
//                 j++

//             }
//     }
//     return ["New Array is :",newArray,  " values repeted are :" ,repetaedNumberCount, " Unique Numebr Count is :" ,nums.length-repetaedNumberCount];
// }


var removeDuplicates = function(nums){
    if(nums.length==0) return 0;
     let i=0;
     let j=1;
     while(j<nums.length){
            if(nums[i]==nums[j]){
                j++;
            }
            else{
                i++;
                nums[i]=nums[j]; // assignment of value of nums[j] to nums[i]
                j++;

            }
    }
    return i+1;
} 
console.log(removeDuplicates([1,1,1,2,2,3]))
//console.log(removeDuplicates([1,1,2,2,2,3,3,5,5,7,8]));


function removeZerosInPlace(nums){
    let i=0;
    for(let j=0; j<nums.length; j++){
        if(nums[j]!=0){
            nums[i]=nums[j];
            i++;
        }
    }
    while(i<nums.length){
        nums[i]=0;
        i++;
    }
}
console.log(removeZerosInPlace([0,1,0,3,12]));

function countUniqueElementsInSortedArray(nums){
    if(nums.length==0) return 0;
    let count=1; // first value is unique.  //can also take count=0 and start loop from i=0 but then need to handle last element separately
    for (let i=1; i<nums.length;i++){
        if(nums[i]!= nums[i-1])
            count++; // then count+1 , for last unique element , but this is risky if array is empty
    }
    return count;
}

function countUniqueElementsInSortedArrayInPlace(nums){
    
}