module.exports = class DepthCalculator {
    calculateDepth(arr, count = 1) {
        let result = []
        result.push(count++)
        arr.forEach(element => {
            if (Array.isArray(element)) {
                result.push(this.calculateDepth(element, count))
            }
        });
        return Math.max(...result);
    };
};