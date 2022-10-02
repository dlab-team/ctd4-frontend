import {useState, useCallback} from 'react';
import {LoginUI} from './LoginUI';
import {loginService} from './loginService/loginService'
import { Navigate } from "react-router-dom";
import {useLoggedUser} from './../../contexts/auth/LoggedUser'
import './css/loginFail.css'


export const Login = () => {

    const {loggedUser} = useLoggedUser()

    const [credentialsUser, setCredentialsUser] = useState({email: null, password: null});
    const [loginFail, setLoginFail] = useState(null);


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
            {!loggedUser ? 
                <LoginUI functions={functions}/>
            :

                <Navigate to="/" replace={true} />
            }
            {loginFail &&
                <div className="loginFail">
                    <div className="messageFail">
                        <p>{loginFail}</p>
                        <button onClick={() => setLoginFail(null)}>volver a intentarlo</button>
                    </div>
                </div>
            }
        </>
    )
}