// const fs = require('fs');
// const zlib = require('zlib');
// //const gzip = zlib.createGzip();
// const gunzip = zlib.createGunzip();

// // const readStream = fs.createReadStream('./text.txt','utf8');
// // const writeStream = fs.createWriteStream('new_text.txt.gzip');

// const readStream = fs.createReadStream('./new_text.txt.gzip');
// const writeStream = fs.createWriteStream('uncompressed.txt');
// //readStream.pipe(writeStream);
// //readStream.pipe(gzip).pipe(writeStream);
// readStream.pipe(gunzip).pipe(writeStream);


const _ = require('lodash');
let xx = _.fill([1,2,3,4,5],'banana',1,4);
console.log(xx);