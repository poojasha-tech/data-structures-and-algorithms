function isPalindrome(string){
    let checkString=string.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    let reverseString="";
    for(let i=checkString.length-1 ; i>=0 ;i--){
        reverseString=reverseString+checkString[i]

        
    }
    if(reverseString==checkString){
            return true
        }
    else{
        return false
    }
}
console.log(isPalindrome("A man, a plan, a canal: Panama"))