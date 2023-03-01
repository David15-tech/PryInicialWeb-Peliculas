import { Component, OnInit } from '@angular/core';
import { PeliculaService } from '../../services/pelicula.service';
import { Pelicula } from '../../models/pelicula';
import { Global } from '../../services/global';
import { CargarService } from '../../services/cargar.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-editarpelicula',
  templateUrl: '../createpelicula/createpelicula.component.html',
  styleUrls: ['./editarpelicula.component.css'],
  providers:[PeliculaService, CargarService]
})
export class EditarpeliculaComponent implements OnInit {
  public titulo:string;
  public pelicula:Pelicula;
  public peliculaGuardar:Pelicula;
  public url:string;
  public archivosParaCargar:Array<File>;
  public status:string;
  public idGuardado:string;

  constructor(
    private _peliculaService:PeliculaService,
    private _cargarService:CargarService,
    private _router:Router,
    private _route:ActivatedRoute
  ) { 
    this.titulo="EDITAR PELICULA";
    this.url=Global.url;
    this.pelicula=new Pelicula("","","",2023,200,"");
    this.peliculaGuardar=new Pelicula("","","",2023,200,"");
    this.archivosParaCargar=[];
    this.status='';
    this.idGuardado='';
  }

  ngOnInit(): void {
    this._route.params.subscribe(params=>{
      let id=params['id'];
      //console.log(id);
      this.getPelicula(id);
      console.log(this.pelicula)
    })
  }
  getPelicula(id:String){
    this._peliculaService.getPelicula(id).subscribe(
      response=>{
        this.pelicula=response.pelicula;
        console.log(this.pelicula)
      },
      error=>{
        console.log(<any>error);
      }
    )
  }
  guardarPelicula(form:NgForm){
    this._peliculaService.updatePelicula(this.pelicula).subscribe(
      response=>{
        if(this.archivosParaCargar){
          this._cargarService.peticionRequest(Global.url+"subir-imagen/"+this.pelicula._id,[],this.archivosParaCargar,'imagen')
          .then((result:any)=>{
            this.peliculaGuardar=result.response;
            this.status='success';
            this.idGuardado=result.pelicula._id;
            form.reset();
          });
        }else{
          this.peliculaGuardar=response.libro;
            this.status='success';
            form.reset();
        }
      }
    );
  }
  imagenChangeEvent(archivoSeleccionado:any){
    this.archivosParaCargar=<Array<File>>archivoSeleccionado.target.files;
  }

}