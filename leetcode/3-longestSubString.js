function longestSubStringNoDuplicates(s) {
    const bag = new Set()
    let i = 0, j = 0, max = 0;
    while (j < s.length) {

        if (bag.has(s[j])) {
            while (s[i] != s[j]) {
                bag.delete(s[i]) // we are deleting all the characters from the 
                                 // left until we find the duplicate character
                i++;
            }
            bag.delete(s[i])
            i++;

        }

        else {

            bag.add(s[j])
            // max = j - i + 1 > max ? j - i + 1 : max; 
            if (max < j - i + 1) { // as we are only increasing j
                                  // and i is only increasing when we have a duplicate, 
                                  // so we can just check if the current length is greater
                                  //  than max and update max accordingly
                max = j - i + 1
            }
            j++;

        }

    }

    return max

}
console.log(longestSubStringNoDuplicates("abcabcbb"))