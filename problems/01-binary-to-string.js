function binaryToString(binaryBlob) {
  function splitBit(binaryStr) {
    let bits = [];
    for (let i = 0; i < binaryStr.length; i += 8) {
      bits.push(binaryStr.slice(i, i + 8));
    }
    return bits;
  }

  let bits = splitBit(binaryBlob);
  let decimal = bits.map(function(bit) {
    return parseInt(bit, 2);
  });

  let char = decimal.map(function(decimal) {
    return String.fromCharCode(decimal);
  });
  
  return char.join('');
}

// Test
const binaryInput = '010000010100001001000011';
const result = binaryToString(binaryInput);
console.log(result); // Should output: 'ABC'



/* Comment in the code below to run local tests */
// console.log(binaryToString('010000010100001001000011')); // 'ABC'
// console.log(binaryToString('001101100011011100111000')); // '678'


module.exports = binaryToString;