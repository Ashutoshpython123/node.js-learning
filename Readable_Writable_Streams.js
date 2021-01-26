const fs = require('fs');

const readStream = fs.createReadStream('./text.txt','utf8');
const writeStream = fs.createWriteStream('new_text.txt');
readStream.on('data', (chunk) => {
    console.log(chunk);
    writeStream.write(chunk);
});