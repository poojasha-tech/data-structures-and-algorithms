function intToRoman(num) {
    let roman = [   // why array of arrays? because we need to maintain the order of values from highest to lowest
        [1000, 'M'], // why use arrays instead of object? because objects do not maintain order
        [900, 'CM'], //[value, symbol]
        [500, 'D'],
        [400, 'CD'],
        [100, 'C'],
        [90, 'XC'],
        [50, 'L'],
        [40, 'XL'],
        [10, 'X'],
        [9, 'IX'],
        [5, 'V'],
        [4, 'IV'],
        [1, 'I']
    ];
    let res = '';
    for (let [value, symbol] of roman) {//check each value from highest to lowest
        while (num >= value) {
            res += symbol;
            num -= value;
        }
    }
    return res; 

}

console.log(intToRoman(2994))