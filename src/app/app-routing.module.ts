import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PeliculasComponent } from './components/peliculas/peliculas.component';
import { CreatepeliculaComponent } from './components/createpelicula/createpelicula.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { DetallepeliculaComponent } from './components/detallepelicula/detallepelicula.component';
import { EditarpeliculaComponent } from './components/editarpelicula/editarpelicula.component';
//2. lo que se hace para conectar las rutas de cada component, esto es lo segundo que se hace, lo primero es \
/// hacer el home, de donde se redirige cada enlace, es decir lo del HTML
const routes: Routes = [
  {path:'inicio',component:HomeComponent},
  {path:'peliculas',component:PeliculasComponent},
  {path:'guardar-pelicula',component:CreatepeliculaComponent},
  {path:'contacto',component:ContactoComponent},
  {path:'pelicula/:id',component:DetallepeliculaComponent},
  {path:'editar-pelicula/:id',component:EditarpeliculaComponent},
  {path:'**',component:HomeComponent},//si existe cualquier enlace sin ruta, se ira home
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
