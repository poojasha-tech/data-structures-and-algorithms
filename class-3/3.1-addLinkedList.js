/** 

 * Definition for singly-linked list. 

 * function ListNode(val, next) { 

 *     this.val = (val===undefined ? 0 : val) 

 *     this.next = (next===undefined ? null : next) 

 * } 

 */ 

/** 

 * @param {ListNode} l1 

 * @param {ListNode} l2 

 * @return {ListNode} 

 */ 

var addTwoNumbers = function(l1, l2) { 

    let l1Node = l1 

    let l2Node = l2 

    let carry = 0 

    let resultList = [] 

    while(l1Node || l2Node){  //until l1Node or l2Node is not null

        let s = l1Node.val + l2Node.val + carry 

        carry = s > 9 ? 1 : 0 

        s = s % 10 

        l1Node = l1Node.next 

        l2Node = l2Node.next 

        resultList.push(s) 

    } 

    if(carry > 0) resultList.push(carry); 

    console.log(resultList) 



  // convert array digits to Single Linked List   

    var resultNodeList = new ListNode(resultList[0], null) 

    var currentNode = resultNodeList  //pointer to track next node

    for(let i = 1; i < resultList.length; i++){ 

         

        const newNode = new ListNode(resultList[i], null) 

        currentNode.next = newNode 

        currentNode = newNode 

    } 

    return resultNodeList; 

}; 