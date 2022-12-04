const axios = require('axios').default;

export const loginService = (values, setResponseFromBack, setLoading) => {
  let url2 = 'http://localhost:3000/login/';
  let url = process.env.REACT_APP_BACKEND_URL + '/login/';
  setTimeout(() => {
    axios
      .post(url2, {
        email: values.email,
        password: values.password,
      })
      .then(function (response) {
        if (response.data) {
          window.localStorage.setItem('user', JSON.stringify(response.data));
          setLoading(false);
          window.location.reload();
        }
      })
      .catch(function (error) {
        setLoading(false);
        setResponseFromBack(error.response.data.message);
      });
  }, 1500);
};
