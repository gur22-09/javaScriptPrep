/***************************** 
   LINKED LISTS

/*****************************/
/*
  so typically linked lists consists of nodes which point to each other using a pointer,
  a node consists of the data stored in it and a pointer pointing to the memory location of another node 
  in the same linked list.

  the starting node is called Head and the last node is called Tail, note that the linked list always
  terminates at null.

  e.g
          Apple(head) 
          8467 --->  Orange
                     7747  ---> Grapes(tail) 
                                 1254  ---> Null


  if we look at how our list performs in terms of complexity we find-
  
  prepend-adding element at the beginin - O(1)
  append- adding elemt at the end - O(1)
  lookup - searching for a particular value - O(n)
  inser - adding in between - O(n)
  delete - O(n)
*/

//now we aregoing to codeup our very own linked list.
//10-->5-->15
class Node{ 
   constructor(val){
      this.value = val;
      this.point = null;
   }
      
}


class LinkedList{
  constructor(value){
    this.head={
      value:value,
      point:null
    };
    this.tail=this.head;

    this.length = 1;
  }

  append(value){
    const newNode = {
      value:value,
      point:null
    }

    this.tail.point = newNode;

    this.tail = newNode;
    this.length++;
  }
  
  prepend(value){
    const newNode = {
      value:value,
      point:null
    }

    newNode.point = this.head;
    this.head = newNode;
    this.length++
  }
   
  insert(index,value){
    if(index>=this.length) return undefined;

    const newNode = {
      value:value,
      point:null
    }
    
    //list element just before our insert index i.e prige-->insert-->apoge
    const perige = this.traverseList(index-1);
    const apoge = perige.point;

    perige.point = newNode;
    newNode.point = apoge;
    
  }

  traverseList(n){
    let count = 0;
    let currNode = this.head;

    while(count !== n){
      currNode = currNode.point;
      count++;
    }

    return currNode;
  }

  printList(){
    let arr = [];
     
    let currNode = this.head;

    while(currNode !== null){
      arr.push(currNode.value);
      currNode = currNode.point;
    }

    console.log(arr);
  }

  remove(index){
    
    if(index<0 || index >= this.length) return undefined;
   
    const currNode = this.traverseList(index);
    const perige = this.traverseList(index-1);
    perige.point = currNode.point;//this will make the curr node garbage collectedvalue as it is not being pointed at
    

  }


}

//note that in javascript memory is managed by the language itself, so anything unused or garbage will
//be deleted by itself.
//so when no pointer points to the node we want to delete it gets deleted itself.
 

const myList = new LinkedList(10);
myList.append(5);
myList.prepend(25);
myList.insert(2,6);
myList.remove(2);
myList.printList();

/*
   //Doubly Linked List
     
   it is similar to a single linked list execpt for the fact that the node now has two pointer.
   where the first pointer is pointing to node right after and the other to the node before it.

   This allows us to loop backwards in the linked list and the lookup time is technically reduced to half
   at the cost of some additional memory.



 */


 class Node{
  constructor(value){
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor(value){
    this.head = new Node(value);
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    // create new node
    const newNode = new Node(value);
   //make tail next point new node
   this.tail.next = newNode;
   //make new node prev point tail
   newNode.prev = this.tail;
   //declare new node as the new tail
   this.tail = newNode;
   //increase lenght by one
   this.length++;
   return this;
  }

  prepend(value) {
    //create new node
    const newNode = new Node(value);
    //make head's prev point new node
    this.head.prev = newNode;
    //make new node's next point head
    newNode.next = this.head;
    //declare new node as head
    this.head = newNode;
    this.length ++;
    return this;
  }
  traverse(index,bol = true ) {
    let count = 0;
    let currentNode = bol ? this.head : this.tail;
    while (count !== index){
      currentNode = bol ? currentNode.next : currentNode.prev;
      count++;
    }
    //console.log(currentNode);
    return currentNode;
  }
  insert(index,value) {
    // param check
    if(!index || !value || index >= this.lenght ){
      console.error('Error');
    }
    const len = this.length;
    //create new node
    const newNode = new Node(value);
    let before = null;
    let after = null;
    // figure best traverse to insert traverse to index - 1
    if(index < len/2){
      //traverse from head
      before = this.traverse(index-1);
      after = before.next;
      //make before next point new node
      before.next = newNode;
      //make new node prev point before
      newNode.prev = before
      //make new node next point after
      newNode.next = after;
      //mkae after prev point new node
      after.prev = newNode;
      this.length ++;
      return this;
    }
      //traverse from tail
      before = this.traverse(this.length - index,false);
      after = before.next;
      //make before next point new node
      before.next = newNode;
      //make new node prev point before
      newNode.prev = before;
      //mkae new node next point after
      newNode.next = after;
      //mkae after prev point new node
      after.prev = newNode;
      console.log(after);
      this.length++;
      return this;
  }
}

const myLinkedList = new DoublyLinkedList(5);
myLinkedList.append(10);
myLinkedList.append(3);
myLinkedList.append(15);
myLinkedList.append(20);
myLinkedList.insert(3,12);
//console.log(myLinkedList);

