class Producto {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }
    sumarIva() {
        this.precio = this.precio * 1.21;
    }
}

const arrayCompra = [
    (Torta = new Producto("Torta", 100)),
    (Tarta = new Producto("Tarta", 200)),
    (Alfajor = new Producto("Alfajor", 300)),
    (Porcion = new Producto("Porcion", 400)),
];

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
    eleccion = eleccion.charAt(0).toUpperCase() + eleccion.slice(1).toLowerCase().trimEnd();
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
        alert("Gracias por su visita");
    }
}

comprobarIngreso();

function comprobarIngreso() {
    // if (eleccion === "Salir") {
    //     mostrarProductos();
    // }
    arrayCompra.forEach((e) => {
        if (e.nombre === eleccion) {
            e.sumarIva();
        }
    });
    reIngreso();
}
