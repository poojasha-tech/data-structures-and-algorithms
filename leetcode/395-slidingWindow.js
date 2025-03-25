//  function subStringWithAtleastKFreq(s, k) {
//     if(s.length=== 0) return 0
//     let storeFreq=new Map()
//     for(const letters of s){
//         storeFreq.set(letters,(storeFreq.get(letters) ||0) +1)
//     }
//     let splittedSubstring=[];
//     let start=0;
//     for(let i=0;i<s.length;i++){
//         if(storeFreq.get(s[i])< k ){
//             splittedSubstring.push(s.slice[start,i]);
//             start=i+1;
//         }
//     }
//     splittedSubstring.push(s.slice(start))

//     if(splittedSubstring.length=== 1 ) return s.length;

//     //recurse 
//     let maxLenOfSubString=0
//     for(const ch of splittedSubstring){
//         maxLenOfSubString=Math.max(maxLenOfSubString,subStringWithAtleastKFreq(splittedSubstring,k))
//     }
//     return maxLenOfSubString

    
// };


function subStringWithAtleastKFreq(s,k){
    const freq= new Map();
    let maxLen=0
    let left=0;

    for(let right=0 ; right<=s.length ; right++){
        freq.set(s[right],(freq.get(s[right])|| 0)+1)

        if(freq.size<k){
            
        }
    }
}

console.log(subStringWithAtleastKFreq("aaabb",3))