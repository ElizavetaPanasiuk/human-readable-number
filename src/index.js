module.exports = function toReadable(number) {
    const numbers = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const decades = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    let result = '';
    if (number === 0) {
        result = 'zero';
    }
    if (number > 99) {
        let hundred = Math.floor(number / 100);
        if (number > 0) {
            result +=`${numbers[hundred - 1]} hundred `;
        }
    }

    if ((number % 100 < 20 || Math.floor(number / 10) % 10 === 0  && number % 10 !== 0) && number % 100 !== 0) {
        result += numbers[number % 100 - 1];
    }
    else if (number % 10 !== 0){
        let digit = number % 10;
        let decent = Math.floor(number / 10) % 10;
        result += `${decades[decent - 2]} ${numbers[digit - 1]}`;
    }
    else if (Math.floor(number / 10) % 10 !== 0){
        let decent = Math.floor(number / 10) % 10;
        result += decades[decent - 2];
    }
    
    return result.trim();
}
