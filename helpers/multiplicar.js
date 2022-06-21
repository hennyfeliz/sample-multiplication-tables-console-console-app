const colors = require('colors');
const fs = require('fs');
const { resolve } = require('path');

const crearArchivoTabla = (base = 5, listar = false, hitter = 10) => {

    return new Promise((resolve, reject) => {

        console.log(`Tabla del: ${base}`.red);

        let salida = '';
        let consola = '';

        for(let i = 1; i <=hitter; i++){
            salida += `${base} * ${i} = ${base*i}\n`;
            consola += `${base} ${'*'.green} ${i} = ${base*i}\n`;
        
        }
        (listar)
            ? console.log(consola)
            : null

        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);
    
        resolve(`tabla-${base}.txt`);
    })


}

const crearArchivoTabla2 = async(base) => {

    try {
        console.log(`Tabla del: ${base}`);
        let salida = '';
    
        for(let i = 1; i <=10; i++){
            salida += `${base} * ${i} = ${base*i}\n`;
        }
        
        console.log(salida);

        fs.writeFileSync(`tabla-${base}.txt`, salida);
    
        return`tabla-${base}.txt`;
    } catch (err) {
        throw err
    }
}

// ! Promise
 
const nombreArchivo = (bandera) => {
    
    return new Promise((resolve, reject) =>{
        (bandera)
            ? resolve(`Hola guapa`)
            : reject(`Falle`);
    })

} 

// ? Importante!!
const uniqArray2 = (value, index, self) => {
    return self.indexOf(value) === index;
}
// ? ----
// ! OnlyUniq Prototype
function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
  } 
  
  // usage example:
  var a = ['a', 1, 'a', 2, '1'];
  var unique = a.filter(onlyUnique);
  
  console.log(unique); // ['a', 1, 2, '1']

// ! ----
 
const newArrayVerify = (newArray) => {
    return new Promise((resolve) => {
        let bandera;
        for (let i = 0; i < newArray.length; i++) {
            (newArray[i]>50)
                ? bandera2 = true
                : null
        }
        resolve(bandera2)
    });
} 


const newArrayVerify2 = (newArray) => {
    return new Promise((resolve, reject) => {
        let bandera;
        for (let i = 0; i < newArray.length; i++) {
            (newArray[i]>50)
                ? bandera2 = true
                : bandera2 = false
        }
        resolve(bandera2)
        reject(`No encontrado...`)
    });
} /* 
fs.writeFile(`tabla-${base}.txt`, salida, (err) => {
    if (err) throw err;
    console.log('El archivos se ha creado!');
});  */



/* 
!! Imports
crearArchivoTabla2,
nombreArchivo,
newArrayVerify,
geometricFigure,
uniqArray,
uniqArray2 */


module.exports = {
    crearArchivoTabla
}


