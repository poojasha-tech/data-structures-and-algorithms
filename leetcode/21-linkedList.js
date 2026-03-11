// Basic Linked List Node
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

/*
  🔥 Your job is ONLY to write this function
*/
function mergeTwoLists(list1, list2) {
    let dummy = new ListNode(0);
    let current = dummy;
    while (list1 && list2) {
        if (list1.val < list2.val) {
            current.next = list1; // why not write list1.val? because we want to link the whole node, not just the value
            list1 = list1.next;   
        } else {
            current.next = list2;
            list2 = list2.next;
        }
        current = current.next;
    }
    // If there are remaining nodes in either list, append them
    current.next = list1 || list2;
    return dummy.next;  


}



let list1 = arrayToList([1, 3, 5]);
let list2 = arrayToList([2, 4, 6]);

let merged = mergeTwoLists(list1, list2);

console.log(listToArray(merged));