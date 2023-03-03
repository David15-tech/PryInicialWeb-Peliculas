import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Usuario } from "../models/usuario";
import { Global } from "./global";
import { Observable } from 'rxjs';

@Injectable()
export class UsuarioService{
    public url:string;
    constructor(
        private _http:HttpClient
    ){
        this.url=Global.url;
    }
    //guardar usuario
    //localhost:3700/guadar-usuario
    guardarUsuario(usuario:Usuario):Observable<any>{
        let params=JSON.stringify(usuario);
        let headers=new HttpHeaders().set('Content-Type','application/json');
        return this._http.post(this.url+'guardar-usuario',params,{headers:headers});
    }


    // login
    //http://localhost:3600/login
    login(user:string,password:string):Observable<any>{
        let params=JSON.stringify({user,password});
        let headers=new HttpHeaders().set('Content-Type','application/json');
        return this._http.post(this.url+'login',params,{headers:headers});
    }
    // logout
    //http://localhost:3600/logout
    logout():Observable<any>{
        let headers=new HttpHeaders().set('Content-Type','application/json');
        return this._http.get(this.url+'logout',{headers:headers});
    }

}