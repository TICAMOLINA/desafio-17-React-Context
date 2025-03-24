import { useEffect } from "react"
import App from "../App"
import useTittle from "../hooks/useTittle"

const CrudUsuarios = () => {

    useTittle('CRUD Usuarios')
    
  return (
    <App />
  )
}

export default CrudUsuarios