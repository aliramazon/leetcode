const BinaryMinHeap = require("../helper-data-structures/02_BinaryMinHeap");

class KthLargest {
    constructor(k, nums) {
        this.k = k;
        this.heap = new BinaryMinHeap();

        for (let num of nums) {
            this.heap.insert(num);
        }

        while (this.heap.length > this.k) {
            this.heap.delete();
        }
    }

    add(value) {
        this.heap.insert(value);
        if (this.heap.length > this.k) {
            this.heap.delete();
        }

        return this.heap.root;
    }
}
