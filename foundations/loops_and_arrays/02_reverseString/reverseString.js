const reverseString = function(string) {
    const invertedStr = Array.from(string).reverse().join('')
    return invertedStr
};

reverseString('hello')
reverseString('hello there')
reverseString('123! abc! Hello, Odinite.')
reverseString('')

// Do not edit below this line
module.exports = reverseString;
