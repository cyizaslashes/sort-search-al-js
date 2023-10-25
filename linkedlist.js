// Implementation of a linked list search in JavaScript
class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }
  
  class LinkedList {
    constructor() {
      this.head = null;
    }
  
    append(data) {
      const newNode = new Node(data);
      if (!this.head) {
        this.head = newNode;
        return;
      }
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
  
    search(target) {
      let current = this.head;
      while (current) {
        if (current.data === target) {
          return true;
        }
        current = current.next;
      }
      return false;
    }
  }
  
  // Example usage:
  const linkedList = new LinkedList();
  linkedList.append(5);
  linkedList.append(10);
  linkedList.append(15);
  linkedList.append(20);
  console.log(linkedList.search(10)); // Output: true
  console.log(linkedList.search(12)); // Output: false
  