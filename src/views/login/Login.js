import {useState} from 'react';
import {LoginUI} from './LoginUI';
import {loginService} from './loginService/loginService'
import { Navigate } from "react-router-dom";
import {useLoggedUser} from './../../contexts/auth/LoggedUser'
import {ShowResponseFromBack, Loading} from '../../components/Alerts'
import {FormLogupLogin} from './../../components/FormLogupLogin'

export const Login = () => {

    const {loggedUser} = useLoggedUser()

    const [credentialsUser, setCredentialsUser] = useState({email: null, password: null});
    const [responseFromBack, setResponseFromBack] = useState(null);
    const [loading, setLoading] = useState(false);

    const getDataInputs = (e) => {
        if(e.target.id === "email"){
            setCredentialsUser({...credentialsUser, email: e.target.value})
        }
        if(e.target.id === "password"){
            setCredentialsUser({...credentialsUser, password: e.target.value})
        }        
    }

    const formRequest = (e) => {
        e.preventDefault()
        setLoading(true);
        loginService(credentialsUser, setResponseFromBack, setLoading);
    }

    return(
        <>
            {!loggedUser ? 
                <LoginUI>
                    <FormLogupLogin request={formRequest} getDataForm={getDataInputs} />
                </LoginUI>
            :
                <Navigate to="/" replace={true} />
            }

            {responseFromBack &&
                <ShowResponseFromBack>
                    <p>{responseFromBack}</p>
                    <button onClick={() => setResponseFromBack(false)}>Entendido!</button>
                </ShowResponseFromBack>
            }

            {loading &&
                <Loading />
            }
        </>
    )
}