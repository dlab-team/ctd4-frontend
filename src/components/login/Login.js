import './css/form.css'
import './css/forgotPassword.css'
import {LoginUI} from './LoginUI';
import { ForgotPasswordUI } from './ForgotPasswordUI';

export const Login = () => {
    
    
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
        showLogin
    }

    return(
        <>
            <LoginUI functions={functions} />
            <ForgotPasswordUI functions={functions} />
        </>
    )
}