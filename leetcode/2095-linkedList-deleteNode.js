class ListNode {
    constructor(val, next) {
        this.val = val;
        this.next = next;
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

function linkedListToArray(head) {
    const arr = [];
    let current = head;
    while (current) {
        arr.push(current.val);
        current = current.next;
    }
    return arr;
}

function deleteMiddleNode(head) {
    if (!head || !head.next) return null; // If the list is empty or has only one node, return null
    let slow = head;
    let fast = head;
    let prev = null;

    while (fast && fast.next) { // means run the loop until fast reaches the end of the list
        prev = slow; // Keep track of the node before the middle
        slow = slow.next; // Move slow by 1
        fast = fast.next.next; // Move fast by 2
    }

    // Now, slow is at the middle node, and prev is the node before it
    prev.next = slow.next; // Skip the middle node
    return head; // Return the head of the modified listn
   
}