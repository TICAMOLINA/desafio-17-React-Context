import { useNavigate } from "react-router";
import Swal from "sweetalert2";

const Fila = ({ usuario, borrarUsuario, setUsuarioAEditar }) => {

  const navigate = useNavigate()

  const handleEliminar = (id) => {

    Swal.fire({
      title: "¿Estás seguro que deseas borrar?",
      text: "No podrás revertir este proceso",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, borralo!"
    }).then((result) => {
      if (result.isConfirmed) {
        borrarUsuario(id)
        Swal.fire({
          title: "Borrado con éxito!",
          text: "El usuario ha sido borrado de la lista.",
          icon: "success"
        });
      } 
    });
  }

  const handleEditar = (usuario) => {
    setUsuarioAEditar(usuario)
  }

  const handleVer = (id) => {
    navigate(`/crudusuarios/detalle/${id}`)
  } 
  return (
    <tr className="bg-[#25BBAF] border-b border-gray-200">
      <td className="px-6 py-4">{usuario.nombre}</td>
      <td className="px-6 py-4">{usuario.apellido}</td>
      <td className="px-6 py-4">{usuario.edad}</td>
      <td className="px-6 py-4">{usuario.puesto}</td>
      <td className="px-6 py-4">
        <img src={usuario.foto} alt={usuario.nombre} style={{ width: '100px' }} />
      </td>
      <td className="px-6 py-4">
        <button
        onClick={() => handleVer(usuario.id)}
          className="px-4 py-2 bg-green-400 text-white rounded-lg hover:bg-green-700 cursor-pointer mr-2">
          Ver</button>
        <button
          onClick={() => handleEditar(usuario)}
          className="px-4 py-2 bg-yellow-400 text-white rounded-lg hover:bg-yellow-700 cursor-pointer mr-2">
          Editar</button>
        <button
          onClick={() => handleEliminar(usuario.id)}
          className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 cursor-pointer mr-2">
          Borrar</button>
      </td>
    </tr>
  )
}

export default Fila