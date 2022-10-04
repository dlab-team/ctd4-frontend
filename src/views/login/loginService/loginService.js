const axios = require('axios').default;

export const loginService = (credentials, authFail, setLoader) => {

	return axios
        .post("http://localhost:3000/login/", credentials, {'Content-Type': 'application/json'})
        .then((response) => {
            window.localStorage.setItem("user", JSON.stringify(response.data));
            setLoader(false);
        })
        .catch((error) => {
            setLoader(false);
            authFail(error.message)
        })
}