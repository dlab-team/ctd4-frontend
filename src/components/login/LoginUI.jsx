import {showForgotPassword} from './animations/animations';

export const LoginUI = ({functions, states}) => {
    return(
        <div id="containerLogin">
            <form onSubmit={functions.getAuthentication}>
                <div className="text-input-container">
                    <input type="text" placeholder="email" autoComplete="off" id="email" className="text-input" onChange={e => functions.getDataLogin(e)} onBlur={e => functions.formValidations(e)}/>
                    <label htmlFor="email" className="label">Email</label>
                    <p className="validation" id="validationEmail">{states.validations.email && states.validations.email}</p>
                </div>
                <div className="text-input-container" id="containerPassword">
                    <input type="password" placeholder="contraseña" id="password" className="text-input" onChange={e => functions.getDataLogin(e)} />
                    <label htmlFor="password" className="label">Contraseña</label>
                    <p className="validation" id="validationPassword">aviso de validacion</p>
                    <p id="forgotPass" onClick={showForgotPassword}> Olvidé la contraseña </p>
                </div>
                <div className="text-input-container">
                    <input type="submit" value="Entrar"  />
                </div>
            </form>
        </div>
    )
}