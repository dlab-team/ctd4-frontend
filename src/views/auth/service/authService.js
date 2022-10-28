const axios = require('axios').default;

export const authService = (values, setResponseFromBack, setLoading) => {
    let url = 'http://localhost:3000/login/';
    setTimeout(() => {
      axios
        .post(url, {
          email: values.email,
          password: values.password,
        })
        .then(function (response){
            window.localStorage.setItem("user", JSON.stringify(response.data));
            setLoading(false)
            window.location.reload();
        })
        .catch(function (error) {
          setLoading(false)
          setResponseFromBack(error);
        });    
    }, 1500);
  }
