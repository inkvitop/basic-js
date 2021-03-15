const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(flag) {
   this.flag = flag;
  }

  encrypt(message, key) {
    let arr_EN = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    let newMessage = ``;

    let messageToUpper = message.toUpperCase();
    let keyToUpper = key.toUpperCase();
    let numberKeyRepeat = Math.ceil(message.length / key.length) 
    let fullLengthKeyMatrix = keyToUpper.repeat(numberKeyRepeat)
    let fullLengthKey = ``;
    let updateIndex = 0;
    
    try {
      if (message === undefined || key === undefined) {
      throw Error
      }
      for (let index = 0; index < messageToUpper.length; index++) {
        if (messageToUpper[index] === ` `) {
          fullLengthKey += ` `
          updateIndex++
        }else 
        
        if (messageToUpper[index] !== ` ` && /[A-Z]/g.test(messageToUpper[index]) !== true) {
          fullLengthKey += messageToUpper[index]
          updateIndex++
        }else 
        
        if (/[A-Z]/g.test(messageToUpper[index]) === true) {
          fullLengthKey += fullLengthKeyMatrix[index - updateIndex]
        }
      }

      let tempMessageIndex;
      let tempKeyIndex;

      for (let index = 0; index < messageToUpper.length; index++) {
        if (/[A-Z]/g.test(messageToUpper[index]) === true){
          for (let i = 0; i < arr_EN.length; i++) {
            if (arr_EN[i] === messageToUpper[index]) {
              tempMessageIndex = i
            }
          };
          for (let i = 0; i < arr_EN.length; i++) {
            if (arr_EN[i] === fullLengthKey[index]) {
              tempKeyIndex = i
            }
          };
          let codeIndex = tempMessageIndex + tempKeyIndex
          if (codeIndex >= 26) {
            codeIndex = codeIndex - 26
          }
          newMessage += arr_EN[codeIndex]
        }else {
          newMessage += messageToUpper[index]
        }
      }
      if (this.flag === false) {
        return newMessage.split("").reverse().join("");
      }else {
        return newMessage
      }
    } catch (error) {
      throw error           
    }
  }    

  decrypt(message, key) {
    let arr_EN = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    let newMessage = ``;

    try {
      if (message === undefined || key === undefined) {
        throw Error
      }
      
      let messageToUpper = message.toUpperCase()
      let keyToUpper = key.toUpperCase()
      let numberKeyRepeat = Math.ceil(message.length / key.length)
      let fullLengthKeyMatrix = keyToUpper.repeat(numberKeyRepeat)
      let fullLengthKey = ``;
      let updateIndex = 0;

      for (let index = 0; index < messageToUpper.length; index++) {
        if (messageToUpper[index] === ` `) {
          // console.log(`SPACE`)
          fullLengthKey += ` `
          updateIndex++
        }else 
        if (messageToUpper[index] !== ` ` && /[A-Z]/g.test(messageToUpper[index]) !== true) {
          // console.log(`SYMBOL`)
          fullLengthKey += messageToUpper[index]
          updateIndex++
        }else 
        if (/[A-Z]/g.test(messageToUpper[index]) === true) {
          fullLengthKey += fullLengthKeyMatrix[index - updateIndex]
        }
      }

      let tempMessageIndex;
      let tempKeyIndex;
      let currentIndex;

      for (let index = 0; index < messageToUpper.length; index++) {
        currentIndex = index;
        if (/[A-Z]/g.test(messageToUpper[currentIndex]) === true){
          for (let i = 0; i < arr_EN.length; i++) {
            if (arr_EN[i] === messageToUpper[currentIndex]) {
              tempMessageIndex = i
            }
          };
          for (let i = 0; i < arr_EN.length; i++) {
            if (arr_EN[i] === fullLengthKey[currentIndex]) {
              tempKeyIndex = i
            }
          };
          let codeIndex = tempMessageIndex - tempKeyIndex
          if (codeIndex + 1 > 26) {
            codeIndex = codeIndex - 26
          }else if (codeIndex < 0) {
            codeIndex = codeIndex + 26
          }{
            codeIndex = codeIndex 
          }
          newMessage += arr_EN[codeIndex]
        }else {
          newMessage += messageToUpper[currentIndex]
        }
      }
      if (this.flag === false) {
        return newMessage.split("").reverse().join("");
      }else {
        return newMessage
      }
    } catch (error) {
      throw error
    }

  }
}

module.exports = VigenereCipheringMachine;