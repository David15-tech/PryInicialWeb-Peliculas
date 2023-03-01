import { Component, OnInit } from '@angular/core';
import { Pelicula } from '../../models/pelicula';
import { PeliculaService } from '../../services/pelicula.service';
import { Global } from '../../services/global';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css'],
  providers:[PeliculaService]
})
export class PeliculasComponent implements OnInit {
  public peliculas:Pelicula[];
  public url:string;

  constructor(
    private _peliculaService:PeliculaService
  ) {
    this.url=Global.url;
    this.peliculas=[];
   }

  ngOnInit(): void {
    this.getPeliculas();
  }
  getPeliculas(){
    this._peliculaService.getPeliculas().subscribe(
      response=>{
        if(response.peliculas){
          this.peliculas=response.peliculas;
          console.log(this.peliculas);
        }
      },
      error=>{
        console.log(<any>error);
      }
    );
  }

}
