import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Categorias } from '../interfaces/interfaces/categorias.';
import { Productos } from '../interfaces/Productos.';
import { Ordenes } from '../interfaces/ordenes.';
import { CarritoCompras } from '../interfaces/CarritoCompras.';
import { OrdenesDetalle } from '../interfaces/OrdenesDetalle.';
import { DtoOrden } from '../interfaces/dtoOrden.';

@Injectable({
  providedIn: 'root'
})
export class OrdenDataBaseServiceService {
  private apiUrl = 'https://yrajjljsczktxkhtgkls.supabase.co/rest/v1/';
  cargarHeader(){
  const headers = new HttpHeaders({
    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlyYWpqbGpzY3prdHhraHRna2xzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzAzODkzMzMsImV4cCI6MjA0NTk2NTMzM30.gK4UpnXfwJrXMGWHfxVBugwNicOx1YNredLxuVATr24',
    'apikey': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlyYWpqbGpzY3prdHhraHRna2xzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzAzODkzMzMsImV4cCI6MjA0NTk2NTMzM30.gK4UpnXfwJrXMGWHfxVBugwNicOx1YNredLxuVATr24'
  });
  return headers;
}
cargarHeader2(){
  const headers = new HttpHeaders({
    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlyYWpqbGpzY3prdHhraHRna2xzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzAzODkzMzMsImV4cCI6MjA0NTk2NTMzM30.gK4UpnXfwJrXMGWHfxVBugwNicOx1YNredLxuVATr24',
    'apikey': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlyYWpqbGpzY3prdHhraHRna2xzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzAzODkzMzMsImV4cCI6MjA0NTk2NTMzM30.gK4UpnXfwJrXMGWHfxVBugwNicOx1YNredLxuVATr24',
     'Content-Type':'application/json'
  });
  return headers;
}
  constructor(private http: HttpClient) { }

  getDataCategorias(): Observable<Categorias[]> {
   const headers = this.cargarHeader();
   const urlPart2 = 'Categoria?select=*';
    return this.http.get<Categorias[]>(this.apiUrl+urlPart2,{headers});
  }

  getDataProductos(): Observable<Productos[]> {
    const headers = this.cargarHeader();
    const urlPart2 = 'Productos?select=*';
     return this.http.get<Productos[]>(this.apiUrl+urlPart2,{headers});
   }

   getDataOrdenes(): Observable<Ordenes[]> {
    const headers = this.cargarHeader();
    const urlPart2 = 'Ordenes?select=*';
     return this.http.get<Ordenes[]>(this.apiUrl+urlPart2,{headers});
   }

   getDataDetalleOrdenes(): Observable<CarritoCompras[]> {
    const headers = this.cargarHeader();
    const urlPart2 = 'OrdenesDetalle?select=*';
     return this.http.get<CarritoCompras[]>(this.apiUrl+urlPart2,{headers});
   }

   insertDataDetalleOrdenes(orden:OrdenesDetalle[]) {
    const headers = this.cargarHeader2();
    const urlPart2 = 'OrdenesDetalle';
    const body = orden;
     return this.http.post(this.apiUrl+urlPart2,body,{headers}).subscribe(response => { console.log(response); });
   }

   insertDataOrdenes(orden:DtoOrden) {
    const headers = this.cargarHeader2();
    const urlPart2 = 'Ordenes';
    const body = orden;
     return this.http.post(this.apiUrl+urlPart2,body,{headers}).subscribe(response => { console.log(response); });
   }

   UpdateDataDetalleOrdenesCocina(idOrdenDetalle:string) {
    const headers = this.cargarHeader2();
    const urlPart2 = 'OrdenesDetalle?idOrdenDetalle=eq.'+idOrdenDetalle;
    const body = '{"cocinada":true}'
     return this.http.patch(this.apiUrl+urlPart2,body,{headers}).subscribe(response => { console.log(response); });

   }


}
