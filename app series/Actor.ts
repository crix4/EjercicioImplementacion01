import { Serie } from './Serie';
export class Actor {
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