import { useNavigate } from "react-router-dom";
import {useState} from 'react'
import {AuthUI} from './AuthUI'
import {FormLoginUI} from './forms/FormLoginUI'
import {FormLogupUI} from './forms/FormLogupUI'
import {authService} from './service/authService'
import {Loading, ShowResponseFromBack} from './../../components/Alerts'

export const Auth = ({loginOrLogup}) => {

    const [responseFromBack, setResponseFromBack] = useState(null);
    const [loading, setLoading] = useState(false);

    const request = (values) => {
        setLoading(true);
        authService(values, setResponseFromBack, setLoading)
    }
    return(
        <>
            {loginOrLogup === "login" &&
                <AuthUI 
                    title={"Únete a Devsafío"}
                    textAnimated={"Crea tu cuenta profesional en Devsafío para que seas parte de distintas ofertas laborales que tenemos junto a importantes empresas en latinoamérica"}
                >
                    <FormLoginUI request={request} />
                </AuthUI>
            }

            {loginOrLogup === "logup" &&
                <AuthUI 
                    title={"Registrate"}
                    textAnimated={""}
                >
                    <FormLogupUI />
                </AuthUI>
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