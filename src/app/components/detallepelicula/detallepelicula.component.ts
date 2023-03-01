import { Component, OnInit } from '@angular/core';
import { PeliculaService } from '../../services/pelicula.service';
import { Pelicula } from '../../models/pelicula';
import { Global } from '../../services/global';
import { ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-detallepelicula',
  templateUrl: './detallepelicula.component.html',
  styleUrls: ['./detallepelicula.component.css'],
  providers:[PeliculaService]
})
export class DetallepeliculaComponent implements OnInit {
  public url:string;
  public pelicula:Pelicula;
  public confirm:boolean;

  constructor(
    private _peliculaService:PeliculaService,
    private _router:Router,
    private _route:ActivatedRoute
  ) { 
    this.url=Global.url;
    this.pelicula=new Pelicula("","","",2023,200,"");
    this.confirm=false;
  }

  ngOnInit(): void {
    this._route.params.subscribe(params=>{
      let id=params['id'];
      //console.log(id);
      this.getPelicula(id);
    })
  }
  getPelicula(id:String){
    this._peliculaService.getPelicula(id).subscribe(
      response=>{
        this.pelicula=response.pelicula;
        //console.log(this.libro);
      },
      error=>{
        console.log(<any>error);
      }
    )
  }
  setConfirm(confirm:boolean){
    this.confirm=confirm;
  }
  borrarPelicula(id:String){
    this._peliculaService.deletePelicula(id).subscribe(
      response=>{
        //if(response.pelicula){
          this._router.navigate(['/peliculas']);
        //}
      },
      error=>{
        console.log(<any>error);
      }
    )
  }

}
