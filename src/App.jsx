import { useState } from "react"
import Formulario from "./components/Formulario"
import UserList from "./components/UserList"

const App = () => {

  return (
    <>
        <h1 className="text-gray-300 text-4xl my-5">CRUD Usuarios</h1>
        <hr />
        <Formulario />
        <UserList />
    </>
  )
}

export default App


