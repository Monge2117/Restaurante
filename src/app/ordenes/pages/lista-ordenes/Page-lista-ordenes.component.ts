import { Component } from '@angular/core';
import { OrdenesService } from '../../services/ordenes.service';

@Component({
  selector: 'page-lista-ordenes',
  templateUrl: './Page-lista-ordenes.component.html',
  styleUrl: './Page-lista-ordenes.component.css'
})
export class ListaOrdenesComponent {
constructor(private OrdenesService:OrdenesService){}
  Ordenes(){
    return this.OrdenesService.GetOrdenes;
  }
}
