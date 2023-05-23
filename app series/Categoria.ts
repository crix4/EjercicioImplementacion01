export class Categoria {
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