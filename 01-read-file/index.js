const fs = require ('node:fs');
const path = require ('node:path');

const pathToFile = path.join(__dirname, 'text.txt');

const readStream = fs.createReadStream(pathToFile)

readStream.on('data', function(chunk) {
    console.log(chunk.toString());
});