export class Director {
    constructor(nombre, foto, descripcion) {
        this.nombre = nombre;
        this.foto = foto;
        this.descripcion = descripcion;
        this.seriesDirigidas = [];
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
    obtenerSeriesDirigidas() {
        return this.seriesDirigidas;
    }
    agregarSerieDirigida(serie) {
        this.seriesDirigidas.push(serie);
    }
    static listarDirectores(directores) {
        console.log("Listado de directores:");
        for (const director of directores) {
            console.log(`- ${director.obtenerNombre()}`);
        }
    }
    mostrarDetalle() {
        console.log("Detalle del director:");
        console.log(`Nombre: ${this.obtenerNombre()}`);
        console.log(`Foto: ${this.obtenerFoto()}`);
        console.log(`Descripción: ${this.obtenerDescripcion()}`);
        console.log(`Series dirigidas: `);
        for (const serie of this.seriesDirigidas) {
            console.log(`- ${serie.obtenerTitulo()}`);
        }
    }
}
