import Fila from "./Fila"
import Spinner from "./Spinner"

const UserList = ({ usuarios, borrarUsuario, setUsuarioAEditar }) => {



  return (

    <>
      {usuarios ? (
        <table className="w-full text-sm text-left text-gray-300">
          <thead className="text-xs uppercase bg-[#25BBAF]/20 backdrop-blur-lg p-6 border border-white/40">
            <tr>
              <th className="px-6 py-6">Nombre</th>
              <th className="px-6 py-6">Apellido</th>
              <th className="px-6 py-6">Edad</th>
              <th className="px-6 py-6">Puesto</th>
              <th className="px-6 py-6">Foto</th>
              <th className="px-6 py-6">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {usuarios.map((usuario) => (
              <Fila
                usuario={usuario}
                key={usuario.id}
                borrarUsuario={borrarUsuario}
                setUsuarioAEditar={setUsuarioAEditar} />
            ))}
          </tbody>
        </table>
      ) : (
        <Spinner />
      )
      }

    </>
  )
}

export default UserList