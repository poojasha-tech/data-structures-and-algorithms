
let a = [1, 2, 3, 4, 6]
let agg = sum(a)
console.log(agg) // prints 16


function sum(ary){
    let total=0;
    for(let i=ary.length-1;i>=0;i--){
        total=total+a[i];
    }
    return total;

}


