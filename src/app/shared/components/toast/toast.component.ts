import { Component } from '@angular/core';
declare var bootstrap: any;
@Component({
  selector: 'shared-toast',
  templateUrl: './toast.component.html',
  styleUrl: './toast.component.css'
})
export class ToastComponent {
  showToast() { const toastElement = document.getElementById('myToast');
    const toast = new bootstrap.Toast(toastElement, { delay: 2000 }); toast.show(); }
}

