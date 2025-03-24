import { useEffect, useState } from "react"

const Formulario = ({ agregarUsuario, usuarioAEditar, setUsuarioAEditar, editarUsuario }) => {

    const dataFormularioInicial = {
        id: null,
        nombre: '',
        apellido: '',
        edad: '',
        puesto: '',
        foto: '',
    }

    const [dataFormulario, setDataFormulario] = useState(dataFormularioInicial)

    useEffect(() => {
        usuarioAEditar ? setDataFormulario(usuarioAEditar) : setDataFormulario(dataFormularioInicial)
    }, [usuarioAEditar])


    const handleChange = (e) => {
        const dataActualizada = {
            ...dataFormulario,
            [e.target.name]: e.target.value
        }

        setDataFormulario(dataActualizada)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if (dataFormulario.id === null) {
            agregarUsuario(dataFormulario)

        } else {
            editarUsuario(dataFormulario)
        }
        handleReset()
    }

    const handleReset = () => {
        setDataFormulario(dataFormularioInicial)
        setUsuarioAEditar(null)
    }

    return (
        <>
            <h2 className="text-2xl text-gray-300 font-semibold my-4">
                Formulario de {usuarioAEditar ? 'edición' : 'carga'} de usuarios
            </h2>

            <div className="max-w-lg mb-4">
                <form
                    onSubmit={handleSubmit}
                    className="bg-[#6732A1]/40 border border-white/10 rounded-lg p-6">

                    {/* NOMBRE */}
                    <label htmlFor="lbl-nombre" className="block mb-2 text-sm font-medium text-gray-200">
                        Nombre
                    </label>
                    <input
                        type="text"
                        id="lbl-nombre"
                        placeholder="Ingresa el nombre del usuario"
                        className="w-full p-2 mb-4 border rounded-lg foucs:outline-none focus:ring-2 focus:ring-blue-500"
                        name="nombre"
                        onChange={handleChange}
                        value={dataFormulario.nombre} />

                    {/* APELLIDO */}
                    <label htmlFor="lbl-apellido" className="block mb-2 text-sm font-medium text-gray-200">
                        Apellido
                    </label>
                    <input
                        type="text"
                        id="lbl-apellido"
                        placeholder="Ingresa el apellido del usuario"
                        className="w-full p-2 mb-4 border rounded-lg foucs:outline-none focus:ring-2 focus:ring-blue-500"
                        name="apellido"
                        onChange={handleChange}
                        value={dataFormulario.apellido} />

                    {/* EDAD */}
                    <label htmlFor="lbl-edad" className="block mb-2 text-sm font-medium text-gray-200">
                        Edad
                    </label>
                    <input
                        type="text"
                        id="lbl-edad"
                        placeholder="Ingresa la edad del usuario"
                        className="w-full p-2 mb-4 border rounded-lg foucs:outline-none focus:ring-2 focus:ring-blue-500"
                        name="edad"
                        onChange={handleChange}
                        value={dataFormulario.edad} />

                    {/* PUESTO */}
                    <label htmlFor="lbl-puesto" className="block mb-2 text-sm font-medium text-gray-200">
                        Puesto
                    </label>
                    <input
                        type="text"
                        id="lbl-puesto"
                        placeholder="Ingresa el puesto del usuario"
                        className="w-full p-2 mb-4 border rounded-lg foucs:outline-none focus:ring-2 focus:ring-blue-500"
                        name="puesto"
                        onChange={handleChange}
                        value={dataFormulario.puesto} />

                    {/* FOTO */}
                    <label htmlFor="lbl-foto" className="block mb-2 text-sm font-medium text-gray-200">
                        Foto
                    </label>
                    <input
                        type="text"
                        id="lbl-foto"
                        placeholder="Ingresa la foto del usuario"
                        className="w-full p-2 mb-4 border rounded-lg foucs:outline-none focus:ring-2 focus:ring-blue-500"
                        name="foto"
                        onChange={handleChange}
                        value={dataFormulario.foto} />

                    <div className="flex justify-between">
                        <button
                            type="submit"
                            className={`px-4 py-2 ${usuarioAEditar ? 'bg-yellow-300' : 'bg-green-400'} bg-green-400 text-white rounded-lg ${usuarioAEditar ? 'hover:bg-yellow-700' : 'hover:bg-green-700'} cursor-pointer`}>
                            {usuarioAEditar ? 'Editar' : 'Crear'}
                        </button>
                        <button
                            type="reset"
                            className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 cursor-pointer"
                            onClick={handleReset}
                        >Resetear
                        </button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Formulario