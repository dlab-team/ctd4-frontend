import {useState, useContext} from 'react';
import {LoginUI} from './LoginUI';
import {loginService} from './loginService/loginService'
import {FormSocialNetworks} from "./FormSocialNetwork"
import { Navigate } from "react-router-dom";
import {ShowResponseFromBack, Loading} from '../../components/Alerts'
import {FormLogin} from './FormLogin'
import { LoggedUser } from '../../contexts/auth/LoggedUser';

export const Login = () => {

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
                    title={"Únete a Devsafío"}
                    textAnimated={"Crea tu cuenta profesional en Devsafío para que seas parte de distintas ofertas laborales que tenemos junto a importantes empresas en latinoamérica"}
                >
                    <div className="w-full">
                        <FormLogin request={formRequest} />
                        <FormSocialNetworks />
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