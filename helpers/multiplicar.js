const fs=require('fs');
const colors =require('colors');

const crearArchivo=async(base=5,listar=true,h=10)=>{
   
    try{
    
    let salida,consola='';

    for(let i=1;i<=h;i++){
        salida+=`${base} * ${i} = ${base*i}\n`;
        consola+=`${colors.blue(base)} ${'*'.green} ${colors.red(i)} ${'='.green} ${base*i}\n`;
    }
    if(listar){
        console.log('============'.green);
        console.log('Tabla del:'.green,colors.blue(base));
        console.log('============'.green);
        console.log(consola);
        
}

        fs.writeFileSync( `./salida/tabla_${base}.txt`,salida);
    
    return `tabla-${base}.txt`;
    }catch(err){
        return err;
    }

}

module.exports={crearArchivo}
