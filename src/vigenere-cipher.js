class VigenereCipheringMachine {
    constructor(modification) {
        this.modification = modification
    }
    encrypt(message, key) {
        if (typeof (message) !== 'string' || typeof (key) !== 'string') {
            throw new Error()
        }
        message = message.toLowerCase()
        let messageLetters = message.match(/[a-z]/g)
        if (messageLetters == null) {
            return message
        }
        key = key.toLowerCase().repeat(Math.ceil(messageLetters.length / key.length)).split('')
        key.splice(-(key.length - messageLetters.length), (key.length - messageLetters.length))
        let encryptedCharCodes = [];
        let result = []
        for (i = 0; i < key.length; i++) {
            let sum = key[i].charCodeAt(0) - 97 + messageLetters[i].charCodeAt(0) - 97;
            if (sum >= 0 && sum < 26) {
                encryptedCharCodes.push(sum + 97);
            }
            else {
                encryptedCharCodes.push(sum + 97 - 26)
            }
        }
        let count = 0;
        for (i = 0; i < message.length; i++) {
            if (message.charCodeAt(i) >= 97 && message.charCodeAt(i) <= 122) {
                result.push(String.fromCharCode(encryptedCharCodes[count]).toUpperCase())
                count++;
            }
            else {
                result.push(message[i]);
            }
        }
        if (this.modification == true || this.modification == undefined) {
            return result.join('')
        }
        else {
            return result.reverse().join('')
        }
    }

    decrypt(encryptedMessage, key) {
        if (typeof (encryptedMessage) !== 'string' || typeof (key) !== 'string') {
            throw new Error()
        }
        encryptedMessage = encryptedMessage.toLowerCase()
        let messageLetters = encryptedMessage.match(/[a-z]/g)
        if (messageLetters == null) {
            return encryptedMessage
        }
        key = key.toLowerCase().repeat(Math.ceil(messageLetters.length / key.length)).split('')
        key.splice(-(key.length - messageLetters.length), (key.length - messageLetters.length))
        let decryptedCharCodes = [];
        let result = []
        for (i = 0; i < key.length; i++) {
            let diff = (messageLetters[i].charCodeAt(0) - 97) - (key[i].charCodeAt(0) - 97);
            if (diff >= 0 && diff < 26) {
                decryptedCharCodes.push(diff + 97);
            }
            else {
                decryptedCharCodes.push(diff + 97 + 26)
            }
        }
        let count = 0;
        for (i = 0; i < encryptedMessage.length; i++) {
            if (encryptedMessage.charCodeAt(i) >= 97 && encryptedMessage.charCodeAt(i) <= 122) {
                result.push(String.fromCharCode(decryptedCharCodes[count]).toUpperCase())
                count++;
            }
            else {
                result.push(encryptedMessage[i])
            }
        }
        if (this.modification == true || this.modification == undefined) {
            return result.join('')
        }
        else {
            return result.reverse().join('')
        }
    }
}

module.exports = VigenereCipheringMachine;
