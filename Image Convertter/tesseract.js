const Tesseract = require("tesseract.js")


Tesseract.recognize('./2.png', "eng", { logger: e => { console.log(e) } })
    .then(({ data: { text } })=>{

        let arr = text.includes("easypaisa");
        if(arr){
            console.log("Text Find Seccessfully")
        }else{
            console.log("Text Not Find")
        }
       


    })




// Tesseract.recognize(
//     '2.png',
//     'eng',
//     { logger: m => console.log(m) }
// ).then(({ data: { text } }) => {
//     console.log(text);
// })