const Tesseract = require('tesseract.js')


const imgRec = (pic) =>{
 try {
  Tesseract.recognize(
    pic,
    'eng',
    { logger: m => console.log(m) }
  ).then(({ data: { text } }) => {
    console.log(text);
  })
 } catch (error) {
   console.log(error);
   
 }
}


imgRec('https://tesseract.projectnaptha.com/img/eng_bw.png')

module.exports = imgRec