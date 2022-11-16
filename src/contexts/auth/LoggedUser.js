import {createContext, useState} from 'react';

export const LoggedUser = createContext();

export const LoggedUserProvider = ({children}) => {

    const [user] = useState(
        JSON.parse(localStorage.getItem("user")) ?? false
    );

    return(
        <LoggedUser.Provider value={{user}}>
            {children}
        </LoggedUser.Provider>
    )
}
