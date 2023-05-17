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
      console.log(`Series actuadas: ${this.obtenerSeriesActuadas()}`);
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
      console.log(`Series dirigidas: ${this.obtenerSeriesDirigidas()}`);
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
  
  // Métodos para agregar elementos
  
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
    
  