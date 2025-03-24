const { createContext } = require("react");

const UserContext = createContext()

const UsersProvider = ( {children }) => {

    const data = {

    }

    return <UserContext.Provider value={data}> {children}</UserContext.Provider>
}

export {UsersProvider}
export default UserContext