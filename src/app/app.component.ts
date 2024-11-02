import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Restaurante';
  currentPage:string = 'menu';
  setearpage(value:string){
    this.currentPage = value;
  }

}
