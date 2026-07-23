import { createContext, useState } from "react";

const UsersContext = createContext()

function Provider({ children }) {
    // privileges (0-null,1-admin, 2-mentor, 3-mentee)
    const [privileges, setPrivileges] = useState(localStorage.getItem('privilege') ? localStorage.getItem('privilege') : 0)

    const updatePrivileges = (privilege) => {
        setPrivileges(privilege)
    }

    const values = {
        privileges,
        updatePrivileges
    }

    return (
        <UsersContext.Provider value={{ values }}>
            {children}
        </UsersContext.Provider>
    )
}

export { Provider }

export default UsersContext