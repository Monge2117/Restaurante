import { Component, Input } from '@angular/core';
import { Productos } from '../../interfaces/Productos.';
import { OrdenesService } from '../../services/ordenes.service';
import { CarritoCompras } from '../../interfaces/CarritoCompras.';

@Component({
  selector: 'orden-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  constructor(private OrdenesService:OrdenesService){}
  @Input()
  producto:Productos ={
    id: 0,
    producto: '',
    cantidad: 0,
    precio: 0
  };

  increaseQuantity() {
    this.producto.cantidad++;
  }

  decreaseQuantity() {
    if (this.producto.cantidad > 0) {
      this.producto.cantidad--;
    }
  }
  AgregarAlCarrito(){
    const nuevoProducto:CarritoCompras={
      id: this.producto.id,
      producto: this.producto.producto,
      cantidad: this.producto.cantidad,
      descipcion: '',
      precio: this.producto.precio * this.producto.cantidad,
      cocinada: false
    }

    this.OrdenesService.AgregarCarritoCompras(nuevoProducto);
  }
}
