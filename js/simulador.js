class Producto {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precioSinIVA = precio;
        this.precioConIVA = this.iva();
    }

    iva = () => this.precioSinIVA * 1.21;
}

const Torta = new Producto("Torta", 100);
const Tarta = new Producto("Tarta", 200);
const Alfajor = new Producto("Alfajor", 300);
const Porcion = new Producto("Porcion", 400);

const arrayCompra = [Torta, Tarta, Alfajor, Porcion];

alert(
    `Lista de productos y precios: 
    1. Torta        $100
    2. Tarta        $200
    3. Alfajor     $300
    4. Porcion   $400`
);

let eleccion = prompt(
    `¿Qué producto desea? Elegir por el nombre:
 1. Torta
 2. Tarta
 3. Alfajor
 4. Porcion
          
 O bien, ingrese "Salir" para finalizar`
);

// Contador para el importe final
let precioFinal = 0;


function reIngreso() {

    if (eleccion !== "Salir") {
        eleccion = prompt(`  Usted a ingresado ${eleccion}
  
  ¿Desea agregar otro producto?
    
    Lista de productos y precios:    
    1. Torta
    2. Tarta
    3. Alfajor
    4. Porcion
    
    O bien, ingrese "Salir" para finalizar`
        );
        comprobarIngreso();
    }
}

comprobarIngreso();

function comprobarIngreso() {

    eleccion = eleccion.charAt(0).toUpperCase() + eleccion.slice(1).toLowerCase().trimEnd();

    // Verificar si la elección del usuario coincide con algún producto
    const resultado = arrayCompra.find((producto) => producto.nombre === eleccion);

    if (eleccion === "Salir") {
        if (precioFinal > 0) {
            alert(`Este es el importe final de tus productos seleccionados: $${precioFinal}
 Gracias por su visita`);
        }
        else {
            alert("Gracias por su visita");
        }
    }

    // Si se encuentra una coincidencia: sumar al precioFinal y volver a reIngreso
    else if (resultado) {
        precioFinal += resultado.precioConIVA;
        reIngreso();
    }

    // Si no hay coincidencia: mensaje de opción incorrecta, volver a pedir entrada y comprobar
    else {
        eleccion = prompt(` Opción incorrecta

  ¿Qué producto desea? Elegir por el nombre:
    1. Torta
    2. Tarta
    3. Alfajor
    4. Porcion
             
    O bien, ingrese "Salir" para finalizar`
        );

        comprobarIngreso();
    }
}
