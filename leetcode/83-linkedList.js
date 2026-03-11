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

function deleteDuplicates(head) {
    let current=head;
    while(current && current.next){
        if(current.val===current.next.val){
            current.next= current.next.next
        }
        else{
            current=current.next
        }
    } 
    return head  
}



let list1 = arrayToList([1, 1, 2, 3, 3]);

let merged = deleteDuplicates(list1);
console.log(listToArray(merged)) 