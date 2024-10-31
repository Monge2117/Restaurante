import { Injectable } from '@angular/core';
import Swal from 'sweetalert2'
@Injectable({
  providedIn: 'root'
})
export class SweetAlertService {
  constructor() { }
  mensajeConfirmacion(mensaje:string) {
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: mensaje,
      showConfirmButton: false,
      timer: 1000
    });
  }

  mensajeError(mensaje:string){
    Swal.fire({
      icon: "error",
      title: "Error",
      text: mensaje,
      //footer: '<a href="#">Why do I have this issue?</a>'
    });
  }


}
