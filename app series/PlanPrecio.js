export class PlanPrecio {
    constructor(nombre, precio) {
        this.nombre = nombre;
        this.precio = precio;
    }
    obtenerNombre() {
        return this.nombre;
    }
    obtenerPrecio() {
        return this.precio;
    }
}
