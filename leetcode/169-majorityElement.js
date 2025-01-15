function majorityElement(nums){
    let n=nums.length;
    let majorityElement=Math.floor(n/2);
    const freq=new Map();

    for(let digits of nums){
        if(freq.has(digits)){
            freq.set(digits,(freq.get(digits)+1))
        }

        else{
            freq.set(digits,1)
        }
    }

    for(let[digits,value] of freq.entries()){
        if(value>majorityElement){
            return digits
        }
    }
}
console.log(majorityElement([1,1,1,1,2,2,1]))