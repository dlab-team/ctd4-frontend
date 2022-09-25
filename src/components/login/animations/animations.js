export const showForgotPassword = () => {
    document.getElementById("containerLogin").style.animationName = "outLogin";
    document.getElementById("containerForgotPassword").style.animationName = "inForgotPassword";
}

export const showLogin = () => {
    document.getElementById("containerLogin").style.animationName = "inLogin";
    document.getElementById("containerForgotPassword").style.animationName = "outForgotPassword";
}