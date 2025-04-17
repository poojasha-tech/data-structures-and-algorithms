function sumArraySumEqualsK(array,k){
    let count=0;
    for(let i=0;i<array.length;i++){
        let sum=0;
        for(let j=i;j<array.length;j++){
            sum= sum + array[j];

            if(sum==k){
                count++;
            }
        }
    }

    return count;
}
//console.log (sumArraySumEqualsK([1,3,2,4,3],6));




function sumArraySumEqualsKOptimise(array,k){
    let freqMap={'0':1};      //start with sum=0 occurring once
    let count=0;
    let sumTillNow=0;

    for(let i=0;i<array.length;i++){
        sumTillNow = sumTillNow + array[i];

        count=count+ (freqMap[sumTillNow-k] ?? 0);

        if(!freqMap[sumTillNow]){
            freqMap[sumTillNow]=1;
        }

        else{
            freqMap[sumTillNow] = freqMap[sumTillNow] + 1;
        }
    }

    return count;

}

console.log(sumArraySumEqualsKOptimise([1,2,6,-1,3,5,-5,9],8))