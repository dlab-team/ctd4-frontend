const axios = require('axios').default;

export const loginService = (credentials, authFail, setLoader) => {

    setTimeout(() => {
        return axios
        .post("http://localhost:3000/login/", credentials, {'Content-Type': 'application/json'})
        .then((response) => {
            window.localStorage.setItem("user", JSON.stringify(response.data));
            setLoader(false);
            window.location.reload();
        })
        .catch((error) => {
            setLoader(false);
            authFail(error.message);
        })
    }, 1000);

}