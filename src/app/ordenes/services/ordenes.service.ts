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
  private _ListaProductos: Productos[] = [
    {id:1,
      producto:"coca cola litro 2l abcdegerr sssss aaaaa",
      cantidad:1,
      precio:1000,
      Categoria:1},
      {id:2,
        producto:"pepsi",
        cantidad:1,
        precio:1000,
        Categoria:1},
        {id:3,
          producto:"arroz",
          cantidad:1,
          precio:1000,
          Categoria:2}
          ,{id:4,
            producto:"arroz 2",
            cantidad:1,
            precio:1000,
            Categoria:2}
            ,{id:5,
              producto:"arroz 3",
              cantidad:1,
              precio:1000,
              Categoria:2}
  ];
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
