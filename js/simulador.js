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

let precioFinal = 0;


function reIngreso() {

    if (eleccion !== "Salir") {
        eleccion = prompt(
            `Usted a ingresado ${eleccion}

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
    else {
        alert(`Este es el importe final de tus productos seleccionados: $${precioFinal}
 Gracias por su visita`);
    }
}

comprobarIngreso();

function comprobarIngreso() {
    eleccion = eleccion.charAt(0).toUpperCase() + eleccion.slice(1).toLowerCase().trimEnd();
    arrayCompra.forEach((e) => {
        if (e.nombre === eleccion) {
            precioFinal += e.precioConIVA;
        }
    });
    reIngreso();
}