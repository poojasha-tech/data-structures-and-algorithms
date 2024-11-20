const LineReader = require('./lineReader'); 

const reader = new LineReader('input.txt'); 

const a = reader.nextLine().split(',').map(v => Number(v)) 

 

let hashSet = new Set(a);     // map the elemnts in the form of hash map

const m = Number(reader.nextLine()) 

for(let i = 0; i < m; i++) { //m 

    let elementToFind = Number(reader.nextLine()) 

    var isPresent = hashSet.has(elementToFind); 

    // var isPresent = findElementInListInLogNTime(a, elementToFind); 

    console.log(isPresent); 

} 