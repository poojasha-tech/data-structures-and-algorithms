const LineReader = require('./lineReader');

const reader = new LineReader('input.txt'); 

 

// const a = reader.nextLine().split(',').map(v => Number(v)) 

const arrayLine = reader.nextLine(); 

const arrayStringList = arrayLine.split(',') 

//map
const a=[]
for (let i=0; i<arrayStringList.length; i++){
    a.push(Number(arrayStringList[i]))

}

const m = Number(reader.nextLine()) 

// a.sort(); // nlogn 

for(let i = 0; i < m; i++) { //m 

    let elementToFind = Number(reader.nextLine()) 

    var isPresent = findElementInList(a, elementToFind); 

    console.log(isPresent); 

} 


 

function findElementInList(listToFindIn, numberToFind){ // n 

    for(let i = 0; i < listToFindIn.length; i++){ 

            if(listToFindIn[i] == numberToFind){ 

                return true 

            } 

    } 

    return false 

} 

// 4 
// 1 n 
// 2 n 
// 3 n 
// 4 n 
// m * n 
// time complexity is O(m*n) 

 