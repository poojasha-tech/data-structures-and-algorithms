// function minRemoveToMakeValid(s) {
//     let stack = [];
//     let leftCount = 0;
//     for (let i = 0; i < s.length; i++) {

//         if (s[i] >= 'a' && s[i] <= 'z') {
//             stack.push(s[i])
//         }
//         if (s[i] === "(") {
//             stack.push(s[i]);
//             leftCount += 1;
//         }
//         if (s[i] === ")") {
//             if (leftCount > 0) {
//                 stack.push(")");
//                 leftCount--;
//             }
//         }

//     }

//     let res=[];
//     for(let i=stack.length-1;i>=0;i++){
//         if(stack[i]==="(" && leftCount>0){
//             leftCount--;
//         }
//         else{
//             res.push(stack[i])
//         }
//     }

//     return res.reverse().join('');

// }
// heap full beacuse of reverse and 2 time making it 

function minRemoveToMakeValidOld(s){
    let leftCount=0;
    let result=[]

    for (let char of s) {
        if (char >= 'a' && char <= 'z') {
            result.push(char);
        } else if (char === '(') {
            result.push(char);
            leftCount++;
        } else if (char === ')') {
            if (leftCount > 0) {
                result.push(char);
                leftCount--;
            }
        }
    }

    // Remove extra '(' without creating a new array
    for (let i = result.length - 1; i >= 0 && leftCount > 0; i--) {
        if (result[i] === '(') {
            result.splice(i, 1);  // remove in-place
            leftCount--;
        }
    }

    return result.join('');
}

var minRemoveToMakeValid = function(s) {
    //  ) ( a b ( ) ) )
    //  0 1 2 3 4 5 6 7
    let st = []
    for (let i = 0; i < s.length; i++){
        const c = s[i]
        if(c != '(' && c != ')') continue;

        if ( c == '(') st.push([c, i])
        else if (st.length>0 && st.at(-1)[0] == '(') st.pop()
        else st.push([')', i])
    }
    console.log(st)
    // [[')', 0], [')', 7]]
    // st.map(e => e[1]) -> [0,7]
    const ind = new Set(st.map(e => e[1]))
    //(0,7)

    const sr = []
    for(let i=0; i<s.length; i++) {
        if(!ind.has(i)) sr.push(s[i])
    }
    return sr.join('')
};

//console.log(minRemoveToMakeValid("lee(t(c)o)de)"));
//console.log(minRemoveToMakeValid("a)b(c)d"));
//console.log(minRemoveToMakeValid("))(("));
console.log(minRemoveToMakeValid("(a(b"))