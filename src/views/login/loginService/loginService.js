const axios = require('axios').default;

export const loginService = (credentials, authFail) => {
	return axios
        .post("http://localhost:3000/auth", credentials, {'Content-Type': 'application/json'})
        .then((response) => {
            console.log(response)
            window.localStorage.setItem("user", JSON.stringify(response.data));

        })
        .catch((error) => {
            authFail(error.message)
        })
}