class CrearUsuario {
    public nombreUsuario: string;
    public correoUsuario: string;
    public passwordUsuario: string;

    constructor(nom: string, cor: string, cla: string) {
        this.nombreUsuario = nom;
        this.correoUsuario = cor;
        this.passwordUsuario = cla;
    }
}
export default CrearUsuario;
