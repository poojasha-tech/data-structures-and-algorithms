function stringMatch(p, t) {
    const pl = p.length
    const tl = t.length
    const m = 1000000007 // 10^9 + 7 
    const a = 53   // prime number gretaer than the number of char

    let am = 1;
    for (let i = 1; i < pl; i++) am = am * a % m;
    
    let ph = 0
    for (let i = 0; i < pl; i++) {

        ph = ((ph * a) % m + p.charCodeAt(i)) % m

    }
    
    let th = 0
    for (let i = 0; i < pl; i++) {

        th = ((th * a) % m + t.charCodeAt(i)) % m

    }

    if (th == ph) return 0

    for (let i = pl; i < tl; i++) {

        const charToRemoveValue = t.charCodeAt(i - pl) * am % m // t[0] * p^pl-1  

        th = ((th - charToRemoveValue) + m) % m

        th = (th * a + t.charCodeAt(i)) % m // add newvalue 

        if (th == ph) return i - pl + 1

    }

}

var pIndex = stringMatch("abcea", "eaababceacd")

console.log(pIndex) 




