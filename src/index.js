module.exports = function towelSort(matrix) {
    const result = [];
    if (matrix) {
        for (let row of matrix) {
            if (matrix.indexOf(row) % 2 === 0) result.push(...row);
            else result.push(...row.reverse());
        }
    }
    return result;
};
