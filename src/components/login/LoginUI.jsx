export const LoginUI = ({functions}) => {
    return(
        <div id="containerLogin">
            <form>
                <div className="text-input-container">
                    <input type="text" placeholder="email" autoComplete="off" id="email" className="text-input" />
                    <label htmlFor="email" className="label">Email</label>
                    <p className="validation" id="validationEmail">aviso de validacion</p>
                </div>
                <div className="text-input-container" id="containerPassword">
                    <input type="password" placeholder="contraseña" id="password" className="text-input" />
                    <label htmlFor="password" className="label">Contraseña</label>
                    <p className="validation" id="validationPassword">aviso de validacion</p>
                    <p id="forgotPass" onClick={functions.showForgotPassword}> Olvidé la contraseña </p>
                </div>
                <div className="text-input-container">
                    <input type="submit" value="Entrar"  />
                </div>
            </form>
        </div>
    )
}