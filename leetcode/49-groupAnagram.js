function validAnagram(strs) {
    const sortedStrs=strs.map(word=> word.split('').sort().join(''));
    const map=new Map();
    for (let i=0;i<strs.length;i++){
        if(map.has(sortedStrs[i])){
            map.get(sortedStrs[i]).push(strs[i])
        }
        else{
            map.set(sortedStrs[i],[strs[i]])

        }
    }
    return Array.from(map.values())
}

console.log(validAnagram(["eat", "tea", "tan", "ate", "nat", "bat"]));