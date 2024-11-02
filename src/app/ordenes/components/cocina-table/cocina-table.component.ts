import { Component, OnInit } from '@angular/core';
import { Ordenes } from '../../interfaces/ordenes.';
import { OrdenesService } from '../../services/ordenes.service';

@Component({
  selector: 'orden-cocina-table',
  templateUrl: './cocina-table.component.html',
  styleUrl: './cocina-table.component.css'
})
export class CocinaTableComponent implements OnInit {
  ListaOdenesCocina:Ordenes[]=[];
constructor(private OrdenesService:OrdenesService){}
  async ngOnInit(){
    await this.OrdenesService.getDataOrdenes();
    this.obtenerOrdenes();
  }

  cargar(){
    return this.ListaOdenesCocina;
  }
obtenerOrdenes(){
 this.ListaOdenesCocina = this.OrdenesService.GetOrdenesCocina;
}
cantidadOrdenes(){
 return this.ListaOdenesCocina.length;
 }
estaListo(mesa:string,idOrdenDetalle:string){

this.OrdenesService.SetOrden(mesa,idOrdenDetalle);
this.obtenerOrdenes();
}

async buscarOrdenes(){
  await this.OrdenesService.getDataOrdenes();
    this.obtenerOrdenes();
}

}
