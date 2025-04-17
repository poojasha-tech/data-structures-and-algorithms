function findPivotIndex(nums){
    for (let i=0;i<nums.length;i++){
        let sumLeft=0;
        let sumRight=0;
        for(let j=0;j<i;j++){
            sumLeft+=nums[j]
        }
        for(let j=i+1;j<nums.length;j++){
            sumRight+=nums[j];
        }

        if(sumLeft==sumRight){
            return i
        }
    }
    return -1;

}

//console.log(findPivotIndex([1,7,3,6,5,6]));


function findPivotIndexptimize(nums){
    let totalSum=nums.reduce((a,b)=>a+b ,0);
    let leftSum=0;

    for(let i=0;i<nums.length;i++){
        let rightSum=totalSum - leftSum - nums[i]

        if(leftSum==rightSum){
            return i;
        }

        leftSum+=nums[i];
    }

    return -1;
}

console.log(findPivotIndexptimize([1,7,3,6,5,6]));
