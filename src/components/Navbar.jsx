import { Link, NavLink } from "react-router"

const Navbar = () => {
  return (
    <nav className="bg-violet-900 p-4">
        <div className="container mx-auto flex justify-between items-center">
            <Link to="/" className="text-gray-200 text-lg font-bold">Desafío nº 16</Link>
            <ul className="flex space-x-4">
                <li><NavLink to="/" className="text-black hover:text-gray-200">Inicio</NavLink></li>
                <li><NavLink to="/crudusuarios" className="text-black hover:text-gray-200">Usuarios</NavLink></li>
                <li><NavLink to="/nosotros" className="text-black hover:text-gray-200">Nosotros</NavLink></li>
                <li><NavLink to="/contacto" className="text-black hover:text-gray-200">Contacto</NavLink></li>
            </ul>
        </div>
    
    </nav>
  )
}

export default Navbar