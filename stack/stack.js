class Stack {
    constructor(){
        this.stack=[];
    }

    push(element){
        this.stack.push(element);
    }

    pop(){
        if(this.isEmpty()){
            return "stack is empty"
        }

        return this.stack.pop();
    }

    peek(){
        if(this.isEmpty()){
            return "stack is emopty"
        }
        //return this.stack[this.stack.length-1];
        return this.stack[this.size()-1];
    }

    isEmpty(){
        // return this.stack.length===0
        return this.size()===0
    }

    size(){
        return this.stack.length;
    }
}

const stack=new Stack();

stack.push(11);
stack.push(22);
console.log(stack.peek());
console.log(stack.size());