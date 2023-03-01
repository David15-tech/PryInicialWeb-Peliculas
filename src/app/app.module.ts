import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PeliculasComponent } from './components/peliculas/peliculas.component';
import { CreatepeliculaComponent } from './components/createpelicula/createpelicula.component';
import { DetallepeliculaComponent } from './components/detallepelicula/detallepelicula.component';
import { EditarpeliculaComponent } from './components/editarpelicula/editarpelicula.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { HomeComponent } from './components/home/home.component';
import { EncabezadoComponent } from './components/encabezado/encabezado.component';
import { PieComponent } from './components/pie/pie.component';
import { HttpClientModule } from '@angular/common/http';//import 1
import { FormsModule } from '@angular/forms';// import 2
//agregar algunos protocolos pa conectar al 
@NgModule({
  declarations: [
    AppComponent,
    PeliculasComponent,
    CreatepeliculaComponent,
    DetallepeliculaComponent,
    EditarpeliculaComponent,
    ContactoComponent,
    HomeComponent,
    EncabezadoComponent,
    PieComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,//servicio 1
    FormsModule// servicio 2, pa hacer formularios de angular
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
