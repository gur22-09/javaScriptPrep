class Node {
  constructor(value){
    this.value = value;
    this.left = null;
    this.right = null;
   
  }
}

class BinarySearchTree {
  constructor(){
    this.root = null;
  }
  insert(value){
    const newNode = new Node(value);
    if(!this.root){
      this.root = newNode;
      return;
    }

    let currentNode = this.root;
    while(currentNode){
      if(value > currentNode.value){
        if(currentNode.right){
          currentNode = currentNode.right;
        }else{
          currentNode.right = newNode;
          break;
        }
      }else{
        if(currentNode.left){
          currentNode = currentNode.left;
        }else{
          currentNode.left = newNode;
          break;
        }
      }
    }

    return this;
  }
  lookup(value){
    //Code here
    let currentNode = this.root;
    while(currentNode){
      if(currentNode.value === value){
        return currentNode;
      }else if(currentNode.value < value){
        currentNode = currentNode.right;
      }else{
        currentNode = currentNode.left;
      }
    }

    return null;
  }
  // remove
}

const tree = new BinarySearchTree();
tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(170);
tree.insert(15);
tree.insert(1);
//JSON.stringify(traverse(tree.root));
tree.lookup(9);
//     9
//  4     20
//1  6  15  170

function traverse(node) {
  const tree = { value: node.value };
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);
  return tree;
}





