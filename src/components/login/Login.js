import {useState} from 'react';
import './css/form.css'
import './css/forgotPassword.css'
import {LoginUI} from './LoginUI';
import { ForgotPasswordUI } from './ForgotPasswordUI';
import {authService} from './services/authService'

export const Login = () => {

    const [credentialsUser, setCredentialsUser] = useState({email: null, password: null});

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
    
    const showForgotPassword = () => {
        document.getElementById("containerLogin").style.animationName = "outLogin";
        document.getElementById("containerForgotPassword").style.animationName = "inForgotPassword";
    }

    const showLogin = () => {
        document.getElementById("containerLogin").style.animationName = "inLogin";
        document.getElementById("containerForgotPassword").style.animationName = "outForgotPassword";
    }

    const functions = {
        showForgotPassword,
        showLogin,
        getDataLogin,
        getAuthentication
    }

    return(
        <>
            <LoginUI functions={functions} />
            <ForgotPasswordUI functions={functions} />
        </>
    )
}