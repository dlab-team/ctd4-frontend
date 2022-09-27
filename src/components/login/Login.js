import {useState} from 'react';
import {LoginUI} from './LoginUI';
import {authService} from './services/authService'

export const Login = () => {

    const [credentialsUser, setCredentialsUser] = useState({email: null, password: null});


    const getDataLogin = (e) => {
        if(e.target.id === "email"){
            setCredentialsUser({...credentialsUser, email: e.target.value})
        }
        if(e.target.id === "password"){
            setCredentialsUser({...credentialsUser, password: e.target.value})
        }        
    }

    const getAuthentication = () => {
        authService(credentialsUser, "endpoint")
    }

    return(
        <>
            <LoginUI />
        </>
    )
}