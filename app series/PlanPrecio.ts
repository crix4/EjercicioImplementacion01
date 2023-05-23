export class PlanPrecio {
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