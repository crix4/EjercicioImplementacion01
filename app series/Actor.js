export class Actor {
    constructor(nombre, foto, descripcion) {
        this.nombre = nombre;
        this.foto = foto;
        this.descripcion = descripcion;
        this.seriesActuadas = [];
    }
    obtenerNombre() {
        return this.nombre;
    }
    obtenerFoto() {
        return this.foto;
    }
    obtenerDescripcion() {
        return this.descripcion;
    }
    obtenerSeriesActuadas() {
        return this.seriesActuadas;
    }
    agregarSerieActuada(serie) {
        this.seriesActuadas.push(serie);
    }
    static listarActores(actores) {
        console.log("Listado de actores:");
        for (const actor of actores) {
            console.log(`- ${actor.obtenerNombre()}`);
        }
    }
    mostrarDetalle() {
        console.log("Detalle del actor:");
        console.log(`Nombre: ${this.obtenerNombre()}`);
        console.log(`Foto: ${this.obtenerFoto()}`);
        console.log(`Descripción: ${this.obtenerDescripcion()}`);
        console.log(`Series actuadas: `);
        for (const serie of this.seriesActuadas) {
            console.log(`- ${serie.obtenerTitulo()}`);
        }
    }
}
