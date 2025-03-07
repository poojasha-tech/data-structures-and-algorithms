// below is for k freq
function kFrequentElements(nums,k){
    const freq=new Map();
    let result=[];
    for(let digits of nums){
        if(freq.has(digits)){
            freq.set(digits,freq.get(digits)+1);
        }
        else{
            freq.set(digits,1)
        }
    }

    for(let [digits,value] of freq.entries()){
        if(value>=k){
            result.push(digits)
        }
    }

    return result;
}

console.log(kFrequentElements([1,1,1,2,2,3],2))





// for top k frequency
function topKFrequentElements(nums,k){
    const freq=new Map();
    let result=[];
    for(let digits of nums){
        if(freq.has(digits)){
            freq.set(digits,freq.get(digits)+1);
        }
        else{
            freq.set(digits,1)
        }
    }

    const sortedValues=Array.from(freq.entries())
          .sort((a,b)=>b[1]-a[1]);


    for(let i=0;i<k;i++){
        result.push(sortedValues[i][0]);
    }      

    return result;
}

console.log(kFrequentElements([1,1,1,2,2,3],2))