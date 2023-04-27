class ProductoEntidad{
    public nombreProducto : string
    public valor:number
    public descripcion:string
    public nombreImagenProducto: string;
    public avatarProducto :string
    public estadoProducto: number;
    public fechaCreacion: Date;
    public codigoProducto:number

constructor(nom:string,val:number,des:string,image: string,nomp:string,fec:Date,est:number,codp:number){
 this.nombreProducto=nom 
 this.valor=val
 this.descripcion=des
 this.nombreImagenProducto=nomp
this.avatarProducto=image
this.estadoProducto= est
this.fechaCreacion=fec
this.codigoProducto=codp
}
}
export default ProductoEntidad