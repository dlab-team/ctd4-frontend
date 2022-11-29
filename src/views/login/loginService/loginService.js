const axios = require('axios').default;

export const loginService = (values, setResponseFromBack, setLoading) => {
  let url = process.env.REACT_APP_BACKEND_URL + '/login/';
  setTimeout(() => {
    axios
      .post(url, {
        email: values.email,
        password: values.password,
      })
      .then(function (response) {
        if (response.data) {
         ;
        }
      })
      .catch(function (error) {
        setLoading(false);
        setResponseFromBack(error.response.data.message);
      });
  }, 1500);
};
