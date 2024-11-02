import { Component, EventEmitter, Output } from '@angular/core';
import { OrdenesService } from '../../../ordenes/services/ordenes.service';

@Component({
  selector: 'shared-nav-bar',
  templateUrl: './NavBar.component.html',
  styleUrl: './NavBar.component.css',
})
export class NavBarComponent {
  constructor(private OrdenesService:OrdenesService){}
  @Output()
  propagar = new EventEmitter<string>();
  currentRoute: string = 'menu';
  setActive(route: string) {
    this.currentRoute = route;
    this.propagar.emit(this.currentRoute);
  }

 }
