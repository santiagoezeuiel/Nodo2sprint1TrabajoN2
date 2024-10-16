import path from 'path'

// Definir una ruta de archivo de ejemplo

const filePath = './data/exemple.txt';

//obtener el directorio base

const dirName = path.dirname(filePath);
console.log('Directorio base:', dirName);


//Obtener el nombre del archivo sin extencsion

const baseName = path.basename(filePath, '.txt');
console.log('Nombre del archivo ', baseName );


//obten la extencion del archivo

const extName = path.extname(filePath);
console.log('Extencion del archivo: ', extName);


//crear una ruta unida

const newPath = path.join('/user', 'docs', 'nexfile.txt');
console.log('Nueva ruta: ', newPath);