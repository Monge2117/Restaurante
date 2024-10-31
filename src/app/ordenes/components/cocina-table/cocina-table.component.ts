import { Component } from '@angular/core';
import { Ordenes } from '../../interfaces/ordenes.';
import { OrdenesService } from '../../services/ordenes.service';

@Component({
  selector: 'orden-cocina-table',
  templateUrl: './cocina-table.component.html',
  styleUrl: './cocina-table.component.css'
})
export class CocinaTableComponent {
constructor(private OrdenesService:OrdenesService){}

obtenerOrdenes(){
 return this.OrdenesService.GetOrdenesCocina;
}

estaListo(mesa:string,idProducto:number){
  this.OrdenesService.SetOrden(mesa,idProducto);
}
}
