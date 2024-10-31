import { Component } from '@angular/core';
import { OrdenesService } from '../../services/ordenes.service';
import { Ordenes } from '../../interfaces/ordenes.';
import { CarritoCompras } from '../../interfaces/CarritoCompras.';
import { SweetAlertService } from '../../../shared/services/sweet-alert.service';

@Component({
  selector: 'orden-carrito-compras',
  templateUrl: './carrito-compras.component.html',
  styleUrl: './carrito-compras.component.css'
})
export class CarritoComprasComponent {
  constructor(private OrdenesService:OrdenesService,private SweetAlertService:SweetAlertService){
    //this.ObtenerCarritoCompras();
  }
  MesaValue: string = '';

ObtenerCarritoCompras(){
return this.OrdenesService.CarritoCompras;
}
ConfirmarCarritoCompras(){
  if (this.MesaValue =="") {
    this.SweetAlertService.mensajeError('El campo mesa es obligatorio');
    return;
  }

  const nuevaOrden:Ordenes = {
    mesa: this.MesaValue,
    productos: this.ObtenerCarritoCompras()
  }
 this.OrdenesService.AgregarOrden(nuevaOrden);
 this.SweetAlertService.mensajeConfirmacion('Se envio la orden');
 this.MesaValue = '';
 this.OrdenesService.LimpiarCarritoCompras();
  }

  updateQuantity(id:number,event: { precio: number, quantity: number }) {
     this.OrdenesService.SetCarritoCompras(id,event.quantity,event.precio);
     }


     eliminarproductoCarrito(id:number){
          this.OrdenesService.eliminarItemCarritoCompras(id);
          this.SweetAlertService.mensajeConfirmacion('Elimino correctamente');
    }


}
