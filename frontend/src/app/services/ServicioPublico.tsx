import ApiBack from '../utils/dominios/ApiBack';

class ServicioPublico {
    /*metodo para conectar al backend  */
    public static async crearUsuario(miOjetoJson: any) {
        const datosEnvio = {
            method: 'POST',
            body: JSON.stringify(miOjetoJson),
            headers: { 'Content-Type': 'application/json; charset=UTF-8' },
        };
        /*url para enviar la informacion que se usa en eñ backend */
        const urlBackend = ApiBack.URL + ApiBack.CREAR_USUARIO;
        /*se consume el backend: Crear usuario */
        const laRespuesta = fetch(urlBackend, datosEnvio)
            .then((respuesta) => respuesta.json())
            .then((misDatos) => {
                return misDatos;
            })
            .catch((miError) => {
                return miError;
            });

        return laRespuesta;
    }


    
    public static async iniciarSesion(miOjetoJson: any) {
        const datosEnvio = {
            method: 'POST',
            body: JSON.stringify(miOjetoJson),
            headers: { 'Content-Type': 'application/json; charset=UTF-8' },
        };
        /*url para enviar la informacion que se usa en eñ backend */
        const urlBackend = ApiBack.URL + ApiBack.INICIAR_SESION;
        /*se consume el backend: Crear usuario */
        const laRespuesta = fetch(urlBackend, datosEnvio)
            .then((respuesta) => respuesta.json())
            .then((misDatos) => {
                return misDatos;
            })
            .catch((miError) => {
                return miError;
            });

        return laRespuesta;
    }
}
export default ServicioPublico;
