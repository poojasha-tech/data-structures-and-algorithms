function isPalindrome(s){
    let modifiedS=s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    let i=0;
    let j=modifiedS.length-1;
    while(i < j){
        if (modifiedS[i]==modifiedS[j]){
            i++;
            j--;
        }
        else{
            return false
        }
        return true
    }
}

console.log(isPalindrome("A man, a plan, a canal: Panama"))