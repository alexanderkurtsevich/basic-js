module.exports = function repeater(str, obj) {

    let additionArray = [];
    if (obj.hasOwnProperty('addition')) {
        if (obj.additionRepeatTimes === undefined) {
            additionArray.push(obj.addition)
        }
        else {
            for (i = 0; i < obj.additionRepeatTimes; i++) {
                additionArray.push(String(obj.addition))
            }
        }
        if (obj.hasOwnProperty('additionSeparator')) {
            additionArray = additionArray.join(obj.additionSeparator)
        }
        else {
            additionArray = additionArray.join('|')
        }
    };
    let mainArray = []
    if (obj.repeatTimes === undefined) {
        mainArray.push(String(str) + String(additionArray))
    }
    else {
        for (i = 0; i < obj.repeatTimes; i++) {
            mainArray.push(String(str) + additionArray)
        }
    }
    if (obj.hasOwnProperty('separator')) {
        return mainArray.join(obj.separator)
    }
    else {
        return mainArray.join('+')
    }
};
