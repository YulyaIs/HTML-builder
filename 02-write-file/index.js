const fs = require ('node:fs');
const path = require ('node:path');
const pathToFile = path.join(__dirname, 'text.txt');

const writeStream = fs.createWriteStream(pathToFile);

//writeStream.on('data', function(chunk) {
  //  console.log(chunk.toString());
  //  writeStream.write(chunk);
//});

const readLine = require ('readline');
const rl = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log('Enter your text: ');

rl.on('line', (text) => {
    if (text === 'exit') {
    process.exit()
    }

    writeStream.write(text + '\n');
})

process.on ('exit', () =>{
    console.log('Bye')
})

process.on('SIGINT', () => {
    console.log('Bye')
});

