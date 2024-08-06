const MORSE_TABLE = {
  '.-': 'a',
  '-...': 'b',
  '-.-.': 'c',
  '-..': 'd',
  '.': 'e',
  '..-.': 'f',
  '--.': 'g',
  '....': 'h',
  '..': 'i',
  '.---': 'j',
  '-.-': 'k',
  '.-..': 'l',
  '--': 'm',
  '-.': 'n',
  '---': 'o',
  '.--.': 'p',
  '--.-': 'q',
  '.-.': 'r',
  '...': 's',
  '-': 't',
  '..-': 'u',
  '...-': 'v',
  '.--': 'w',
  '-..-': 'x',
  '-.--': 'y',
  '--..': 'z',
  '.----': '1',
  '..---': '2',
  '...--': '3',
  '....-': '4',
  '.....': '5',
  '-....': '6',
  '--...': '7',
  '---..': '8',
  '----.': '9',
  '-----': '0',
};

function decode(expr) {
  // write your solution here
  const morseCode = {
    10: '.',
    11: '-',
    '00': '',
  };

  let decodedMessage = '';

  for (let i = 0; i < expr.length; i += 10) {
    let letterEncoded = expr.slice(i, i + 10);
    if (letterEncoded === '**********') {
      decodedMessage += ' ';
    } else {
      let morseLetter = '';
      for (let j = 0; j < 10; j += 2) {
        morseLetter += morseCode[letterEncoded.slice(j, j + 2)];
      }
      decodedMessage += MORSE_TABLE[morseLetter];
    }
  }

  return decodedMessage;
}

module.exports = {
  decode,
};
