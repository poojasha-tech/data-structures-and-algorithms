function maxpoints(cardPoints, k) {
    let n=cardPoints.length;

    let sum = 0;

    for (let i=0 ; i<k ; i++){
        sum+=cardPoints[i]

    }
    let maxpoints=sum;

    for(let i=k-1; i>=0;i--){
        sum=sum-cardPoints[i];
        sum=sum+cardPoints[n-(k-i)];
        maxpoints=Math.max(maxpoints,sum);


    }
    return maxpoints;
    
};
console.log(maxpoints([1,2,3,4,5,6,1],3));