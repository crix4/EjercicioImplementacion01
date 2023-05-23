import { Serie } from './Serie';
export class Director {
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
  