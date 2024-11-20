let a = [1, 4, 3, 5, 4, 7] 
let ai=[];
for (i=0;i<=a.length-1;i++){
    ai.push([i,a[i]]);

}


//let ai = [[0, 1], [1, 4], [2, 3], [3, 5], [4, 4], [5, 7]] 

const target = 8 

//1 7, 5 3, 4 4 

let count = 0 

// a = [0, 1], b = [1, 4] 

//console.log(a) 

//console.log(ai) 

ai.sort((a, b) => a[1] - b[1]) 

//console.log(ai) 

for(let i = 0; i < ai.length; i++){ //n 

    // for(let j = i + 1; j < a.length; j++) 

    //     if(target - a[i] == a[j]) count++; 

    const t_ = target - ai[i][1] // if 4  

    var element = binarySearch(ai, i+1, a.length-1, t_) // log n 

    if(element){ 

        console.log(ai[i][0], element[0]) 

    } 

} 

// O(n logn) 

// 1000000 * 1000000000000 

        //   20000000 

 

function binarySearch(a, lo, hi, target){ 

    if (lo > hi) return false 

    const mid = Math.floor( (lo + hi) / 2 ) // 4.5 -> 4 

    if(a[mid][1] == target) return a[mid] 

    if(a[mid][1] > target) return binarySearch(a, lo, mid-1, target); 

    else return binarySearch(a, mid + 1, hi, target) 

} 