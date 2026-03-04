function minAddToMakeValid(s){
    let stack=[];
    for(let char of s){
        if (char==="("){
            stack.push(char)
        }
        else{
            if(stack.includes("(")){stack.pop(char)} // remove last "(" from stack if there is one, otherwise add ")" to stack
            else{
                stack.push(char)
            }
        }
    }
    return stack.length 
}
console.log(minAddToMakeValid( "())"))