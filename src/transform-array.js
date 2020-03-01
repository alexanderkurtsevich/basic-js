
module.exports = function transform(arr) {
    let finalResult = [];
    if (Array.isArray(arr)) {
        if (arr.length == 0) return [];
        for (let i = 0; i < arr.length; i++) {
            switch (arr[i]) {
                case '--discard-next':
                    i++;
                    break;
                case '--discard-prev':
                    finalResult.pop();
                    break;
                case '--double-next':
                    if (i == arr.length - 1) break;
                    finalResult.push(arr[i + 1]);
                    break;
                case '--double-prev':
                    if (i == 0) break;
                    finalResult.push(arr[i - 1]);
                    break;
                default:
                    finalResult.push(arr[i]);
                    break;
            }
        }
    }
    else {
        throw new Error();
    }

    return finalResult;
}