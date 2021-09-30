const arraySign = (nums) => {
    let assumedProduct = 1;

    for (let num of nums) {
        if (num === 0) return 0;

        assumedProduct *= num < 0 && -1;
    }

    return assumedProduct;
};
