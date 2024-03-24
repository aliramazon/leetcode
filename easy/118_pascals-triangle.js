/* 

Given an integer numRows, return the first numRows of Pascal's triangle.
In Pascal's triangle, each number is the sum of the two numbers

Example 1:
Input: numRows = 5
Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]

Example 2:
Input: numRows = 1
Output: [[1]]
*/

const pascalTriangleRecursive = (numRows) => {
    let rows = [[1]];

    const generate = (lastRow) => {
        if (rows.length === numRows) return;
        let temp = [1];
        for (let i = 0; i < lastRow.length - 1; i++) {
            temp.push(lastRow[i] + lastRow[i + 1]);
        }
        temp.push(1);
        rows.push(temp);
        generate(temp);
    };
    generate([1]);
    return rows;
};

const pascalTriangle = (numberRows) => {
    let rows = [[1]];

    while (rows.length < numberRows) {
        let nextRow = [1];
        let lastRow = rows[rows.length - 1];
        for (let i = 0; i < lastRow.length - 1; i++) {
            nextRow.push(lastRow[i] + lastRow[i + 1]);
        }
        nextRow.push(1);
        rows.push(nextRow);
    }
    return rows;
};

console.log(pascalTriangleRecursive(5));
