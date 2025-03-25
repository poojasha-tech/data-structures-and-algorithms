// tgis was to find a palindrome from giving string using all the alphabets only once ...

function longestPalindromeConstructed(s){
    const freq=new Map();
    let length=0;
    let hasOdd=false;

    //count char frequencies
    for(let char of s){
        freq.set(char,(freq.get(char) || 0)+1);
    }

    //process each frequency
    for(let count of freq.values()){
        if(count % 2===0){
            length+=count;
        }

        

        else{
            length+=count-1;
            hasOdd=true;
        }
    }

    return hasOdd ?length+1 :length;

}