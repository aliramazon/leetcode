/*
Design a max stack data structure that supports the stack operations and supports finding the stack's maximum element.

Implement the MaxStack class:

MaxStack() Initializes the stack object.
void push(int x) Pushes element x onto the stack.
int pop() Removes the element on top of the stack and returns it.
int top() Gets the element on the top of the stack without removing it.
int peekMax() Retrieves the maximum element in the stack without removing it.
int popMax() Retrieves the maximum element in the stack and removes it. If there is more than one maximum element, only remove the top-most one.
 

Example 1:

Input
["MaxStack", "push", "push", "push", "top", "popMax", "top", "peekMax", "pop", "top"]
[[], [5], [1], [5], [], [], [], [], [], []]
Output
[null, null, null, null, 5, 5, 1, 5, 1, 5]

Explanation
MaxStack stk = new MaxStack();
stk.push(5);   // [5] the top of the stack and the maximum number is 5.
stk.push(1);   // [5, 1] the top of the stack is 1, but the maximum is 5.
stk.push(5);   // [5, 1, 5] the top of the stack is 5, which is also the maximum, because it is the top most one.
stk.top();     // return 5, [5, 1, 5] the stack did not change.
stk.popMax();  // return 5, [5, 1] the stack is changed now, and the top is different from the max.
stk.top();     // return 1, [5, 1] the stack did not change.
stk.peekMax(); // return 5, [5, 1] the stack did not change.
stk.pop();     // return 1, [5] the top of the stack and the max element is now 5.
stk.top();     // return 5, [5] the stack did not change.
 

Constraints:

-107 <= x <= 107
At most 104 calls will be made to push, pop, top, peekMax, and popMax.
There will be at least one element in the stack when pop, top, peekMax, or popMax is called.
 

Follow up: Could you come up with a solution that supports O(1) for each top call and O(logn) for each other call? 
*/

class MaxStack {
    #maxStack;
    #data;
    constructor() {
        this.#data = [];
        this.#maxStack = [];
    }

    push(number) {
        this.#data.push(number);
        let max =
            this.#maxStack.length === 0
                ? number
                : this.#maxStack[this.#maxStack.length - 1];
        this.#maxStack.push(number > max ? number : max);
    }

    pop() {
        this.#maxStack.pop();
        return this.#data.pop();
    }

    top() {
        return this.#data[this.#data.length - 1];
    }

    // #getMaxIndex() {
    //     let maxIndex = this.#data.length - 1;
    //     for (let i = this.#data.length - 1; i >= 0; i--) {
    //         let ele = this.#data[i];
    //         if (this.#data[maxIndex] < this.#data[i]) {
    //             maxIndex = i;
    //         }
    //     }

    //     return maxIndex;
    // }

    peekMax() {
        return this.#maxStack[this.#maxStack.length - 1];
    }

    popMax() {
        let temp = [];
        let poppedMax = this.#maxStack.pop();
        while (this.top() !== poppedMax) {
            temp.push(this.pop());
        }
        this.#data.pop();

        while (temp.length) {
            this.push(temp.pop());
        }

        return poppedMax;
    }
}
