const argv = require('yargs')
                .option('b',{
                    alias: 'base',
                    type: 'number',
                    demandOption: true,
                    describe: 'Es la base de la tabla'
                })
                .option('l',{
                    alias: 'listar',
                    type: 'boolean',
                    demandOption: true,
                    default: false,
                    describe: 'Muestra la tabla en consola'
                })
                .option('h',{
                    alias: 'hitter',
                    type: 'number',
                    demandOption: true,
                    default: false,
                    describe: 'Pone un limite de iteraciones en la tabla...'
                })
                .check((argv, options) => {
                    if(isNaN(argv.b)){
                        throw 'la base debe ser un numero...'
                    }
                    return true;
                })
                .argv;


/**
 * Opcion('l')
 * Listar
 * boolean
 * demandOpcion: true
 * default: false
 */

/**
 * Opcion('b')
 * Base
 * Number
 * demandOpcion: true
*/
/**
 * Opcion('h')
 * hitter
 * Number
 * demandOpcion: true
 * default: false
 */

module.exports = argv;
