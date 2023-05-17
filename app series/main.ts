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
  
    obtenerTitulo(): string {
      return this.titulo;
    }
  
    obtenerImagen(): string {
      return this.imagen;
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
  }
  
  class Persona {
    private nombre: string;
    private foto: string;
    private descripcion: string;
  
    constructor(nombre: string, foto: string, descripcion: string) {
      this.nombre = nombre;
      this.foto = foto;
      this.descripcion = descripcion;
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
  