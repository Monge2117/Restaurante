import { Component } from '@angular/core';
import { OrdenesService } from '../../services/ordenes.service';
import { Ordenes } from '../../interfaces/ordenes.';

@Component({
  selector: 'orden-carrito-compras',
  templateUrl: './carrito-compras.component.html',
  styleUrl: './carrito-compras.component.css'
})
export class CarritoComprasComponent {
  constructor(private OrdenesService:OrdenesService){}
ObtenerCarritoCompras(){
return this.OrdenesService.CarritoCompras;
}
ConfirmarCarritoCompras(){
 // this.OrdenesService.AgregarOrden(orden);
  }
}
