import {useState, useContext} from 'react';
import {LoginUI} from './LoginUI';
import {loginService} from './loginService/loginService'
import {FormSocialNetworks} from "./FormSocialNetwork"
import { Navigate } from "react-router-dom";
import {ShowResponseFromBack, Loading} from '../../components/Alerts'
import {FormNewPassword} from './FormNewPassword';
import { LoggedUser } from '../../contexts/auth/LoggedUser';

export const NewPassword = () => {

    const [responseFromBack, setResponseFromBack] = useState(null);
    const [loading, setLoading] = useState(false);
    const {user} = useContext(LoggedUser);
    

    const formRequest = (values) => {
        setLoading(true);
        loginService(values, setResponseFromBack, setLoading);
    }

    return(
        <>
            {!user ? 
                <LoginUI 
                    title={"Reestablecer Contraseña"}
                    textAnimated={"Ingresa la nueva contraseña"}
                >
                    <div className="w-full">
                        <FormNewPassword request={formRequest} />
                    </div>
                </LoginUI>
            :
                 <Navigate to="/perfil" replace={true} />
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