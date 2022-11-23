import React from 'react';
import { Footer } from '../../components/Footer';
import NavPerfil from '../../components/perfil/NavPerfil';
import Sidebar from '../../components/Sidebar/Sidebar';
import javascriptLogo from '../../assets/images/javascript-logo.png';
import htmlLogo from '../../assets/images/htmlLogo.png';
import androidLogo from '../../assets/images/androidLogo.png';
import azureLogo from '../../assets/images/azureLogo.png';

import Profile from '../../assets/images/Profile.jpg';
import axios from 'axios';
import { useState, useEffect } from 'react';

const pencil = (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 24 24'
    strokeWidth={1.5}
    stroke='currentColor'
    className='w-6 h-6'
  >
    <path
      strokeLinecap='round'
      strokeLinejoin='round'
      d='M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125'
    />
  </svg>
);
const upload = (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 24 24'
    strokeWidth={1.5}
    stroke='currentColor'
    className='w-6 h-6'
  >
    <path
      strokeLinecap='round'
      strokeLinejoin='round'
      d='M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5'
    />
  </svg>
);
const mail = (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 24 24'
    strokeWidth={1.5}
    stroke='currentColor'
    className='w-6 h-6'
  >
    <path
      strokeLinecap='round'
      strokeLinejoin='round'
      d='M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75'
    />
  </svg>
);
const phone = (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='none'
    viewBox='0 0 24 24'
    strokeWidth={1.5}
    stroke='currentColor'
    className='w-6 h-6'
  >
    <path
      strokeLinecap='round'
      strokeLinejoin='round'
      d='M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z'
    />
  </svg>
);

export const EditarPerfil = () => {
  const userToken = JSON.parse(localStorage.getItem('user'));

  const [user, setUser] = useState([]);

  useEffect(() => {
    axios
      .get(process.env.REACT_APP_BACKEND_URL + '/user/', {
        headers: {
          'Content-Type': 'Application/json',
          Authorization: `Bearer ${userToken.token}`,
        },
      })
      .then((res) => {
        const datos = res.data;
        setUser(datos);
      });
  }, []);

  return (
    <div>
      {' '}
      <div className='flex flex-col'>
        <NavPerfil />
        <div className='flex'>
          <Sidebar />
          {/* <div className='content min-h-screen ml-28 mr-20'>
            <input
              type='text'
              className=' bg-[#E2F2FE] border border-zinc-300 mt-4 w-[36rem] h-[2.8rem] rounded-lg p-4'
              placeholder='Buscar habilidades'
            />
          </div> */}
          <div>
            <div className='flex justify-center md:justify-between border-b-2 border-[#817E7E] py-6 '>
              <div className='flex'>
                <input
                  id='icon-button-file'
                  type='file'
                  style={{ display: 'none' }}
                />
                <label htmlFor='icon-button-file'>
                  <button component='span'>{upload}</button>
                </label>
                <p className='ml-3'>Sube tu CV</p>
              </div>
              <button className=''>{pencil}</button>
            </div>

            <div className='flex justify-center md:justify-between py-4'>
              <div className='flex my-4'>
                <img
                  className='w-14 h-14 inline object-cover rounded-full'
                  src={Profile}
                  alt=''
                />
                <div className='ml-5'>
                  <h3 className='font-semibold'>{user.name}</h3>
                  <p className='pt-3'>País</p>
                </div>
              </div>
              <button>{pencil}</button>
            </div>
            <div className='flex-wrap justify-center md:flex  md:justify-between  border-b-2 border-[#817E7E] py-3'>
              <div className='flex-wrap flex md:'>
                {mail}
                <span>{user.email}</span>
              </div>
              <div className='flex'>
                {phone}
                <span>+569 99999999</span>
              </div>
              <div className='flex'></div>
              <button>Github</button>
              <button>Linkedin</button>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};
