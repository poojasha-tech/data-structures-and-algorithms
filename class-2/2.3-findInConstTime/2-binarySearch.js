const LineReader = require('./lineReader'); 

const reader = new LineReader('input.txt'); 

const a = reader.nextLine().split(',').map(v => Number(v)) 

a.sort((a, b) => a - b) // this is how we sort in js


const m = Number(reader.nextLine()) 

for(let i = 0; i < m; i++) { //m 

    let elementToFind = Number(reader.nextLine()) 

    var isPresent = findElementInListInLogNTime(a, elementToFind); 

    console.log(isPresent); 

} 

 

function findElementInListInLogNTime(a, target){ 

    let isPresent = binarySearch(a, 0, a.length - 1, target) 

    return isPresent 

} 

 

function binarySearch(a, lo, hi, target){ 

    if (lo > hi) return false 

    const mid = Math.floor( (lo + hi) / 2 ) // 4.5 -> 4 

    console.log('in binary search target/lo/mid/hi', target,lo, mid, hi) 

    if(a[mid] == target) return true 

    if(a[mid] > target) return binarySearch(a, lo, mid-1, target); 

    else return binarySearch(a, mid + 1, hi, target) 

} 





// 1, 4, 9 => 9 
// 1,2,3,4,6,7,12,13,14,16,18,21,24,26,28,29,33,36,39,42 => 37 
// 1,2,3,4,6,7,12,13,14,16,18,21,24,26,28,29,33,36,39,42 => 39 
// 1,9 => 1 
// 8 => 1