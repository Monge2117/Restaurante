import { Component, Input } from '@angular/core';
import { Productos } from '../../interfaces/Productos.';
import { OrdenesService } from '../../services/ordenes.service';
import { CarritoCompras } from '../../interfaces/CarritoCompras.';
import { SweetAlertService } from '../../../shared/services/sweet-alert.service';
import { v4 as uuidv4 } from 'uuid';


@Component({
  selector: 'orden-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  constructor(private OrdenesService:OrdenesService,private SweetAlertService:SweetAlertService){}
  @Input()
  producto:Productos ={
    id: 0,
    producto: '',
    cantidad: 0,
    precio: 0,
    categoria:0
  };

  increaseQuantity() {
    this.producto.cantidad++;
  }

  decreaseQuantity() {
    if (this.producto.cantidad > 1) {
      this.producto.cantidad--;
    }
  }
  AgregarAlCarrito(){
    const nuevoProducto:CarritoCompras={
      mesa:'',
      idOrdenDetalle:uuidv4(),
      idProducto: this.producto.id,
      producto: this.producto.producto,
      cantidad: this.producto.cantidad,
      descripcion: '',
      precio: this.producto.precio,
      cocinada: false,
      precioTotal:this.producto.precio*this.producto.cantidad
    }

    this.OrdenesService.AgregarCarritoCompras(nuevoProducto);
    this.SweetAlertService.mensajeConfirmacion('se agrego 1 producto');

  }
}
