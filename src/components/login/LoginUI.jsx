import './css/form.css'

export const LoginUI = () => {
    return(
        <div id="container">
            <form>
                <div class="text-input-container">
                    <input type="text" placeholder="email" autocomplete="off" id="email" class="text-input" onclick="showValidationEmail()" onblur="hiddenValidationEmail()"/>
                    <label for="email" class="label">Email</label>
                    <p class="validation" id="validationEmail">aviso de validacion</p>
                </div>
                <div class="text-input-container" id="containerPassword">
                    <input type="password" placeholder="contraseña" autocomplete="off" id="password" class="text-input" onclick="showValidationPassword()" onblur="hiddenValidationPassword()" />
                    <label for="password" class="label">Contraseña</label>
                    <p class="validation" id="validationPassword">aviso de validacion</p>
                    <p id="forgotPass"> Olvidé la contraseña </p>
                </div>
                <div class="text-input-container">
                    <input type="submit" value="Entrar"  />
                </div>
            </form>
        </div>
    )
}