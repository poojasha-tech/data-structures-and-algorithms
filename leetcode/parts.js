var longestSubstring = function(s, k) {
     if(s.length=== 0) return 0
    let freq=new Map()
    for(const letters of s){
        freq.set(letters,(freq.get(letters) ||0) +1)
    }
    let part=[];
    let start=0;
    for(let i=0;i<s.length;i++){
        if(freq.get(s[i]) < k ){
            part.push(s.slice(start,i));
            start=i+1;
        }
    }
    part.push(s.slice(start))

    if(part.length=== 1 ) return s.length;

    //recurse 
    let maxLen=0
    for(const ch of part){
        maxLen=Math.max(maxLen,longestSubstring(ch,k))
    }
    return maxLen
};

longestSubstring("aaabb", 3)