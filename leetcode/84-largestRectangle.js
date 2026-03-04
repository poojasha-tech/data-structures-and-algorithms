function largestRectangleArea(heights){
    let stack=[];// increasing stack
    let area=0;
    let min=0
    for(let i=0;i<heights.length;i++){
        while(stack.length>0 && heights[i] < stack[stack.length-1]){
            stack.pop();
        }
        const currentMin=stack.push(heights[i]);
        min=currentMin;
        
    }
}
console.log(largestRectangleArea(heights = [2,1,5,6,2,3]))