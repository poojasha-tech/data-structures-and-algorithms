function longestSubStringNoDuplicates(s) {
    const bag = new Set()
    let i = 0, j = 0, max = 0;
    while (j < s.length) {

        if (bag.has(s[j])) {
            while (s[i] != s[j]) {
                bag.delete(s[i])
                i++;
            }
            bag.delete(s[i])
            i++;

        }

        else {

            bag.add(s[j])
            // max = j - i + 1 > max ? j - i + 1 : max; 
            if (max < j - i + 1) {
                max = j - i + 1
            }
            j++;

        }

    }

    return max

}