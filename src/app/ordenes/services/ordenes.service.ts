import { Injectable } from '@angular/core';
import { Categorias } from '../interfaces/interfaces/categorias.';

@Injectable({
  providedIn: 'root'
})
export class OrdenesService {

  constructor() { }

  private ListaCategorias:Categorias[]=[{id:1,nombre:'Bebidas'},{id:2,nombre:'Desayunos'},{id:2,nombre:'Comida rapida'}]

  get GetCategorias(){
     return [...this.ListaCategorias]
  }

}
