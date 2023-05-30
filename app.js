const argv = require('process').argv;
const moduloProductos = require('./productos'); /* si el archivo se llamada index, entonces va leer siempre index */
require('colors');
let respuesta;
const comando = argv[2];
switch (comando) {
    case "listar":
        moduloProductos.listar();
        break;
    case "agregar":
        let nombre = argv[3];
        let marca = argv[4];
        let precio = +argv[5];
        let descuento = +argv[6] || 0;
       if([nombre,marca,precio].includes(undefined)){ /* Si no viene precio */
        console.log("ERROR: Todos los datos obligatorios".red);
        break /* Si se cumple, corta la ejecución. Sino sigue (El break es porque esta dentro de un switch) */
       }
       if([precio,descuento].includes(NaN)){ /* Si precio o descuento es un string */
        console.log("ERROR: El precio o el descuento son invalidos".red);
        break;
       }
       respuesta = moduloProductos.agregar(nombre,marca,precio,descuento)
       console.log(respuesta.green)

        break;
        case "filtrar":
            respuesta = moduloProductos.filtrar(argv[3]);
            moduloProductos.listar(respuesta)
        break
        case 'editar' :
            respuesta = moduloProductos.editar(+argv[3])
            console.log(respuesta.green); /* Muestra por consola la respuesta que pedimos al metodo "listar" */
        default:
        break;
}