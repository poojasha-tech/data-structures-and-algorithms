class ListNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

function arrayToLinkedList(arr) {
    if (arr.length === 0) return null;
    const head = new ListNode(arr[0]);
    let current = head;
    for (let i = 1; i < arr.length; i++) {
        current.next = new ListNode(arr[i]);
        current = current.next;
    }
    return head;
}
// the idea is ass soon as fast reached the end with n jumps in the starting , slow be the at the nth postion from last 
function removeNthFromEnd(head, n) {
    let dummy =new ListNode(0);
    dummy.next=head
    let slow=dummy;
    let fast=head;
    for(let i=0;i<n;i++){ 
        fast=fast.next    
    }
    while(fast!==null){
        slow=slow.next 
        fast=fast.next 
    }
    //delete slow.next
    slow.next=slow.next.next
    return dummy.next

}
console.log(removeNthFromEnd(arrayToLinkedList([1,2,3,4,5]), 2)) // [1,2,3,5]
// console.log(removeNthFromEnd(arrayToLinkedList([1]), 1)) // []
// console.log(removeNthFromEnd(arrayToLinkedList([1,2]), 1)) // [1]