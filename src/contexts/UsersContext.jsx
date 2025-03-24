import { createContext, useState } from "react"


const UsersContext = createContext()

const UsersProvider = ( {children }) => {

    const [users, setUsers] = useState([])

    const data = {
        users
    }

    return <UsersContext.Provider value={data}> {children}</UsersContext.Provider>
}

export {UsersProvider}
export default UsersContext