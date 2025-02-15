function validAnagram(s,t){
    if(!s.length==t.length){
        return false
    }

    let sortedS=s.split('').sort().join('');
    let sortedT=t.split('').sort().join('');

    if(sortedS==sortedT){
        return true
    }

    else{
        return false;
    }
}

console.log(validAnagram("silent","listen"))



function validAnagramOptimise(s,t){
    if(s.length!=t.length){
        return false;
    }

    const freqMap=new Map();

    for(let letters of s){
        //freqMap.set(letters , (freqMap.get(letters) || 0)) +1;
        if(freqMap.has(letters)){
            freqMap.set(letters, freqMap.get(letters)+1);
        }
        else{
            freqMap.set(letters,1)
        }
    }

    for(let letters of t){
        if(!freqMap.has(letters)){
            return false;
        }
        freqMap.set(letters,freqMap.get(letters)-1);

        if(freqMap.get(letters)<0){
            return false;
        }
    }
    return true;
}