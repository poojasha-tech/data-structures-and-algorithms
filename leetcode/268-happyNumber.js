function isHappyNumber(num){
    const isSeen=new Set();
    while(n!==1){
        if(isSeen.has(n)){
            return false;
        }

        isSeen.add(n);
        n=sumSquareDigits(n)
    }
    return true;
}

function sumSquareDigits(num){
    let sum=0;
    while(num>0){
        let digit=num % 10;
        sum += digit * digit;
        num = Math.floor(num/10);
    }
    return sum;   // when it loops over to above function then "sum" is new "n"

}