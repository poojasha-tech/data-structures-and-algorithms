function repeatedDnaSequence(s) {
    let firstTimeSeen= new Set();
    let repeatedSeen=new Set();
    for(let i=0 ; i <= s.length-10 ; i++){
        let subString = s.slice(i,i+10);
        if(firstTimeSeen.has(subString)){
            repeatedSeen.add(subString)
        } 
        else{
            firstTimeSeen.add(subString)
        }
    }
    return Array.from(repeatedSeen);
};