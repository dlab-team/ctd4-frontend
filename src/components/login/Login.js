import {useState} from 'react';
import './css/form.css'
import './css/forgotPassword.css'
import {LoginUI} from './LoginUI';
import { ForgotPasswordUI } from './ForgotPasswordUI';
import {authService} from './services/authService'
import {validationEmail} from './validations/validations'

export const Login = () => {

    const [credentialsUser, setCredentialsUser] = useState({email: null, password: null});
    const [validations, setValidations] = useState({email: null, password: null});

    const formValidations = (e) => {
        if(e.target.id === "email"){
            if(validationEmail(credentialsUser.email)){
                setValidations({...validations, email: "email valido"})
            } else {
                setValidations({...validations, email: "email no valido"})
            }
        }
    }

    const getDataLogin = (e) => {
        if(e.target.id === "email"){
            setCredentialsUser({...credentialsUser, email: e.target.value})
        }
        if(e.target.id === "password"){
            setCredentialsUser({...credentialsUser, password: e.target.value})
        }        
    }

    const getAuthentication = () => {
        authService(credentialsUser, "endpoint")
    }

    const functions = {
        getDataLogin,
        getAuthentication,
        formValidations
    }

    const states = {
        validations
    }

    return(
        <>
            <LoginUI functions={functions} states={states} />
            <ForgotPasswordUI />
        </>
    )
}