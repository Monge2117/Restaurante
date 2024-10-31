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

  private ListaCategorias:Categorias[]=[{id:1,nombre:'Bebidas'},{id:2,nombre:'Desayunos'},{id:3,nombre:'Comida rapida'}]
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
          producto:"arroz con pollo",
          cantidad:1,
          precio:1000,
          Categoria:2}
          ,{id:4,
            producto:"arroz pinto",
            cantidad:1,
            precio:1000,
            Categoria:2}
            ,{id:5,
              producto:"arroz con camarones",
              cantidad:1,
              precio:1000,
              Categoria:2}
  ];
  private _Ordenes: Ordenes[] = [];
  private _CarritoCompras: CarritoCompras[] = [];
  public get CarritoCompras(): CarritoCompras[] {
    return this._CarritoCompras;
  }

  public SetCarritoCompras(id:number,cantidad:number,preciototal:number){
   let producto= this._CarritoCompras.find(x =>x.id ==id);
   if (producto) {
   producto.cantidad = cantidad;
   producto.precioTotal = preciototal;
   }
  }

  public eliminarItemCarritoCompras(id:number){
    const index = this.CarritoCompras.findIndex(x => x.id == id);
     if (index !== -1) {
      this.CarritoCompras.splice(index, 1);
     }
   }
  public LimpiarCarritoCompras(){
    this._CarritoCompras =[];
  }
  public AgregarCarritoCompras(value: CarritoCompras) {
  let producto =  this.CarritoCompras.find(x => x.id == value.id);
  if (producto != null) {
      producto.cantidad = value.cantidad;
      producto.precioTotal = value.precioTotal;
  }else{
    this._CarritoCompras.push(value);
  }

  }
  get GetCategorias(){
     return [...this.ListaCategorias]
  }

  public AgregarOrden(value: Ordenes) {
   const orden = this._Ordenes.find(x => x.mesa == value.mesa);
   if(orden != null){
    orden.productos.push(...value.productos);
   }else{
    this._Ordenes.push(value);
   }
  }

   GetProductos(idCategoria:number){
    return [...this._ListaProductos.filter(x =>x.Categoria == idCategoria)]
 }

 GetSearchProductos(textoBuscado:string){
  return [...this._ListaProductos.filter(x =>x.producto.includes(textoBuscado))]
}
get GetOrdenes(){
  return [...this._Ordenes]
}
get GetOrdenesCocina(){
const productosNoCocinados = this._Ordenes.map(orden => ({
                                         mesa: orden.mesa,
                                         productos: orden.productos.filter(producto => !producto.cocinada) }))
return productosNoCocinados;
}
eliminarOrden(mesa:string){
const index = this._Ordenes.findIndex(x => x.mesa == mesa);
     if (index !== -1) {
      this._Ordenes.splice(index, 1);
     }
}

 SetOrden(mesa:string,idOrdenDetalle:string){
  let Orden= this._Ordenes.find(x =>x.mesa == mesa);
  if (Orden) {
 let producto = Orden.productos.find(x => x.idOrdenDetalle == idOrdenDetalle);
 if (producto) {
     producto.cocinada = true;
 }
  }
 }

}
