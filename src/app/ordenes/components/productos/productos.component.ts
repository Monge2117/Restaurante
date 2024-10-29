import { Component, Input } from '@angular/core';
import { OrdenesService } from '../../services/ordenes.service';
import { Productos } from '../../interfaces/Productos.';

@Component({
  selector: 'orden-productos',
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css'
})
export class ProductosComponent {
constructor(private OrdenesService:OrdenesService){}
@Input()
idCategoria:number=0;
ObtenerProductos(){
  console.log(this.idCategoria);
  return this.OrdenesService.GetProductos(this.idCategoria);
}
}
