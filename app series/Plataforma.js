export class Plataforma {
    constructor(nombre, sitioWeb) {
        this.nombre = nombre;
        this.sitioWeb = sitioWeb;
        this.planesPrecios = [];
    }
    obtenerNombre() {
        return this.nombre;
    }
    obtenerSitioWeb() {
        return this.sitioWeb;
    }
    obtenerPlanesPrecios() {
        return this.planesPrecios;
    }
    static listarPlataformas(plataformas) {
        console.log("Listado de plataformas:");
        for (const plataforma of plataformas) {
            console.log(`- ${plataforma.obtenerNombre()}`);
        }
    }
    mostrarDetalle() {
        console.log("Detalle de la plataforma:");
        console.log(`Nombre: ${this.obtenerNombre()}`);
        console.log(`Sitio web: ${this.obtenerSitioWeb()}`);
        console.log("Planes y precios:");
        for (const planPrecio of this.planesPrecios) {
            console.log(`- ${planPrecio.obtenerNombre()}: ${planPrecio.obtenerPrecio()}`);
        }
    }
}
