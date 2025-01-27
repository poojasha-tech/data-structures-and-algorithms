function isIsomorphic(s,t){
    if(s.length!==t.length) return false;

    const mapStoT={};  //js object
    const mapTtoS={};

    for(let i=0;i<s.length;i++){
        const charS=s[i];
        const charT=t[i];

        if(( mapStoT[charS] && mapStoT[charS] !==charT) ||
           ( mapTtoS[charT] && mapTtoS[charT] !==charS)){
            return false;
        }

        mapStoT[charS] = charT;
        mapTtoS[charT]= charS;
    }

    return true;
}

console.log(isIsomorphic("egg","adf"));
console.log(isIsomorphic("egg","add"));