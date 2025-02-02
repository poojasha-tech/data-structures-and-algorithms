///palindrome string
let a="pooja"
let b="";
for(let i=a.length-1;i>=0;i--){
    b=b+a[i]
    console.log(b)
    console.log( " index at ",a[i])
}
if(a==b){
    console.log("string is palindrome")
}
else{
    console.log("string is not palindrome!")
}


// palindrome number
var isPalindrome = function(x) {
    if (x<0) return false;
    let str=x.toString();
    let n=str.length;
    let i=0;
    let j=n-1;
    while(i<j){
        if(str[i]==str[j]){
            i++;
            j--;
        }
        else{
            return false
        }
    }
    return true;
    
};