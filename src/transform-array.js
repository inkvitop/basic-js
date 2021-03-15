const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  let newArr = [];

  if (arr === []){
    return [];
  }

  try {
    for (let index = 0; index < arr.length; index++) {
      if (arr[index] === `--discard-next`) {
        index = index + 2
      }else 
      if (arr[index] === `--discard-prev`) {
        if (index === 0) {
        }else{
          newArr.splice(newArr.length - 1, 1)
        }
      }else 
      if (arr[index] === `--double-next`) {
        if (arr[index + 1] === undefined) {
        } else {
          newArr.push(arr[index + 1])
          newArr.push(arr[index + 1])
          index = index + 1
        }
      }else 
      if (arr[index] === `--double-prev`) {
        if (index === 0) {
        }else{
          newArr.splice(newArr.length - 1, 0, newArr[newArr.length - 1])
        }
      }
      else{
        newArr.push(arr[index])
      }
    }

    let check;
    arr.forEach(element => {
      if (typeof(element) === 'string') {
        check = 1
      }
    })

    if (check === 1) {
      return newArr
    }else{
      return arr
    }
  } catch (error) {
    throw error
  }
};