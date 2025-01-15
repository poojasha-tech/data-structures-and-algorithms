function longestConsecutiveSequence(nums){
    let numSet=new Set(nums);
    let maxSeqLength=0;

    for(let digit of numSet){
        if(!numSet.has(digit-1)){  // if numSet doesnt have digits-1 then, that will be the first elemnt of sequence
            let currentDigit=digit;
            let currentLongestSeq=1;

            while(numSet.has(currentDigit+1)){
                currentDigit+=1;
                currentLongestSeq+=1;
            }

            maxSeqLength=Math.max(maxSeqLength,currentLongestSeq)

        }
    }

    return maxSeqLength
}

console.log(longestConsecutiveSequence([100,1,200,2,3,4]))