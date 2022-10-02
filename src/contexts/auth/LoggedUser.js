import {createContext, useCallback, useContext, useState} from 'react';

const LoggedUser = createContext();

export const LoggedUserProvider = ({children}) => {

    const [loggedUser, setLoggedUser] = useState(
        window.localStorage.getItem("user") ?? false
    );

    return(
        <LoggedUser.Provider value={{loggedUser}}>
            {children}
        </LoggedUser.Provider>
    )
        
}

//hook para consumir el estado que identifica al usuario
export const useLoggedUser = () => {
    return useContext(LoggedUser)
}