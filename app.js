const {crearArchivo} = require('./helpers/multiplicar');
const colors =require('colors');
const argv=require('./yargs/yargs');


console.clear();

crearArchivo(argv.b,argv.l,argv.h).then(nombreArchivo=>console.log(nombreArchivo.rainbow,'creado')).catch(err=>console.log(err));
    