import { Component } from '@angular/core';

@Component({
  selector: 'page-nueva-orden',
  templateUrl: './nueva-orden.component.html',
  styleUrl: './nueva-orden.component.css'
})
export class NuevaOrdenComponent {

idCategoria:number=1;
BuscarProducto:string='';
setearIdCategoria(idCate:number){
  this.idCategoria = idCate;
}
}
