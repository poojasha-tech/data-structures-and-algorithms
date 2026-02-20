function minInsertions(s){
    let needRight=0;
    let insertions=0;
    
    for(let char of s){
        if(char==="("){
            needRight+=2;  // it needs two right parentheses to balance one left parenthesis
            if(needRight%2===1){// if needRight is odd, we need to insert one right parenthesis to make it even
                insertions++;  //  insert one right parenthesis
                needRight--;   // after inserting one right parenthesis, we need one less right parenthesis 
            }                  // to balance the left parenthesis
        }else{                  // if char is ")", we need one less right parenthesis to balance the left parenthesis
            needRight--;
            if(needRight===-1){   // if needRight is -1, it means we have more right parentheses than left parentheses, 
                                  // so we need to insert one left parenthesis
                insertions++;
                needRight=1;
            }       
        }
    }
    return insertions+needRight;
}
// console.log(minInsertions("(()))")); // Output: 1
// console.log(minInsertions("())"));   // Output: 0
console.log(minInsertions("))())(")); // Output: 3  
