const fs = require ('node:fs');
const path = require ('node:path');

const pathToFile = path.join(__dirname, 'files');
const pathToCopy = path.join(__dirname, 'files-copy');



function copyDir () {

    fs.rm(pathToCopy, { recursive: true }, (err) => {
       // if (err) {
        //    throw err;
      //  }
 //   })

    fs.mkdir(pathToCopy, { recursive: true }, (err) => {
        if (err) {
            throw err;
       }
    })

    fs.readdir(pathToFile,
       //  {withFileTypes: true},
        (err, files) => {
        if (err) throw err;
          //  console.log(files);
             files.forEach(file => {
               // console.log(file)

                fs.copyFile(
                    `${pathToFile}/${file}`,
                    `${pathToCopy}/${file}`,
                  //  path.join(__dirname, 'files',`${file}`),
                  // path.join(__dirname, 'files-copy',`${file}`),
                     (err) =>
                     {
                    if (err) {
                        throw err;
                    }
                })
      })
    })})

}

copyDir()

