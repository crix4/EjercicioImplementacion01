export class Episodio {
    constructor(nombre, resumen, duracion) {
        this.nombre = nombre;
        this.resumen = resumen;
        this.duracion = duracion;
    }
    obtenerNombre() {
        return this.nombre;
    }
    obtenerResumen() {
        return this.resumen;
    }
    obtenerDuracion() {
        return this.duracion;
    }
}
