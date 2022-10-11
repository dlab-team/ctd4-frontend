const axios = require('axios').default;

export const loginService = (values, setResponseFromBack, setLoading) => {
    let url = 'http://localhost:3000/login/';
    setTimeout(() => {
      
      axios
        .post(url, {
          email: values.email,
          password: values.password,
        })
        .then(function (response) {
          if (response.data) {
              window.localStorage.setItem("user", JSON.stringify(response.data));
              setLoading(false)
              window.location.reload();
          }
        })
        .catch(function (error) {
          setLoading(false)
          setResponseFromBack(error.response.data.message);
        });
        
    }, 1500);
  }
