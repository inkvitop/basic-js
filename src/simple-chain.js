const CustomError = require("../extensions/custom-error");

const chainMaker = {
  result: [],
  getLength() {
    return this.result.length
  },
  addLink(value) {
    let empty = `(  )`
    let part = `( ${value} )`
    if (value !== undefined) {
      this.result.push(part)
    }else {
      this.result.push(empty)
    }
    return this
  },
  removeLink(position) {
    try {
      if (!Number.isInteger(position)) {
        this.result = []
        throw `Error`
      }else {
        if (Number.isInteger(position) ) {
          let indexPos = position - 1
          this.result.splice(indexPos,1)
          return this
        }
      }
    } catch (error) {
      this.result = []
      throw error
    }
  },
  reverseChain() {
    let revArr = chainMaker.result.reverse()
    this.result = revArr
    return this
  },
  finishChain() {
    let arrLeng = this.getLength()
    let array = this.result
    let finalString = ``;
    for (let index = 0; index < arrLeng; index++) {
      finalString += array[index].toString();
      if (index + 1 < arrLeng) {
        finalString += `~~`;
      }
    }
    this.result = []
    return finalString
  }
};

module.exports = chainMaker;