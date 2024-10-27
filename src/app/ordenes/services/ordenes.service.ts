import { Injectable } from '@angular/core';
import { Categorias } from '../interfaces/interfaces/categorias.';
import { CarritoCompras } from '../interfaces/CarritoCompras.';
import { Ordenes } from '../interfaces/ordenes.';
import { Productos } from '../interfaces/Productos.';

@Injectable({
  providedIn: 'root'
})
export class OrdenesService {

  constructor() { }

  private ListaCategorias:Categorias[]=[{id:1,nombre:'Bebidas'},{id:2,nombre:'Desayunos'},{id:2,nombre:'Comida rapida'}]
  private _ListaProductos: Productos[] = [];
  private _Ordenes: Ordenes[] = [];
  private _CarritoCompras: CarritoCompras[] = [];
  public get CarritoCompras(): CarritoCompras[] {
    return this._CarritoCompras;
  }
  public AgregarCarritoCompras(value: CarritoCompras) {
    this._CarritoCompras.push(value);
  }
  get GetCategorias(){
     return [...this.ListaCategorias]
  }

  public AgregarOrden(value: Ordenes) {
    this._Ordenes.push(value);
  }

  get GetProductos(){
    return [...this._ListaProductos]
 }
}
