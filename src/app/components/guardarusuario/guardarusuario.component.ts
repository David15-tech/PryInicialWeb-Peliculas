import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UsuarioService } from 'src/app/services/usuario.service';
import { CargarService } from '../../services/cargar.service';
import { Usuario } from 'src/app/models/usuario';
import { Global } from '../../services/global';

@Component({
  selector: 'app-guardarusuario',
  templateUrl: './guardarusuario.component.html',
  styleUrls: ['./guardarusuario.component.css'],
  providers:[UsuarioService,CargarService]
})
export class GuardarusuarioComponent implements OnInit{
  public titulo:string;
  public usuario:Usuario;
  public usuarioGuardar:Usuario;
  public url:string;
  public archivosParaCargar:Array<File>;
  @ViewChild('archivoImagen') fileInput:any;
  public status:string;
  public idGuardado:string;


  constructor(
    private _usuarioService:UsuarioService,
    private _cargarService:CargarService
  ) { 
    this.titulo="GUARDAR USUARIO";
    this.url=Global.url;
    this.usuario=new Usuario('','','','','','');
    this.usuarioGuardar=new Usuario('','','','','','');
    this.status="";
    this.idGuardado="";
    this.archivosParaCargar=[];
  }

  ngOnInit(): void {
  }
  guardarUsuario(form:NgForm){
    this._usuarioService.guardarUsuario(this.usuario).subscribe(
      response=>{
        if(response.usuario){
          if(this.archivosParaCargar){
            this._cargarService.peticionRequest(Global.url+"subir-imagen-user/"+response.usuario._id,[],this.archivosParaCargar,'imagen')
            .then((result:any)=>{
              this.usuarioGuardar=result.response;
              this.status='success';
              this.idGuardado=result.usuario._id;
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
