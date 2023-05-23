export class Serie {
    constructor(titulo, imagen) {
        this.titulo = titulo;
        this.imagen = imagen;
        this.categorias = [];
        this.directores = [];
        this.actores = [];
        this.episodios = [];
        this.plataforma = [];
    }
    obtenerActores() {
        return this.actores;
    }
    obtenerDirectores() {
        return this.directores;
    }
    obtenerTitulo() {
        return this.titulo;
    }
    obtenerImagen() {
        return this.imagen;
    }
    static listarSeries(series) {
        console.log("Listado de todas las series:");
        for (const serie of series) {
            console.log(`- ${serie.obtenerTitulo()}`);
        }
    }
    mostrarDetalle() {
        console.log("Detalle de la serie:");
        console.log(`Título: ${this.obtenerTitulo()}`);
        console.log(`Imagen: ${this.obtenerImagen()}`);
        console.log("Categorías:");
        for (const categoria of this.categorias) {
            console.log(`- ${categoria.obtenerNombre()}`);
        }
        console.log("Directores:");
        for (const director of this.directores) {
            console.log(`- ${director.obtenerNombre()}`);
        }
        console.log("Actores:");
        for (const actor of this.actores) {
            console.log(`- ${actor.obtenerNombre()}`);
        }
        console.log("Episodios:");
        for (const episodio of this.episodios) {
            console.log(`- ${episodio.obtenerNombre()}`);
        }
        console.log("Plataformas:");
        for (const plataforma of this.plataforma) {
            console.log(`- ${plataforma.obtenerNombre()}`);
        }
    }
    agregarCategoria(categoria) {
        this.categorias.push(categoria);
    }
    agregarActor(actor) {
        this.actores.push(actor);
    }
    agregarDirector(director) {
        this.directores.push(director);
    }
    agregarEpisodio(episodio) {
        this.episodios.push(episodio);
    }
    agregarPlataforma(plataforma) {
        this.plataforma.push(plataforma);
    }
}
