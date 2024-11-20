function twoSum(a,t){
    let ans=[];
    for(i=0;i<=a.length-1;i++){   
        let t_=t-a[i];
        for(j=i+1;j<=a.length-1;j++){       // -1 should not be there , because then it will trhoug error if the expected number is the last one
            //console.log(i,j)
            if(a[j]==t_){
                ans.push([a[j],a[i]])
            }
        }
    }
    return ans;
}


let ary=[1,3,5,4,6]
let target=9;

var res=twoSum(ary,target);
console.log(res);
