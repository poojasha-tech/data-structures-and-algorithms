function romanToInt(s){
    let int=0;
    const roman={
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    }
    for(let i=0;i<s.length-1;i++){
        if(roman[s[i]]< roman[s[i+1]]){

            int-=roman[s[i]]
        }
        else{
            int+=roman[s[i]]
        }
    }
    int+=roman[s[s.length-1]] //why add last character separately? because in for loop we are checking till s.length-1 to avoid out of bound error while checking s[i+1]
    return int;

}

console.log(romanToInt("MCMXCIV"))