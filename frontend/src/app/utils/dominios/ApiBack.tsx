const ApiBack = {
    URL: 'http://localhost:3123',
    CREAR_USUARIO: '/api/public/usuario/crear',
    INICIAR_SESION:'/api/public/usuario/iniciar',
 
 
    PERFILES_CREAR:'/api/private/perfil/crear',
    PERFILES_OBTENER:'/api/private/perfil/todos',
    PERFILES_ELIMINAR:'/api/private/perfil/eliminar',
    PERFILES_OBTENER_UNO:'/api/private/perfil/uno',
    PERFILES_ACTUALIZAR:'/api/private/perfil/actualizar',

    USUARIOS_CREAR:'/api/private/usuario/crear',
    USUARIOS_OBTENER:'/api/private/usuario/todos',
    USUARIOS_ELIMINAR:'/api/private/usuario/eliminar',
    USUARIOS_OBTENER_UNO:'/api/private/usuario/uno',
    USUARIOS_ACTUALIZAR:'/api/private/usuario/actualizar'
};
export default ApiBack;
