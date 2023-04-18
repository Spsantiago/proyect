import PerfilEntidad from './PerfilEntidad';

class UsuarioEntidad {
    public nombreUsuario: string;
    public estadoUsuario: number;
    public correoUsuario: string;
    public passwordUsuario: string;
    public fechaCreacion: Date;
    public codPerfil: PerfilEntidad;
    public avatarUsuario :string

    constructor(
        nomp: string,
        estado: number,
        correo: string,
        password: string,
        fecha: Date,
        codP: PerfilEntidad,
        image: string
    ) {
        this.nombreUsuario = nomp;
        this.estadoUsuario = estado;
        this.correoUsuario = correo;
        this.passwordUsuario = password;
        this.fechaCreacion = fecha;
        this.codPerfil = codP;
        this.avatarUsuario=image
    }
}
export default UsuarioEntidad;
