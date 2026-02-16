// function fisrstIndexOccurence(haystack,needle){ 
//     for(let i=0; i<haystack.length; i++){
//         let j=0;
//         while(j<needle.length && haystack[i+j]===needle[j]){ 
//             j++;
//         }
//         if(j===needle.length) return i;
//     }
//     return -1;
// }
// this will take O(m*n) time complexity where m is the length of haystack and n is the length of needle ,
//optimal approach is to use substring method of string which will take O(m*n) time complexity in worst case 
// but it is more readable and easier to understand


function fisrstIndexOccurence(haystack, needle) {
    let result = -1;
    for (let i = 0; i < haystack.length - needle.length + 1; i++) {
        if (haystack.substring(i, i + needle.length) === needle) {
            result = i;
            break;
        }
    }
    return result
}
//console.log(fisrstIndexOccurence(haystack = "sadbutsad", needle = "but"))
console.log(fisrstIndexOccurence(haystack = "mississippi", needle = "issip"))