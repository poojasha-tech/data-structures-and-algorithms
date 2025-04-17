function sortCharByFreq(s){
    const freq=new Map();
    let result=[];

    for(let char of s){
        if(freq.has(char)){
            freq.set(char,freq.get(char)+1);
        }

        else{
            freq.set(char,1);
        }
    }

    const sortedValues=Array.from(freq.entries()).sort((a,b)=>b[1]-a[1]);

    for(let [char,values] of sortedValues){
        result.push(char.repeat(values))        /// to repeat the value as many times , as it appererd in the freq
    }

    const resultString=result.join('')

    return resultString;
}


console.log(sortCharByFreq("tree"))