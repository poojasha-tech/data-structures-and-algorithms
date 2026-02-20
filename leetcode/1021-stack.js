function removeOuterParentheses(S) {
    let stack=[];
    let result="";
    for (let char of S){
        if(char==="("){
            if(stack.length>0){   // only add to result if stack is not empty, meaning it's not an outer parenthesis
                result+=char;
            }
            stack.push(char);
        }
        else{
            stack.pop();
            if(stack.length>0){ // only add to result if stack is not empty, meaning it's not an outer parenthesis
                result+=char;
            }
        }

    }
    return result;
}

console.log(removeOuterParentheses(S = "(()())(())"))