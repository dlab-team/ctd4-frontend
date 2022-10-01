import {useState} from 'react';
import {LoginUI} from './LoginUI';
import {loginService} from './loginService/loginService'
import { Navigate } from "react-router-dom";

export const Login = () => {

    const [credentialsUser, setCredentialsUser] = useState({email: null, password: null});
    const [loginFail, setLoginFail] = useState(null)

    const getDataFormLogin = (e) => {
        if(e.target.id === "email"){
            setCredentialsUser({...credentialsUser, email: e.target.value})
        }
        if(e.target.id === "password"){
            setCredentialsUser({...credentialsUser, password: e.target.value})
        }        
    }

    const getAuthenticationFromBack = (e) => {
        e.preventDefault()
        loginService(credentialsUser, setLoginFail)
    }

    const functions = {
        getDataFormLogin,
        getAuthenticationFromBack
    }

    return(
        <>
            {!loginFail ? 
                <LoginUI functions={functions}/>
            :
                <Navigate to="/" replace={true} />
            }
        </>
    )
}