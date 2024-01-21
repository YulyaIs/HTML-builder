const fs = require ('node:fs');
const path = require ('node:path');

const pathToBundle = path.join(__dirname, 'project-dist', 'bundle.css');
const pathToFile = path.join(__dirname, 'styles');

const writeStream = fs.createWriteStream(pathToBundle);


fs.readdir(pathToFile,
    //{withFileTypes: true},
     (err, files) => {
    if (err) {
        throw err;
    }
    files.forEach(file => {
        if (path.extname(file) === '.css') {
           // console.log(file)
            const readStream = fs.createReadStream(path.join(__dirname, 'styles', `${file}`));
            readStream.on('data', (data) => {
                fs.appendFile(path.join(__dirname, 'project-dist', 'bundle.css' ), data, (err) => {
                    if (err) {
                        throw err;
                    }
                })
            })
        }
        //(file.isFile()) {
         //   const fileName = file.name;
         //   const extName = path.extname(fileName);
        }
)})
