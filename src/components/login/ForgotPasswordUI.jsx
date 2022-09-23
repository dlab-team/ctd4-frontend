export const ForgotPasswordUI = ({functions}) => {
    return(
        <div id="containerForgotPassword">
            <form>
                <div className="forgot-input-container" id="containerPassword">
                <p>Ingrese su correo para restablecer su contraseña</p>
                </div>
                <div className="forgot-input-container">
                    <input type="text" placeholder="email" autoComplete="off" className="text-input" />
                    <label htmlFor="email" className="label">Email</label>
                    <p className="validation" id="validationEmail">aviso de validacion</p>
                </div>
                <div className="forgot-input-container">
                    <input type="submit" value="Enviar email"  />
                </div>
            </form>
            <p id="outLogin" onClick={functions.showLogin}>volver al login</p>
        </div>
    )
}