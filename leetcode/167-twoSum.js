// function twoSum(numbers,target){
//     for(let i=0; i<numbers.length-1;i++){
//         for(let j=i+1;j<numbers.length;j++){
//             let target_=target-numbers[i];

//             if(target_==numbers[j]){
//                 return [i+1,j+1]
//             }
//         }
//     }

// }

function twoSum(numbers,target){
    let i=0;
    let j=numbers.length-1;
    while(i<j){
        if((numbers[i]+numbers[j])< target){
            i++;
        }
        else if((numbers[i]+numbers[j])> target){
            j--;
        }
        else{
            return [i+1,j+1]
        }
    }
}
console.log (twoSum([2,3,4],7))    