let a = [2, 1, 3, 5, 6]
a.sort()    //nlog(n)
//[1,2,3,5,6]
for(let i=0;i<=a.length-2;i++){
    if(a[i]+1==a[i+1]){
        console.log(a[i]+1)
        continue;

    }
    else{
        console.log("the missing number is " +(a[i]+1))
    }

}
// O(nlog(n))+O(n) =O(nlog(n))