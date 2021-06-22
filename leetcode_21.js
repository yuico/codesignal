/* const mergeTwoLists = (l1, l2) => {
  newArr = [...l1, ...l2];
  return newArr.sort((a, b) => a - b);
}; 
l1 = [1, 2, 4];
l2 = [1, 3, 4];
console.log(mergeTwoLists(l1, l2));
*/

//linked list
class LinkedList {
  constructor() {
    this.head = this.tail = null
  }
  //add to end of list / tail
  append(value) {
    //if list is empty
    if(!this.tail) {
      this.head = this.tail = new Node(value);
    } else {
      let oldTail = this.tail
      this.tail = new Node(value)
      oldTail.next = this.tail
      this.tail.previous = oldTail
    }

  }

  //add to beginning of list / bead
  prepend(value) {
    //if list is empty
    if(!this.head){
      this.head = this.tail = new Node(value);
    }else{
      let oldHead = this.head
      this.head = new Node(value)
      oldHead.prev = this.head
      this.head.next = oldHead
    }
  }

  deleteHead() {

  }

  deleteTail() {

  }

  search() {

  }

}
class Node {
  constructor(value, prev, next) {
    this.value = value
    this.prev = prev || null
    this.next = next || null
  }
}


/* const mergeTwoLists = () => {
  
};
l1 = [1, 2, 4];
l2 = [1, 3, 4];
console.log(mergeTwoLists());
 */