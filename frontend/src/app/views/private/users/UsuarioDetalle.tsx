import { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"

import Usuario from "../../../models/Usuario"
import ApiBack from "../../../utils/dominios/ApiBack"
import noFoto from '../../../../assets/img/logo-original.png'
import ServicioPrivado from "../../../services/ServicioPrivado"
import { obtenerFechaLocal,obtenerHora } from "../../../utils/function/FormatoFecha"


export const UsuarioDetalle = () => {
  
  let {codigo}= useParams()
  const navigate = useNavigate()
  const [todoListo, setTodoListo] = useState<boolean>(false);
  let cargaFinalizada = todoListo !== false;
  const [objUsuario, setObjUsuario]= useState<Usuario>()

  
  useEffect(()=>{
    //consulta los datos de un usuario por su id
    const ObtenerUsuario=async()=>{
      
    }

  })
  
  
  return (
    <main id="main" className="main">Componente UsuarioDetalle</main>
  )
}
