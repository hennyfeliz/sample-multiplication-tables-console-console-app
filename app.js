const { crearArchivoTabla, newMethod } = require('./helpers/multiplicar')
const argv = require('./config/yargs')

console.clear();

console.log('this is the green color?...'.green)

crearArchivoTabla(argv.b, argv.l, argv.h)
    .then(nombreArchivo => console.log(nombreArchivo.rainbow, 'creado!'))
    .catch(err => console.log(err)); 

// node app -b 6 -l -h 16 