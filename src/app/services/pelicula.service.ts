import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Pelicula } from '../models/pelicula';
import { Global } from "./global";
import { Observable } from 'rxjs';

@Injectable()
export class PeliculaService{
    public url:string;
    constructor(
        private _http:HttpClient
    ){
        this.url=Global.url;
    }
    //ver todas las peliculas
    //http://localhost:3700/peliculas
    getPeliculas():Observable<any>{
        let headers=new HttpHeaders().set('Content-Type','application/json');
        return this._http.get(this.url+'peliculas',{headers:headers});
    }
    //guardar pelicula
    //http://localhost:3700/guardar-pelicula
    guardarPelicula(pelicula:Pelicula):Observable<any>{
        let params=JSON.stringify(pelicula);
        let headers=new HttpHeaders().set('Content-Type','application/json');
        return this._http.post(this.url+'guardar-pelicula',params,{headers:headers});
    }
    //ver pelicula
    //http://localhost:3700/pelicula/:id
    getPelicula(id:String):Observable<any>{
        let headers=new HttpHeaders().set('Content-Type','application/json');
        return this._http.get(this.url+'pelicula/'+id,{headers:headers});
    }
    //editar pelicula
    //http://localhost:3700/pelicula/:id
    updatePelicula(pelicula:Pelicula):Observable<any>{
        let params=JSON.stringify(pelicula);
        let headers=new HttpHeaders().set('Content-Type','application/json');
        return this._http.put(this.url+'pelicula/'+pelicula._id,params,{headers:headers});
    }
    //eliminar pelicula
    //http://localhost:3700/pelicula/:id
    deletePelicula(id:String):Observable<any>{
        let headers=new HttpHeaders().set('Content-Type','application/json');
        return this._http.delete(this.url+'pelicula/'+id,{headers:headers});
    }

}