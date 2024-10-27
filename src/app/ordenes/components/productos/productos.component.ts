import { Component } from '@angular/core';
import { OrdenesService } from '../../services/ordenes.service';

@Component({
  selector: 'orden-productos',
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css'
})
export class ProductosComponent {
constructor(private OrdenesService:OrdenesService){}
ObtenerProductos(){
  return this.OrdenesService.GetProductos;
}
}
