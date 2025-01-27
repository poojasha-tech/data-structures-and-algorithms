function containDuplicate(s){
    const freq=new Map();

    //count char frequencies
    for(let char of s){
        freq.set(char,(freq.get(char) || 0)+1);
        //console.log(freq)
    }

    for(let count of freq.values()){
        if(count>1){
            return true
        }
    }

    return false;

}
//console.log(containDuplicate('abc'))




function containDuplicateSet(s){
    const freq=new Set();

    //count char frequencies
    for(let char of s){
        if(freq.has(char)){
            return true 
        }
        freq.add(char)

        //console.log(freq)
    }


    return false;
}


console.log(containDuplicateSet('abbbc'))