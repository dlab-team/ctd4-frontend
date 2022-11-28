const axios = require('axios').default;

export const loginServicePassword = (values, setResponseFromBack, setLoading) => {
  let url = process.env.REACT_APP_BACKEND_URL + '/recovery-password/';
  setTimeout(() => {
    axios
      .post(url, {
        email: values.email,
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
  }, 3000);
};
