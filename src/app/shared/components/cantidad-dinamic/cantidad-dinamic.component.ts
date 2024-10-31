import { Component, EventEmitter, Input, Output } from '@angular/core';
@Component({
  selector: 'shared-cantidad-dinamic',
  templateUrl: './cantidad-dinamic.component.html',
  styleUrl: './cantidad-dinamic.component.css'
})
export class CantidadDinamicComponent {
    @Input()
    cantidad:number = 0
    @Input()
    precio:number = 0
    @Output()
    propagar = new EventEmitter<{ precio: number, quantity: number }>();

    private precioTotal:number = 0
    increaseQuantity() {
      this.cantidad++;
      this.precioTotal = this.precio*this.cantidad
      this.propagarPrecioxCantidad();
    }
    decreaseQuantity() {
      if (this.cantidad > 1) {
        this.cantidad--;
        this.precioTotal = this.precio*this.cantidad
        this.propagarPrecioxCantidad();
      }
    }
    propagarPrecioxCantidad(){
      this.propagar.emit({precio:this.precioTotal,quantity:this.cantidad});
    }

  };



