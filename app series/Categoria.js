export class Categoria {
    constructor(nombre) {
        this.nombre = nombre;
    }
    obtenerNombre() {
        return this.nombre;
    }
    static listarCategorias(categorias) {
        console.log("Listado de categorías:");
        for (const categoria of categorias) {
            console.log(`- ${categoria.obtenerNombre()}`);
        }
    }
}
