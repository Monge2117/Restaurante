import { Component } from '@angular/core';
import { OrdenesService } from '../../services/ordenes.service';
import { Ordenes } from '../../interfaces/ordenes.';
import { CarritoCompras } from '../../interfaces/CarritoCompras.';
import { SweetAlertService } from '../../../shared/services/sweet-alert.service';
import Swal from 'sweetalert2'
@Component({
  selector: 'orden-carrito-compras',
  templateUrl: './carrito-compras.component.html',
  styleUrl: './carrito-compras.component.css'
})
export class CarritoComprasComponent {
  constructor(private OrdenesService:OrdenesService,private SweetAlertService:SweetAlertService){
    //this.ObtenerCarritoCompras();
  }

ObtenerCarritoCompras(){
return this.OrdenesService.CarritoCompras;
}
ConfirmarCarritoCompras(){
 // this.OrdenesService.AgregarOrden(orden);
 this.SweetAlertService.mensajeConfirmacion('Se envio la orden');
 //this.carrito = [];
 this.OrdenesService.LimpiarCarritoCompras();
  }

  updateQuantity(id:number,event: { precio: number, quantity: number }) {
     this.OrdenesService.SetCarritoCompras(id,event.quantity,event.precio);
     }


     eliminarproductoCarrito(id:number){
      Swal.fire({
        title: "Esta seguro?",
        text: "Esta seguro que quiere eliminar?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Si"
      }).then((result) => {
        if (result.isConfirmed) {
          this.OrdenesService.eliminarItemCarritoCompras(id);
          this.SweetAlertService.mensajeConfirmacion('Elimino correctamente');
        }
      });

    }


}
