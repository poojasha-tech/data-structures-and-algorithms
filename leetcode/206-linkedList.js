class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

// Convert array → linked list
function arrayToList(arr) {
  let dummy = new ListNode(0);
  let current = dummy;

  for (let num of arr) {
    current.next = new ListNode(num);
    current = current.next;
  }

  return dummy.next;
}

// Convert linked list → array (for easy output)
function listToArray(head) {
  let result = [];
  let current = head;

  while (current) {
    result.push(current.val);
    current = current.next;
  }

  return result;
}
function reverseList(head) {
    let  prev =  null;
    let curr = head ;
    while ( curr!== null) {
        const next  = curr. next; 
        curr .next = prev ; // it means curr.next is now pointing to prev, which is the previous node in the original list.
        prev = curr; // prev will be equal to curr
        curr  = next ; 
    } 
    return  prev; 
}         