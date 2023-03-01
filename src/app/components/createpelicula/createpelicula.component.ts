import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PeliculaService } from '../../services/pelicula.service';
import { CargarService } from '../../services/cargar.service';
import { Pelicula } from '../../models/pelicula';
import { Global } from '../../services/global';

@Component({
  selector: 'app-createpelicula',
  templateUrl: './createpelicula.component.html',
  styleUrls: ['./createpelicula.component.css'],
  providers:[PeliculaService,CargarService]
})
export class CreatepeliculaComponent implements OnInit {
  public titulo:string;
  public pelicula:Pelicula;
  public peliculaGuardar:Pelicula;
  public url:string;
  public archivosParaCargar:Array<File>;
  @ViewChild('archivoImagen') fileInput:any;
  public status:string;
  public idGuardado:string;

  constructor(
    private _peliculaService:PeliculaService,
    private _cargarService:CargarService
  ) { 
    this.titulo="GUARDAR PELICULA";
    this.url=Global.url;
    this.pelicula=new Pelicula('','','',2023,20,'');
    this.peliculaGuardar=new Pelicula('','','',2023,20,'');
    this.status="";
    this.idGuardado="";
    this.archivosParaCargar=[];
  }

  ngOnInit(): void {
  }
  guardarPelicula(form:NgForm){
    this._peliculaService.guardarPelicula(this.pelicula).subscribe(
      response=>{
        if(response.pelicula){
          if(this.archivosParaCargar){
            this._cargarService.peticionRequest(Global.url+"subir-imagen/"+response.pelicula._id,[],this.archivosParaCargar,'imagen')
            .then((result:any)=>{
              this.peliculaGuardar=result.response;
              this.status='success';
              this.idGuardado=result.pelicula._id;
              form.reset();
              this.fileInput.nativeElement.value='';
            });
          }else{
            this.status='failed';
          }
        }else{
          this.status='failed';
        }
      },
      error=>{
        console.log(<any>error);
      }
    );
  }

  imagenChangeEvent(archivoSeleccionado:any){
    this.archivosParaCargar=<Array<File>>archivoSeleccionado.target.files;
  }
}
