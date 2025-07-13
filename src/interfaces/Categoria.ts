import type { IProducto } from "./Producto";

export interface ICategoria {
  nombre: string;
  imagen: string;
  productos: IProducto[];
  descripcion?: string;
}
