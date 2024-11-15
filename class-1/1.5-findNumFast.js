// let a = [2, 1, 3, 5, 4]


// a = [1,3,2], ans = 4
let a = [1];   //ans=2
// a = [2,1,4], ans = 3

let agg = sum(a)

function sum(ary){
    let total=0;
    for(let i=ary.length-1;i>=0;i--){
        total=total+a[i];
    }
    return total;

}
let apSum=((a.length+1)*(a.length+2))/2;
console.log(apSum-agg)

//O(n)+O(1)=O(n)