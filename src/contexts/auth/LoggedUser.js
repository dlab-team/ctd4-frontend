import {createContext, useContext, useState} from 'react';

const LoggedUser = createContext();

export const LoggedUserProvider = ({children}) => {

    const [loggedUser, setLoggedUser] = useState(
        JSON.parse(localStorage.getItem("user")) ?? false
    );

    const [loader, setLoader] = useState(false);

    return(
        <LoggedUser.Provider value={{loggedUser, loader, setLoader}}>
            {children}
        </LoggedUser.Provider>
    )
}

//hook para consumir el estado con los datos del usuario
export const useLoggedUser = () => {
    return useContext(LoggedUser)
}