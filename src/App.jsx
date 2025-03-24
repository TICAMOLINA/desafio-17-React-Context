import { useState } from "react"
import Formulario from "./components/Formulario"
import UserList from "./components/UserList"

const App = () => {

  const [usuarioAEditar, setUsuarioAEditar] = useState(null)


  const agregarUsuario = async (nuevoUsuario) => {}

  const borrarUsuario = async (id) => {}

  const editarUsuario = async (usuarioEditado) => {}

  return (
    <>
        <h1 className="text-gray-300 text-4xl my-5">CRUD Usuarios</h1>
        <hr />
        <Formulario
          agregarUsuario={agregarUsuario}
          usuarioAEditar={usuarioAEditar}
          setUsuarioAEditar={setUsuarioAEditar}
          editarUsuario={editarUsuario} />
        <UserList
          borrarUsuario={borrarUsuario}
          setUsuarioAEditar={setUsuarioAEditar} />
    </>
  )
}

export default App


