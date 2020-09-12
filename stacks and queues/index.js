/***********
 * STACKS AND QUEUES
*****************/

/* stacks and queues are linear datastructures.
   
   //Stacks
    lookup - O(n)
    pop -O(1)  - get the last plate
    push -O(1) - add a plate
    peek -O(1) - view the topmost plate

    think of stacks like a collection cakes on top of eacg other which follow the LIFO 
    (last in first out), which means the last element to get in is always at the top of stack.

    most prog lang are build around stack.
    

    //Queues
    queues are opposite of stacks in the sens e they are built on FIFO which is first in first out

    lookup -O(n)
    enqueue - adding an element to que - O(1)
    dequeue - removing the first element - O(1)
    peek - O(1)





    /**Implementing Stacks using Linked Lists */
class Node {
  constructor(value){
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor(){
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }
  peek() {
    if(!this.top) return undefined;

    return this.top.value;
  }
  push(value){
    const newNode = new Node(value);
    if(this.length === 0){
      this.top = newNode;
      this.bottom = this.top;
      this.length ++;
      return;
    }
    newNode.next = this.top
    this.top = newNode;
    this.length ++;
    
  }
  pop(){
    if(!this.top.next){
      this.bottom = null;
    }
    this.top = this.top.next;
    this.length --;

    return this.length
  }
  isEmpty(){
    if(this.length === 0) return true;

    return false;
  }
}

const myStack = new Stack();

myStack.push('Discord');
myStack.push('Udemy');
myStack.push('google');
myStack.push('amazon');
myStack.push('facebook');
myStack.push('e-beta');
myStack.pop();
myStack.pop();
myStack.pop();
myStack.pop();
myStack.pop();
myStack.pop();
console.log(myStack);

//Discord
//Udemy
//google


/*                                    
  We just implemented stacks using linked lists now we are going to implement stacks using arrays.

*/ 
class Stack{
    constructor(){
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }

    push(val){
        
        
        if(!this.top){
            const newStack = [val];
            this.top = newStack;
            this.bottom = newStack;
            this.length++;
        }else{
            
            const hold = this.top;
            this.top = [val,...hold];
            this.length++;
        }
        
        
        
    
    }
    pop(){
        if(!this.top) return null;

        return this.top.pop();
    }
}

const myStack = new Stack();
myStack.push('google');
myStack.push('udemy');
myStack.push('youtube');
console.log(myStack);


//implementing queues using stacks
