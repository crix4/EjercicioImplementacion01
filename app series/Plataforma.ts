import { PlanPrecio } from './PlanPrecio';
export class Plataforma {
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
  