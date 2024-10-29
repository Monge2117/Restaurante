import { Component } from '@angular/core';
import { OrdenesService } from '../../services/ordenes.service';
import { Ordenes } from '../../interfaces/ordenes.';
import { CarritoCompras } from '../../interfaces/CarritoCompras.';

@Component({
  selector: 'orden-carrito-compras',
  templateUrl: './carrito-compras.component.html',
  styleUrl: './carrito-compras.component.css'
})
export class CarritoComprasComponent {
  constructor(private OrdenesService:OrdenesService){
    this.ObtenerCarritoCompras();
  }

  carrito:CarritoCompras[]=[];
ObtenerCarritoCompras(){
this.carrito = this.OrdenesService.CarritoCompras;
}
ConfirmarCarritoCompras(){
 // this.OrdenesService.AgregarOrden(orden);
  }

  updateQuantity(id:number,event: { precio: number, quantity: number }) {
     const product = this.carrito.find(p => p.id === id);
     if (product) {
                 product.cantidad = event.quantity;
                 product.precioTotal = event.precio;
     }
     }


}
