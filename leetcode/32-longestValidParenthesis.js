function longestValidParentheses(s) {
    let maxLength = 0;
    const stack = [-1]; // Initialize stack with -1 to handle edge case

    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') {
            stack.push(i); // Push the index of the opening parenthesis
        } else {
            stack.pop(); // Pop the last opening parenthesis index

            if (stack.length === 0) {
                stack.push(i); // If stack is empty, push the current index as a new base
            } else {
                maxLength = Math.max(maxLength, i - stack[stack.length - 1]); // Calculate valid length
            }
        }
    }

    return maxLength;

}

console.log(longestValidParentheses("(()"))