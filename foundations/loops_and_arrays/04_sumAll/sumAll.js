const sumAll = function(firstNum, secondNum) {
    if (!Number.isInteger(firstNum) || !Number.isInteger(secondNum) || firstNum < 1 || secondNum < 1) {
        return ('ERROR')
    }

    if (firstNum > secondNum) {
        let temp = firstNum
        firstNum = secondNum
        secondNum = temp
    }

    const arr = []

    for (let i = firstNum; i <= secondNum; i++) {
        arr.push(i)
    }

    const arrSum = arr.reduce((sum, num) => {
        return sum + num;
    }, 0)

    return arrSum

};

sumAll(2, 4)
sumAll(1, 4000)
sumAll(123, 1)
sumAll(-10, 4)
sumAll(2.5, 4)
sumAll(10, "90")
sumAll(10, [90, 1])


// Do not edit below this line
module.exports = sumAll;
