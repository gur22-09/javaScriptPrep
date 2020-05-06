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
  
//     class Node{
//         constructor(val){
//             this.value = val;
//             this.next = null; 
//         }
//     }

//     class Stack{
//         constructor(){
//            this.top = null;
//            this.bottom = null;
//            this.length = 0;
            
//         }

//         push(val){
//             const node = new Node(val);

//             if(!this.top){
//                 this.top = node;
//                 this.bottom = node;
                

//             }else{
               
//              const hold = this.top;
//              this.top = node;
//              node.next = hold;             
//             }
//             this.length++;
            
//             return this;
//         }
//         pop(){
//             if(!this.top) return null;
//             if(this.length ===1) this.bottom = null;

//             const top = this.top.value;
//             this.top = this.top.next;
//             this.length--;

//             return top;
//         }
        
//     }

//     const myStack = new Stack();
//     myStack.push(()=>console.log(1));
//     myStack.push(()=>console.log(11));
//     myStack.push(()=>console.log(121));
//     console.log(myStack.pop());
//    // myStack.push(5);
//     console.log(myStack);

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
myStack.push('pornHub');
console.log(myStack);