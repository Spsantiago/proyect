import { useState, useEffect } from "react"

import ApiBack from "../../../utils/dominios/ApiBack"
import ServicioPrivado from "../../../services/ServicioPrivado"
import { Link } from "react-router-dom"
import Usuario from "../../../models/Usuario"

export const UsuarioListado = () => {

  const [aregloUsuarios, setaregloUsuarios] = useState<Usuario[]>([])

  const obtenerUsuario= async()=>{
    const resultado =await ServicioPrivado.peticionGET(ApiBack.USUARIOS_OBTENER)
    setaregloUsuarios(resultado)
    return resultado
  }
  
  useEffect(() => {
   obtenerUsuario()
},[])
  

  return (
    <div >
      <main id='main' className='main'>
        <div className="pagetitle ">
          <h1>Perfiles</h1>
          <nav>
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to='/dashboar'>Inicio</Link>
              </li>
              <li className="breadcrumb-item active">Listado de Perfiles</li>
            </ol>
          </nav>
        </div>

        <div className="col-lg-12">
          <div className="card">
            <div className="card-body">
      <table className="table table-hover table-responsive-sm">
      <thead>
    <tr>
      <th >#</th>
      <th >Nombre</th>
      <th >Estado</th>
      <th >Correo</th>
    </tr>
  </thead>
  <tbody>
    {aregloUsuarios.map((usuario, indice)=>(
      <tr key={indice}>
        <td>
          {indice + 1}
        </td>
        <td>
          {usuario.nombreUsuario}
        </td>
        <td>
          {usuario.estadoUsuario === 1 ? 'Activo':'Inactivo'}
        </td>
        <td>
          {usuario.correoUsuario}
        </td>
      
      </tr>
    ))}
  </tbody>

</table></div>
</div>
      </div>
      </main>
      </div> 

  )
}
