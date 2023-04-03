class PerfilEntidad {
    public nombrePerfil: string;
    public estadoPerfil :number
    constructor(nomp: string, estado:number) {
        this.nombrePerfil= nomp
        this.estadoPerfil=estado
    }
}


export default PerfilEntidad;
