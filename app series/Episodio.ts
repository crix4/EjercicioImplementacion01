export class Episodio {
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
  