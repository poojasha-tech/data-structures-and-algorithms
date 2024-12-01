function rabinKarp(targetString,patternString){
    const tsL=targetString.length;   // n
    const psL=patternString.length;  // m
    const m=1000000007
    const p=73;
    let res=[];
    
    // we are putting p^ in advance 
    let pm=1;
    for(i=1;i<psL;i++){       //O(m)
        pm=pm*p %m;
        

    }
    
    // hash of pattern String 
    let patternStringHash=0;
    for(let i=0;i<psL;i++){      //O(m)
        patternStringHash=((patternStringHash * p) + patternString.charCodeAt(i)) % m;
    }
    let targetStringHash=0;     
    for(let i=0;i<psL;i++){      //O(m)
        targetStringHash=((targetStringHash * p) + targetString.charCodeAt(i)) % m;
    }

    if(patternStringHash==targetStringHash)
        res.push(0) ;


    // next window ....removeing first part and adding i th part

    for(let i=psL; i<tsL ;i++){    //O(n-m)
        const charToRemove=targetString.charCodeAt(i - psL) * pm % m
        targetStringHash=((targetStringHash-charToRemove)+ m) % m
        targetStringHash=targetStringHash * p % m
        targetStringHash=(targetStringHash + targetString.charCodeAt(i)) % m

        if (targetStringHash==patternStringHash)
        res.push(i - psL + 1)
    }
    return res;
}

//console.log(rabinKarp("abbabab","bab"))      // 3 O(m)+O(n-m)  // O(n)con



console.log(solve("abbababbsbfdsjkfjndjsbfnsbfjsnfdj",["ab","bb","zz","sbf"])) // true , true , false

function solve(t,ss){
    let result=[]

    for(let i=0;i<ss.length;i++){
        let ans= rabinKarp(t,ss[i])
        if(ans.length>0){
            result.push(true);
        }
        else{
            result.push(false)
        }
    }
    return result;
}
