function minAddToMakeValid(s){
    let stack=[];
    for(let char of s){
        if (char==="("){
            stack.push(char)
        }
        else{
            if(stack.includes("(")){stack.pop(char)}
            else{
                stack.push(char)
            }
        }
    }
    return stack.length 
}
console.log(minAddToMakeValid( "())"))