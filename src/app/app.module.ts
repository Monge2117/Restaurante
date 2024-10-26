import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './shared/components/NavBar/NavBar.component';
import { NuevaOrdenComponent } from './ordenes/pages/nueva-orden/nueva-orden.component';
import { ListaOrdenesComponent } from './ordenes/pages/lista-ordenes/lista-ordenes.component';
import { CategoriasComponent } from './ordenes/components/categorias/categorias.component';
import { CarritoComprasComponent } from './ordenes/components/carrito-compras/carrito-compras.component';


@NgModule({
  declarations: [
    AppComponent,NavBarComponent, NuevaOrdenComponent, ListaOrdenesComponent, CategoriasComponent, CarritoComprasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
