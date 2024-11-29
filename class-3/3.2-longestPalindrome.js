//======>>>>>>layman's approach

//let s = 'babad' 

//let longestPalindrome = '' 

for(let i = 0; i < s.length; i++){ 

    for(let j = i+1; j < s.length; j++){ 

        let currentSubStr = s.slice(i,j) 

        if(  palindrome(currentSubStr) ){ 

            if(currentSubStr.length > longestPalindrome.length){ 

                longestPalindrome = currentSubStr 

            } 

        } 

    } 

} 

console.log(longestPalindrome) 

function palindrome(str){ 

    return str == str.split('').reverse().join('') 

 } 




//=======>>>>>>>>>  we can make line 31 more fast , because rn its taking so much work in one variable 



//let s = 'a' 

//let longestPalindrome = '' 

for(let i = 0; i < s.length; i++){ //0 

    for(let j = i+1; j <= s.length; j++){ // 1 

        let currentSubStr = s.slice(i,j) 

        if(  palindrome(currentSubStr) ){ 

            if(currentSubStr.length > longestPalindrome.length){ 

                longestPalindrome = currentSubStr 

            } 

        } 

    } 

} 

console.log(longestPalindrome) 

function palindrome(str){ 

    // return str == str.split('').reverse().join('') 

    for(let i = 0; i < str.length/2; i++){ 

        if(str[i] != str[str.length - i - 1]){      // str.length-i-1 => is the end of the string

            return false 

        } 

    } 

    return true 

} 









//=========>>>>>>>>     still slice takes so much of time not efficient




//let s = "cbbd" 

let largestPStart = 0; 

let largestPEnd = 0; 

for( let i = 0; i < s.length; i++){ 

    for( let j = i; j < s.length; j++){ 

        // current substring is between [i,j] 

        const isP = checkPal(s, i, j) 

        if(isP){ 

            const maxLen = largestPEnd - largestPStart + 1 

            let currentPLen = j - i + 1 

            if(maxLen < currentPLen){ 

                largestPStart = i; 

                largestPEnd = j; 

            } 

        } 

    } 

} 

console.log(s.slice(largestPStart, largestPEnd+1)) 

 

function checkPal(s, first, last){ 

    while(first <= last){        // we can also write < only why?   because midlle one in odd str will be P

        if(s[first] != s[last]){ 

            return false 

        } 

        // s[first] == s[last] 

        first++; 

        last--; 

    } 

    return true 

} 









 
/// ====>>>> submited on leetcode 
/** 

 * @param {string} s 

 * @return {string} 

 */ 

var longestPalindrome = function(s) { 

    let maxStart = 0; 

    let maxEnd = 0; 

    for(let i = 0; i < s.length-1; i++){ 

        const [oddStart, oddEnd] = largestPal(s, i,i) 

        const [evenStart, evenEnd] = largestPal(s, i,i+1) 

        const oddLen = oddEnd - oddStart + 1 

        const evenLen = evenEnd - evenStart + 1 

        const maxLen = maxEnd - maxStart + 1; 

        if(oddLen > maxLen){ 

            maxStart = oddStart 

            maxEnd = oddEnd 

        } 

        if(evenLen > maxLen){ 

            maxStart = evenStart 

            maxEnd = evenEnd 

        } 

    } 

    return s.slice(maxStart, maxEnd + 1) 

}; 

function largestPal(s, i,j){ 

    while( i > -1 && j < s.length && s[i] == s[j]){ 

        i--; j++ 

    } 

    return [i+1, j-1] 

} 