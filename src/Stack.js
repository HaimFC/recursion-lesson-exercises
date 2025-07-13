
// Implemention of stack as explanied in the wikipedia link

class Stack {
  constructor() {
    this._stack = [];
  }

  push(val) {
    this._stack.push(val);
  }

  pop() {
    return this._stack.pop();
  }

  peek() {
    return this._stack[this._stack.length - 1];
  }

  isEmpty() {
    return this._stack.length === 0;
  }

  size() {
    return this._stack.length;
  }

  print(){
    return console.log(this._stack);
  }

reverse() {
    const reversedStack = new Stack();
    const items = [...this._stack].reverse(); // שומר על המקור ולא משנה אותו

    for (let item of items) {
        reversedStack.push(item);
    }

    return reversedStack;
    }
}

module.exports = Stack;