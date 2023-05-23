import { Categoria } from './Categoria';
import { Director } from './Director';
import { Actor } from './Actor';
import { Episodio } from './Episodio';
import { Plataforma } from './Plataforma';

export class Serie {
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