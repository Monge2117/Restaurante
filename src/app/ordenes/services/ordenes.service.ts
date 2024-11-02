import { ChangeDetectorRef, Injectable } from '@angular/core';
import { Categorias } from '../interfaces/interfaces/categorias.';
import { CarritoCompras } from '../interfaces/CarritoCompras.';
import { Ordenes } from '../interfaces/ordenes.';
import { Productos } from '../interfaces/Productos.';
import { OrdenDataBaseServiceService } from './orden-data-base-service.service';
import { OrdenesDetalle } from '../interfaces/OrdenesDetalle.';
import { DtoOrden } from '../interfaces/dtoOrden.';

@Injectable({
  providedIn: 'root'
})
export class OrdenesService {
  private ListaCategorias:Categorias[]=[];
  private _ListaProductos: Productos[] =[];

  private _Ordenes: Ordenes[] = [];
  private _CarritoCompras: CarritoCompras[] = [];

  constructor(private OrdenDataBaseServiceService:OrdenDataBaseServiceService) {
    this.getDataMenu();
  }


  public get CarritoCompras(): CarritoCompras[] {
    return this._CarritoCompras;
  }
 setiarMesaCarritoCompras(mesa:string): CarritoCompras[] {
    this._CarritoCompras.forEach(x => {
      x.mesa = mesa;
    });
    return this._CarritoCompras;
  }

  public SetCarritoCompras(id:number,cantidad:number,preciototal:number){
   let producto= this._CarritoCompras.find(x =>x.idProducto ==id);
   if (producto) {
   producto.cantidad = cantidad;
   producto.precioTotal = preciototal;
   }
  }

  public eliminarItemCarritoCompras(id:number){
    const index = this.CarritoCompras.findIndex(x => x.idProducto == id);
     if (index !== -1) {
      this.CarritoCompras.splice(index, 1);
     }
   }
  public LimpiarCarritoCompras(){
    this._CarritoCompras =[];
  }
  public AgregarCarritoCompras(value: CarritoCompras) {
  let producto =  this.CarritoCompras.find(x => x.idProducto == value.idProducto);
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
    const objordenesDetalle: OrdenesDetalle[] = value.productos.map(({
      mesa, idOrdenDetalle, idProducto, cantidad,
      descripcion, cocinada, precioTotal })=> ({ mesa, idOrdenDetalle, idProducto, cantidad,
                                                 descripcion, cocinada, precioTotal }));
      const orden:DtoOrden ={
        mesa:value.mesa
      }

      const obOrden = this._Ordenes.find(x => x.mesa == value.mesa);
      if(obOrden == null){
        this.OrdenDataBaseServiceService.insertDataOrdenes(orden);
     }

     this.OrdenDataBaseServiceService.insertDataDetalleOrdenes(objordenesDetalle);

  }

   GetProductos(idCategoria:number){
    return [...this._ListaProductos.filter(x =>x.categoria == idCategoria)]
 }

 GetSearchProductos(textoBuscado:string){
 return this._ListaProductos.filter(x => x.producto.toLowerCase().includes(textoBuscado.toLowerCase()));
}

get GetOrdenes(){
  return [...this._Ordenes]
}
get GetOrdenesCocina():Ordenes[]{
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
     this.setOrdenCocina(idOrdenDetalle);
 }
  }
 }

 getDataMenu(){
  this.OrdenDataBaseServiceService.getDataCategorias().subscribe(response => {
    this.ListaCategorias = response;
  });

  this.OrdenDataBaseServiceService.getDataProductos().subscribe(response => {
    this._ListaProductos = response;
  });

  this.OrdenDataBaseServiceService.getDataOrdenes().subscribe(response => {
    this._Ordenes = response;
  });
 }

async getDataOrdenes(){

  const obj = await this.OrdenDataBaseServiceService.getDataOrdenes().toPromise();
   if(obj != null){
    this._Ordenes = obj;
   }

  const response = await this.OrdenDataBaseServiceService.getDataDetalleOrdenes().toPromise();
  if (response != null) {
    this._Ordenes.forEach(x =>{
      x.productos = response.filter(r => r.mesa ==x.mesa);
     });

      //obtenemos el nombre de producto
   this._Ordenes.forEach(orden => {
    orden.productos.forEach(productoCarrito => {
       const productoEncontrado = this._ListaProductos.find(p => p.id === productoCarrito.idProducto);
        if (productoEncontrado) {
          productoCarrito.producto = productoEncontrado.producto;
        }
      });
    });
  }
 }

 setOrdenCocina(idOrdenDetalle:string){
  this.OrdenDataBaseServiceService.UpdateDataDetalleOrdenesCocina(idOrdenDetalle);
 }

}
