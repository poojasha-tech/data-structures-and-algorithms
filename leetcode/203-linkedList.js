class ListNode {
    constructor(val, next) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    }
}
function arrayToLinkedList(arr) {
    if (arr.length === 0) return null;
    let head = new ListNode(arr[0]);
    let current = head;
    for (let i = 1; i < arr.length; i++) {
        current.next = new ListNode(arr[i]);
        current = current.next;
    }
    return head;
}

function removeElements(head, val) {
    let dummy = new ListNode(0);
    dummy.next = head;
    let current = dummy;
    while (current.next !== null) { 
        if (current.next.val === val) {
            current.next = current.next.next; // skip the node with the target value
        } else {
            current = current.next; // move to the next node
        }
    }
    return dummy.next; // return the new head of the list
}
const newLinkListHead = removeElements(arrayToLinkedList([1,2,6,3,4,5,6]), 6);
console.log(newLinkListHead);