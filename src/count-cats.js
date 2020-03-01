module.exports = function countCats(matrix) {
return (matrix.length == 0) ? 0 : matrix.reduce((a, b) => a.concat(b)).filter(a => typeof(a) == "string").filter(a => a == "^^").length;
};
