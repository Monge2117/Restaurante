import { Component } from '@angular/core';
import { Categorias } from '../../interfaces/interfaces/categorias.';
import { OrdenesService } from '../../services/ordenes.service';

@Component({
  selector: 'orden-categorias',
  templateUrl: './categorias.component.html',
  styleUrl: './categorias.component.css'
})
export class CategoriasComponent {
 constructor(private OrdenesService:OrdenesService){}

  activeIndex: number | null = null;
 Categorias(){
  return this.OrdenesService.GetCategorias;
 }
  setActive(index: number) {
    this.activeIndex = index;

  }
}
