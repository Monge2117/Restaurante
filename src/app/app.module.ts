import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './shared/components/NavBar/NavBar.component';
import { NuevaOrdenComponent } from './ordenes/pages/nueva-orden/nueva-orden.component';
import { ListaOrdenesComponent } from './ordenes/pages/lista-ordenes/Page-lista-ordenes.component';
import { CategoriasComponent } from './ordenes/components/categorias/categorias.component';
import { CarritoComprasComponent } from './ordenes/components/carrito-compras/carrito-compras.component';
import { OrdenesCocinaComponent } from './ordenes/pages/ordenes-cocina/ordenes-cocina.component';
import { FormsModule } from '@angular/forms';
import { CardComponent } from './ordenes/components/card/card.component';
import { ProductosComponent } from './ordenes/components/productos/productos.component';
import { ConfiguracionComponent } from './ordenes/pages/configuracion/configuracion.component';
import { NuevoProductoComponent } from './ordenes/components/nuevo-producto/nuevo-producto.component';
import { CantidadDinamicComponent } from './shared/components/cantidad-dinamic/cantidad-dinamic.component';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { ListOrdenesComponent } from './ordenes/components/list-ordenes/list-ordenes.component';
import { CocinaTableComponent } from './ordenes/components/cocina-table/cocina-table.component';



@NgModule({
  declarations: [
    AppComponent,NavBarComponent, NuevaOrdenComponent, ListaOrdenesComponent,
     CategoriasComponent, CarritoComprasComponent, OrdenesCocinaComponent, CardComponent,
      ProductosComponent, ConfiguracionComponent, NuevoProductoComponent, CantidadDinamicComponent, ListOrdenesComponent, CocinaTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    SweetAlert2Module.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
