//3. crear la estructura de la base de datos 
export class Pelicula{
    constructor(
        public _id:string,
        public nombre:string,
        public tipo:string,
        public anio:Number,
        public precio:Number,
        public imagen:string
    ){}
}