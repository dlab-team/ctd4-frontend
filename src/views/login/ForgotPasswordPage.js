import {useState, useContext} from 'react';
import {LoginUI} from './LoginUI';
import {loginServicePassword} from './loginService/loginServicePassword'
import { Navigate } from "react-router-dom";
import {ShowResponseFromBack, Loading} from '../../components/Alerts'
import { FormForgotPasswordPage } from './FormForgotPasswordPage';
import { LoggedUser } from '../../contexts/auth/LoggedUser';

export const ForgotPasswordPage = () => {

    const [responseFromBack, setResponseFromBack] = useState(null);
    const [loading, setLoading] = useState(false);
    const {user} = useContext(LoggedUser);
    

    const formRequest = (values) => {
        setLoading(true);
        loginServicePassword(values, setResponseFromBack, setLoading);
    }

    return(
        <>
            {!user ? 
                <LoginUI 
                    title={"Necesitas ayuda con tu contraseña?"}
                    textAnimated={"Ingresa el correo que utilizas para Devsafio, y te ayudaremos a crear una nueva contraseña"}
                >
                    <div className="w-full">
                        <FormForgotPasswordPage request={formRequest} />
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