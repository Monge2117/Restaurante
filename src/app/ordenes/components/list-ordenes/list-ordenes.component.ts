import { Component, Input, OnInit } from '@angular/core';
import { Ordenes } from '../../interfaces/ordenes.';
import { OrdenesService } from '../../services/ordenes.service';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { SweetAlertService } from '../../../shared/services/sweet-alert.service';

@Component({
  selector: 'orden-list-ordenes',
  templateUrl: './list-ordenes.component.html',
  styleUrl: './list-ordenes.component.css'
})
export class ListOrdenesComponent {
  constructor(private OrdenesService:OrdenesService,private SweetAlertService:SweetAlertService){}

  @Input()
  Orden:Ordenes={
        mesa: '',
        productos: []
}
private mesa:string='';
private total:number=0;

calcularTotal(){
  this.mesa=this.Orden.mesa;
  this.total =  this.Orden.productos.reduce((acc, item) => acc + item.precioTotal, 0);
  return this.total;
}

eliminarOrden(){
this.OrdenesService.eliminarOrden(this.mesa);
this.SweetAlertService.mensajeConfirmacion('Se elimino correctamente');
}


}
