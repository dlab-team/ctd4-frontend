import {useState} from 'react';
import {LoginUI} from './LoginUI';
import {loginService} from './loginService/loginService'
import { Navigate } from "react-router-dom";
import {useLoggedUser} from './../../contexts/auth/LoggedUser'
import {FailMessage, Loading} from '../../components/Alerts'

export const Login = () => {

    const {loggedUser} = useLoggedUser()

    const [credentialsUser, setCredentialsUser] = useState({email: null, password: null});
    const [loginFailMessage, setLoginFailMessage] = useState(null);
    const [loading, setLoading] = useState(false);

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
        setLoading(true);
        loginService(credentialsUser, setLoginFailMessage, setLoading);
    }

    const functions = {
        getDataFormLogin,
        getAuthenticationFromBack
    }

    return(
        <>
            {!loggedUser ? 
                <LoginUI functions={functions} />
            :
                <Navigate to="/" replace={true} />
            }

            {loginFailMessage &&
                <FailMessage close={() => setLoginFailMessage(null)}>
                    <p>{loginFailMessage}</p>
                </FailMessage>
            }

            {loading &&
                <Loading />
            }
        </>
    )
}