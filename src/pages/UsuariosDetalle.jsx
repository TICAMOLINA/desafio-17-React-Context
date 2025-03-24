import { useEffect, useState } from "react"
import { useParams } from "react-router"
import Spinner from "../components/Spinner"


const UsuariosDetalle = () => {

    const { id } = useParams()

    const [usuarioDetalle, setUsuarioDetalle] = useState(null)

    useEffect(() => {
        getOne(id)
    }, [])

    const getOne = async (id) => {
        const urlGetOne = import.meta.env.VITE_BACKEND + id

        try {
            const res = await fetch(urlGetOne)

            if (!res.ok) {
                throw new Error('No se pudo hacer la petición')
            }
            const data = await res.json()
            setUsuarioDetalle(data)

        } catch (error) {
            console.error(error.message)
        }
    }

    return (
        <>
            <h1 className="text-2xl my-10">Detalles de usuario:</h1>
            {
                usuarioDetalle ?
                    (
                        <>
                            <h2 className="text-xl">Nombre y apellido: {usuarioDetalle.nombre} {usuarioDetalle.apellido}.</h2>
                            <p className="mt-3">Edad: {usuarioDetalle.edad} años.</p>
                            <p className="mt-3">El mismo se desempeña como {usuarioDetalle.puesto}.</p>
                            <img className="mt-5"
                            src={usuarioDetalle.foto} alt={usuarioDetalle.nombre} style={{ width: '350px' }} />
                        </>

                    ) :
                    (
                        <Spinner />
                    )
            }

        </>

    )
}

export default UsuariosDetalle