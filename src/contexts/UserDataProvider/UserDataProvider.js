import React from 'react';
import { createContext, useState } from 'react';

export const UserDataContext = createContext();

const UserDataProvider = (props) => {
  const [user, setUser] = useState({});
  const userToken = JSON.parse(localStorage.getItem('user'));
  let url = process.env.REACT_APP_BACKEND_URL + '/user';

  const getUserData = () => {
    fetch(url, {
      headers: {
        'Content-Type': 'Application/json',
        Authorization: `Bearer ${userToken.token}`,
      },
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (myJson) {
        console.log(myJson);
      });
  };

  return (
    <UserDataContext.Provider value={{ user, setUser }}>
      {props.children}
    </UserDataContext.Provider>
  );
};

export default UserDataProvider;
