function reverseWords(s){
    //return s.trim().split(/\s+/).reverse().join(' ')
    let words=s.split(' ');
    let result=[];
    for(let i=words.length-1 ; i>=0 ; i--){
        if(words[i] !== ''){
            result.push(words[i])
        } 

    } 
    return result.join(' ')//space is used to join the words in result array
}