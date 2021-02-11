module.exports = function toReadable (number) {
  const CONSTANTS = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  const DECENTS = ['ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  
  if(number < 20){
    return CONSTANTS[number];
  }
  if(number < 100){
    return getDoubleNum(number);
  }
  if(!(number % 100)){
    return getHundreds(number);
  }
  if(!(number % 10)){
    return `${getHundreds(number)} ${DECENTS[number / 10 % 10 - 1]}`;
  }
  return `${getHundreds(number)} ${getDoubleNum(number)}`;
  
  function getDoubleNum(num){
    const doublePart = num % 100;
    if(doublePart < 20){
      return `${CONSTANTS[doublePart]}`;
    }
    if(doublePart % 10){
      return `${DECENTS[Math.floor(doublePart / 10) - 1]} ${CONSTANTS[doublePart % 10]}`;
    }
    return `${DECENTS[Math.floor(doublePart / 10) - 1]}`;
  }
  function getHundreds(num){
    return `${CONSTANTS[Math.floor(number / 100)]} hundred`;
  }
}
