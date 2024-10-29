import { Component, EventEmitter, Output } from '@angular/core';
import { OrdenesService } from '../../services/ordenes.service';

@Component({
  selector: 'orden-categorias',
  templateUrl: './categorias.component.html',
  styleUrl: './categorias.component.css'
})
export class CategoriasComponent {
 constructor(private OrdenesService:OrdenesService){}
 @Output()
idCategoria = new EventEmitter<number>();
  activeIndex: number=0;
 Categorias(){
  return this.OrdenesService.GetCategorias;
 }
  setActive(index: number,id:number) {
    this.activeIndex = index;
    this.idCategoria.emit(id);
  }
}
