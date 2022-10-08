const axios = require('axios').default;

export const loginService = (credentials, setResponseFromBack, setLoading) => {

        setTimeout(() => {
            return axios
            .post("http://localhost:3000/login/", credentials, {'Content-Type': 'application/json'})
            .then((response) => {
                window.localStorage.setItem("user", JSON.stringify(response.data));
                setLoading(false)
                window.location.reload();
            })
            .catch((error) => {
                setLoading(false)
                setResponseFromBack(error.message);
            })
        }, 1500);
        
}