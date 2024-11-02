import { Component, OnInit } from '@angular/core';
import { OrdenesService } from '../../services/ordenes.service';
import { Ordenes } from '../../interfaces/ordenes.';

@Component({
  selector: 'page-lista-ordenes',
  templateUrl: './Page-lista-ordenes.component.html',
  styleUrl: './Page-lista-ordenes.component.css'
})
export class ListaOrdenesComponent implements OnInit {
constructor(private OrdenesService:OrdenesService){}
  async ngOnInit() {
    await this.OrdenesService.getDataOrdenes();
    this.Ordenes();
  }
  listaOrdenes:Ordenes[] = [];
  Ordenes(){
    this.listaOrdenes= this.OrdenesService.GetOrdenes;
  }
  totalOrdenes(){
    return this.listaOrdenes.length;
  }
}
