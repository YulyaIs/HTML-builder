const fs = require ('node:fs');
const path = require ('node:path');

const pathToFile = path.join(__dirname, 'secret-folder');
//console.log(pathToFile)

fs.readdir(pathToFile, {withFileTypes: true}, (err, files) => {
   if (err) throw err;
   //    console.log(files);
        files.forEach(file => {
           if(file.isFile()) {
                const fileName = file.name;
                const extName = path.extname(fileName);
                const filePath = path.join(pathToFile, fileName);

                fs.stat(filePath, (err, stats) => {
                    if (err) throw err;

                    const sizeFile = stats.size;
                    console.log(`${fileName} - ${extName.slice(1)} - ${sizeFile}`)

            })
        }
    })
})
