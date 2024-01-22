const fs = require ('node:fs');
const path = require ('node:path');

const pathDir = path.join (__dirname, 'project-dist');
const pathAssets = path.join (__dirname, 'assets');
const pathStyles = path.join (__dirname, 'styles');
const pathTemp = path.join (__dirname, 'template.html');
const pathComp = path.join (__dirname, 'components');
const pathToBundle = path.join(__dirname, 'project-dist', 'style.css');
const pathToCopy = path.join(__dirname, 'project-dist', 'assets');
const pathHtml = path.join(__dirname, 'project-dist', 'index.html')


fs.mkdir(pathDir, { recursive: true}, (err) => {
    if (err) {
        throw err;
    }
})

function changeTemplate () {
    const readTemp = fs.createReadStream(pathTemp);


}
changeTemplate();



function style () {

const writeStream = fs.createWriteStream(pathToBundle);

fs.readdir(pathStyles, (err, files) => {
  //{withFileTypes: true},(err, files) =>
  if (err) {
    throw err;
  }
  files.forEach(file => {
    if (path.extname(file) === '.css') {
      // console.log(file)
      const readStream = fs.createReadStream(path.join(__dirname, 'styles', `${file}`));
      readStream.on('data', (data) => {
        fs.appendFile(path.join(__dirname, 'project-dist', 'style.css' ), data, (err) => {
          if (err) throw err;
      })}
        )}
}
        )
    })
}

style();

function copyAs () {

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

    fs.readdir(pathAssets,
       //  {withFileTypes: true},
        (err, files) => {
        if (err) throw err;
          //  console.log(files);
             files.forEach(file => {
               // console.log(file)
               fs.readdir(path.join(__dirname, 'assets', `${file}`), (err, fileDes) => {
                if (err) throw err;

                fs.mkdir(path.join(__dirname, 'project-dist', 'assets', `${file}`), {recursive: true}, (err) => {
                    if (err) throw err;
                })

                fileDes.forEach(fileD => {

                fs.copyFile(
                   path.join(__dirname, 'assets',`${file}`, `${fileD}`),
                   path.join(__dirname, 'project-dist', 'assets',`${file}`, `${fileD}`),
                     (err) =>
                     {
                    if (err) {
                        throw err;
               }})})
                })
      })
    })})

}

copyAs()

