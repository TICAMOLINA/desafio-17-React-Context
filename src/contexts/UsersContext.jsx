import { createContext, useState } from "react"


const UsersContext = createContext()

const UsersProvider = ( {children }) => {

  const [usuarios, setUsuarios] = useState(null)
  const [usuarioAEditar, setUsuarioAEditar] = useState(null)

  useEffect(() => {
    getAllUsuarios()
  }, [])
  
  const getAllUsuarios = async () => {

    try {
      const res = await fetch(import.meta.env.VITE_BACKEND)

      if (!res.ok) {
        throw new Error ('No pudo hacerse la petición')
      }
      const data = await res.json()
      setUsuarios(data);
    } catch (error) {
      console.error(error.message)
    }
  }

  const agregarUsuario = async (nuevoUsuario) => {
    delete nuevoUsuario.id

    try {
      const res = await fetch(import.meta.env.VITE_BACKEND, {
        method: 'POST',
        headers: {'content-type': 'application/json'},
        body: JSON.stringify(nuevoUsuario)
      })

      if (!res.ok) {
        throw new Error ('No se pudo hacer la petición')
      }

      const usuarioAgregadoEnBackend = await res.json()
      const nuevoEstadoUsuarios = [...usuarios, usuarioAgregadoEnBackend]
      setUsuarios(nuevoEstadoUsuarios)
    } catch (error) {
      console.error(error.message)
    }


  }

  const borrarUsuario = async (id) => {

    const urlBorrado = import.meta.env.VITE_BACKEND + id

    try {
      const res = await fetch(urlBorrado, {
        method: 'DELETE'
      })

      if (!res.ok) {
        throw new Error ('No se pudo hacer la petición')
      }

      const usuarioEliminadoDelBackend = await res.json()

    } catch (error) {
      console.error(error.message);
    }

    const nuevoEstadoUsuarios = usuarios.filter( user => user.id !== id)
    setUsuarios(nuevoEstadoUsuarios)
  }

  const editarUsuario = async (usuarioEditado) => {

    const urlEditar = import.meta.env.VITE_BACKEND + usuarioEditado.id

    try {
      usuarioEditado.edad = Number(usuarioEditado.edad)
      const res = await fetch(urlEditar, {
        method: 'PUT',
        headers: {'content-type': 'application/json'},
        body: JSON.stringify(usuarioEditado) 
      })

      if (!res.ok) {
        throw new Error ('No se pudo hacer la petición')
      }

      const usuarioEditadoBackend = await res.json()
      const nuevoEstadoUsuarios = usuarios.map(user => user.id === usuarioEditado.id ? usuarioEditado : user)
      setUsuarios(nuevoEstadoUsuarios)

    } catch (error) {
      console.error(error.message)
    }
  }

    const data = {
        usuarios,
        usuarioAEditar, 
        setUsuarioAEditar,
        agregarUsuario,
        borrarUsuario,
        editarUsuario,
    }

    return <UsersContext.Provider value={data}> {children}</UsersContext.Provider>
}

export {UsersProvider}
export default UsersContext