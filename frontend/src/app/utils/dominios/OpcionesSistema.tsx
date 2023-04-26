const opcionesAdmin=[
    {nombre:'Dashboard',icono:'bi bi-house-dash',ruta:'/dashboard',hijos:[]},
    {nombre:"Acerca de",icono:'bi bi-grid',ruta :'/dashboard/team',hijos:[],},
    {nombre:'Perfiles',icono:'bi bi-person-lines-fill',ruta:'',hijos:[
        {nombre:'Listado',icono:'bi bi-circle', ruta:'/dashboard/listprofiles',},
        {nombre:'Nuevo',icono:'bi bi-circle', ruta:'/dashboard/addprofile'},
        {nombre:'Administración', icono:'bi bi-circle',ruta:'/dashboard/adminprofile'},
    ]},
    {nombre:'Usuarios',icono:'bi bi-person-lines-fill',ruta:'',hijos:[
            {nombre:'Listado', icono:'bi bi-circle',ruta:'/dashboard/listusers'},
            {nombre: 'Nuevo',icono:'bi bi-circle', ruta:'/dashboard/addusers'},
            {nombre:'Administración',icono:'bi bi-circle',ruta:'/dashboard/adminusers'}
    ]},
    {nombre:'Productos',icono:'fa-brands fa-sellcast',ruta:'',hijos:[
        {nombre:'Listado', icono:'bi bi-circle',ruta:'/dashboard/listproducts'},
        {nombre: 'Nuevo',icono:'bi bi-circle', ruta:'/dashboard/addproducts'},
        {nombre:'Administración',icono:'bi bi-circle',ruta:'/dashboard/adminproducts'}
    ]

    }
    
]

const opcionesInvitado=[
    {nombre:'Team',icono:'bi bi-grid',ruta:'/dashboard/team',hijos:[]},
    {nombre:'Compras ', icono:'bi bi-clipboard-data',ruta:'',hijos:[
        {nombre:'Pendientes', icono:'bi bi-circle',ruta:'dashboard/admuse'},
        {nombre:'Productos',icono:'bi bi-circle',ruta:'/dashboard/admuse' },
        {nombre:'Antiguas',icono:'bi bi-circle',ruta:'/dashboard/admuse' }

    ]}
]

export {opcionesAdmin,opcionesInvitado}