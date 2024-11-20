let a=[2,3,-4,-9]
function positivSum(a){
    let total=0;
    for(i=0;i<=a.length-1;i++){
        if(a[i]>=0){
            total=total+a[i];
            //console.log(total)
        }
        else{
            continue;
        }
    }
    return total;
}
console.log(positivSum(a));

//O(n)