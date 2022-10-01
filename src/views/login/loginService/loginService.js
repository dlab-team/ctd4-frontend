const axios = require('axios').default;

export const loginService = (credentials, authFail) => {

	return axios
        .post("www.hola.com/post", credentials)
        .then((response) => {
            window.localStorage.setItem("user", JSON.stringify(response.data));
        })
        .catch((error) => {
            authFail("error")
        })
}