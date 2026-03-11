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
function createCycle(head, pos) {
    if (pos === -1) return head;
    let tail = head;
    let cycleEntry = null;
    let index = 0;
    while (tail.next) {
        if (index === pos) {
            cycleEntry = tail;
        }
        tail = tail.next;
        index++;
    }
    if (index === pos) {
        cycleEntry = tail;
    }
    tail.next = cycleEntry;
    return head;
}

function detectCycle(head){
    let slow=head;
    let fast=head;
    while(fast!==null && fast.next!==null){
        slow=slow.next
        fast=fast.next.next
        if(slow===fast) break
    }
    if(fast===null || fast.next===null) return null
    fast=head
    while(slow!==fast){
        slow=slow.next
        fast=fast.next
    }
    return slow

}

console.log(detectCycle(createCycle(arrayToLinkedList([3,2,0,-4]), 1)).value) // 2
// console.log(detectCycle(createCycle(arrayToLinkedList([1,2]), 0)).value) // 1
// console.log(detectCycle(createCycle(arrayToLinkedList([1]), -1))) // null   