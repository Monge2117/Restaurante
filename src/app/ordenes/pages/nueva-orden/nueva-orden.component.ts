import { Component } from '@angular/core';

@Component({
  selector: 'orden-nueva-orden',
  templateUrl: './nueva-orden.component.html',
  styleUrl: './nueva-orden.component.css'
})
export class NuevaOrdenComponent {
idCategoria:number=1;

setearIdCategoria(idCate:number){
  this.idCategoria = idCate;
}
}
