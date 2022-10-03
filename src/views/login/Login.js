import {useState, useCallback} from 'react';
import {LoginUI} from './LoginUI';
import {loginService} from './loginService/loginService'
import { Navigate } from "react-router-dom";
import {useLoggedUser} from './../../contexts/auth/LoggedUser'
import {Alert} from './../../components/Alert'


export const Login = () => {

    const {loggedUser} = useLoggedUser()

    const [credentialsUser, setCredentialsUser] = useState({email: null, password: null});
    const [loginFailMessage, setLoginFailMessage] = useState(null);


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
        loginService(credentialsUser, setLoginFailMessage)
    }

    const functions = {
        getDataFormLogin,
        getAuthenticationFromBack
    }

    return(
        <>
            {!loggedUser ? 
                <LoginUI functions={functions}/>
            :

                <Navigate to="/" replace={true} />
            }

            {loginFailMessage &&
                <Alert close={() => setLoginFailMessage(null)}>
                    <p>{loginFailMessage}</p>
                </Alert>
            }
        </>
    )
}