var stack1 = [];
var stack2 = [];

var MyQueue = function () {
  stack1 = [];
  stack2 = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
  stack1.push(x);
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function () {
  if (stack2.length === 0) {
    while (stack1.length > 0) {
      stack2.push(stack1.pop());
    }
  }

  return stack2.pop();
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function () {
  return stack2[stack2.length - 1] || stack1[0];
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
  return stack1.length === 0 && stack2.length === 0;
};

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */

// input
// ["MyQueue","push","push","push","peek","pop","peek","pop","peek","empty","pop","empty"]
// [[],[1],[2],[3],[],[],[],[],[],[],[],[]]

// output
// [null,null,null,null,1,1,2,2,3,false,3,true]
