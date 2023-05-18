class Serie {
    private titulo: string;
    private imagen: string;
    private categorias: Categoria[];
    private directores: Director[];
    private actores: Actor[];
    private episodios: Episodio[];
    private plataforma: Plataforma[];
  
    constructor(titulo: string, imagen: string) {
      this.titulo = titulo;
      this.imagen = imagen;
      this.categorias = [];
      this.directores = [];
      this.actores = [];
      this.episodios = [];
      this.plataforma = [];
    }
    obtenerActores(): Actor[] {
      return this.actores;
    }
  
    obtenerDirectores(): Director[] {
      return this.directores;
    }
    obtenerTitulo(): string {
      return this.titulo;
    }
  
    obtenerImagen(): string {
      return this.imagen;
    }

    static listarSeries(series: Serie[]): void {
      console.log("Listado de todas las series:");
      for (const serie of series) {
        console.log(`- ${serie.obtenerTitulo()}`);
      }
    }

    mostrarDetalle(): void {
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

    agregarCategoria(categoria: Categoria): void {
      this.categorias.push(categoria);
    }
  
    agregarActor(actor: Actor): void {
      this.actores.push(actor);
    }

    agregarDirector(director: Director): void {
      this.directores.push(director);
    }
    agregarEpisodio(episodio: Episodio): void {
      this.episodios.push(episodio);
    }
  
    agregarPlataforma(plataforma: Plataforma): void {
      this.plataforma.push(plataforma);
    }
  }
  
  class Categoria {
    private nombre: string;
  
    constructor(nombre: string) {
      this.nombre = nombre;
    }
  
    obtenerNombre(): string {
      return this.nombre;
    }

    static listarCategorias(categorias: Categoria[]): void {
      console.log("Listado de categorías:");
      for (const categoria of categorias) {
        console.log(`- ${categoria.obtenerNombre()}`);
      }
    }

  }
   
  class Actor {
    private seriesActuadas: Serie[];
    private nombre: string;
    private foto: string;
    private descripcion: string;
    
    constructor(nombre: string, foto: string, descripcion: string){ 

      this.nombre = nombre;
      this.foto = foto;
      this.descripcion = descripcion; 
      
      this.seriesActuadas = []; 
    }
    obtenerNombre(): string {
      return this.nombre;
    }
    
    obtenerFoto(): string {
      return this.foto;
    }
    
    obtenerDescripcion(): string {
      return this.descripcion;
    }

    obtenerSeriesActuadas(): Serie[] {
        return this.seriesActuadas;
    }

    agregarSerieActuada(serie: Serie): void {
      this.seriesActuadas.push(serie);
    }

    static listarActores(actores: Actor[]): void {
      console.log("Listado de actores:");
      for (const actor of actores) {
        console.log(`- ${actor.obtenerNombre()}`);
      }
    }

    mostrarDetalle(): void {
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
  class Director {
    private seriesDirigidas: Serie[];
    private nombre: string;
    private foto: string;
    private descripcion: string;

    constructor(nombre: string, foto: string, descripcion: string) {
      this.nombre = nombre;
      this.foto = foto;
      this.descripcion = descripcion; 
      this.seriesDirigidas = [];
    }
    obtenerNombre(): string {
      return this.nombre;
    }
    
    obtenerFoto(): string {
      return this.foto;
    }
    
    obtenerDescripcion(): string {
      return this.descripcion;
    }
    obtenerSeriesDirigidas(): Serie[] {
      return this.seriesDirigidas;
    }
    agregarSerieDirigida(serie: Serie): void {
      this.seriesDirigidas.push(serie);
    }
    static listarDirectores(directores: Director[]): void {
      console.log("Listado de directores:");
      for (const director of directores) {
        console.log(`- ${director.obtenerNombre()}`);
      }
    }

    mostrarDetalle(): void {
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
  
  
  class Episodio {
    private nombre: string;
    private resumen: string;
    private duracion: number;
  
    constructor(nombre: string, resumen: string, duracion: number) {
      this.nombre = nombre;
      this.resumen = resumen;
      this.duracion = duracion;
    }
  
    obtenerNombre(): string {
      return this.nombre;
    }
  
    obtenerResumen(): string {
      return this.resumen;
    }
  
    obtenerDuracion(): number {
      return this.duracion;
    }
  }
  
  class Plataforma {
    private nombre: string;
    private sitioWeb: string;
    private planesPrecios: PlanPrecio[];
  
    constructor(nombre: string, sitioWeb: string) {
      this.nombre = nombre;
      this.sitioWeb = sitioWeb;
      this.planesPrecios = [];
    }
  
    obtenerNombre(): string {
      return this.nombre;
    }
  
    obtenerSitioWeb(): string {
      return this.sitioWeb;
    }
  
    obtenerPlanesPrecios(): PlanPrecio[] {
      return this.planesPrecios;
    }

    static listarPlataformas(plataformas: Plataforma[]): void {
      console.log("Listado de plataformas:");
      for (const plataforma of plataformas) {
        console.log(`- ${plataforma.obtenerNombre()}`);
      }
    }
  
    mostrarDetalle(): void {
      console.log("Detalle de la plataforma:");
      console.log(`Nombre: ${this.obtenerNombre()}`);
      console.log(`Sitio web: ${this.obtenerSitioWeb()}`);
      console.log("Planes y precios:");
      for (const planPrecio of this.planesPrecios) {
        console.log(`- ${planPrecio.obtenerNombre()}: ${planPrecio.obtenerPrecio()}`);
      }
    }
  
  }
  
  class PlanPrecio {
    private nombre: string;
    private precio: number;
  
    constructor(nombre: string, precio: number) {
      this.nombre = nombre;
      this.precio = precio;
    }
  
    obtenerNombre(): string {
      return this.nombre;
    }
  
    obtenerPrecio(): number {
      return this.precio;
    }
  }
  
   

  // Funciones para crear nuevas instancias
  
  function crearNuevaSerie(titulo: string, imagen: string): Serie {
    return new Serie(titulo, imagen);
  }
  
  function crearNuevaCategoria(nombre: string): Categoria {
    return new Categoria(nombre);
  }
  
  function crearNuevoActor(nombre: string, foto: string, descripcion: string): Actor {
    return new Actor(nombre, foto, descripcion);
  }
  
  function crearNuevoDirector(nombre: string, foto: string, descripcion: string): Director {
    return new Director(nombre, foto, descripcion);
  }
  
  // agregar elementos
  
  function agregarCategoriaASerie(serie: Serie, categoria: Categoria): void {
    serie.agregarCategoria(categoria);
  }
  
  function agregarActorASerie(serie: Serie, actor: Actor): void {
    serie.agregarActor(actor);
  }
  
  function agregarDirectorASerie(serie: Serie, director: Director): void
  {
    serie.agregarDirector(director);
  }
    

function agregarEpisodioASerie(serie: Serie, episodio: Episodio): void {
  serie.agregarEpisodio(episodio);
}

function agregarPlataformaASerie(serie: Serie, plataforma: Plataforma): void {
  serie.agregarPlataforma(plataforma);
}

// Crear nuevas instancias
const serie1 = crearNuevaSerie("Breaking Bad", "breaking_bad.jpg");
const serie2 = crearNuevaSerie("Game of Thrones", "game_of_thrones.jpg");

const categoria1 = crearNuevaCategoria("Drama");
const categoria2 = crearNuevaCategoria("Fantasía");

const actor1 = crearNuevoActor("Bryan Cranston", "bryan_cranston.jpg", "Actor de cine y televisión");
const actor2 = crearNuevoActor("Peter Dinklage", "peter_dinklage.jpg", "Actor de cine y televisión");

const director1 = crearNuevoDirector("Vince Gilligan", "vince_gilligan.jpg", "Director y guionista");
const director2 = crearNuevoDirector("David Benioff", "david_benioff.jpg", "Escritor y productor");

// Agregar elementos a las series
agregarCategoriaASerie(serie1, categoria1);
agregarCategoriaASerie(serie2, categoria1);
agregarCategoriaASerie(serie2, categoria2);

agregarActorASerie(serie1, actor1);
agregarActorASerie(serie2, actor2);

agregarDirectorASerie(serie1, director1);
agregarDirectorASerie(serie2, director2);
actor1.agregarSerieActuada(serie1);
director1.agregarSerieDirigida(serie1);

let episodio1 = new Episodio("Pilot", "El primer episodio de la serie", 60);
let episodio2 = new Episodio("Winter is Coming", "El primer episodio de la serie", 55);

let plataforma1 = new Plataforma("Netflix", "www.netflix.com");


agregarEpisodioASerie(serie1,episodio1);
agregarPlataformaASerie(serie1,plataforma1)
// Listar todas las series
Serie.listarSeries([serie1, serie2]);

// Mostrar detalle de una serie
serie1.mostrarDetalle();

// Mostrar detalle de un actor
actor1.mostrarDetalle();


