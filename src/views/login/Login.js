import {useState} from 'react';
import {LoginUI} from './LoginUI';
import {loginService} from './loginService/loginService'
import { Navigate } from "react-router-dom";
import {useLoggedUser} from './../../contexts/auth/LoggedUser'
import {ShowResponseFromBack, Loading} from '../../components/Alerts'
import {FormLogin} from './FormLogin'

export const Login = () => {

    const {loggedUser} = useLoggedUser()

    const [responseFromBack, setResponseFromBack] = useState(null);
    const [loading, setLoading] = useState(false);

    const formRequest = (values) => {
        setLoading(true);
        loginService(values, setResponseFromBack, setLoading);
    }

    return(
        <>
            {!loggedUser ? 
                <LoginUI>
                    <FormLogin request={formRequest} />
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