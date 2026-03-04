function monotonicStack(arr) {
    const stack = [];
    const result = new Array(arr.length).fill(-1);

    for (let i = 0; i < arr.length; i++) {
        while (stack.length > 0 &&  arr[i]> arr[stack[stack.length - 1]] ) {
            const index = stack.pop();
            result[index] = arr[i];
        }
        stack.push(i);
    }

    return result;
}

// Example usage:
const arr = [2, 1,5];
console.log(monotonicStack(arr)); 

// Time complexity: O(n)
// Space complexity: O(n)