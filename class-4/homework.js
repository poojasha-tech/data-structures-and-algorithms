// let s=[1,4,2,3,6,5,7,8]

// function evenOdd(s){
//     let result=[];
//     for(let i=0;i<s.length;i++){
//         if(s[i] % 2 == 0){
//         result.push(true)
//         }
//         else{
//         result.push(false)
//         }
//     } 
//     return result
// }

//console.log(evenOdd(s))


let number=parseInt(prompt("enter a number to see star magic:"),10);

if(isNaN(number) <=0){
    console.log("not a number !")
}
else {
    for (let i=0; i<=number ;i++){
    let row="";
    for(let j=1; j<=i;j++){
        row+="*";
    }
    console.log(row)
}

}
