class Perfil {
    public _id: string;
    public nombrePerfil: string;
    public estadoPerfil: string;
    constructor(id: string, nom: string, est: string) {
        this._id = id;
        this.nombrePerfil = nom;
        this.estadoPerfil = est;
    }
}
export default Perfil;
