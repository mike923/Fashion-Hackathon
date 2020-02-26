const Tesseract = require('tesseract.js')


Tesseract.recognize(
    'https://tesseract.projectnaptha.com/img/eng_bw.png',
    'eng',
    { logger: m => console.log(m) }
  ).then(({ data: { text } }) => {
    console.log(text);
  })