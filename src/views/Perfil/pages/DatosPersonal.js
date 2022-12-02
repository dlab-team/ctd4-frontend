import React from 'react';
// import { Header } from '../../components/Header';
import { Footer } from '../../../components/Footer';
import NavPerfil from '../../../components/perfil/NavPerfil';
import Bienvenido from '../../../components/perfil/Bienvenido';
import Sidebar from '../../../components/Sidebar/Sidebar';
import Profile from '../../../assets/images/Profile.jpg';
import axios from 'axios';
import { useState, useEffect } from 'react';

//import ListBox1 from '../../../components/ListBox1';

const DatosPersonal = () => {
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
  const book = (
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
        d='M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25'
      />
    </svg>
  );
  const calendar = (
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
        d='M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5'
      />
    </svg>
  );

  const profile = (
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
        d='M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z'
      />
    </svg>
  );
  const trash = (
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
        d='M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0'
      />
    </svg>
  );

  const userToken = JSON.parse(localStorage.getItem('user'));

  const [user, setUser] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:3000/user/', {
        headers: {
          'Content-Type': 'Application/json',
          Authorization: `Bearer ${userToken.token}`,
        },
      })
      .then((res) => {
        const datos = res.data;
        setUser(datos);
        console.log(datos);
      });
  }, []);

  return (
    <>
      {/* <Header /> */}

      <NavPerfil />

      {/* sidebar */}

      <div className='flex'>
        <Sidebar />

        <div className='container mt-10 px-3 md:px-12'>
          <div className='row'>
            <div className='flex justify-center md:justify-start'>
              <Bienvenido />
            </div>

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

            <div className='flex-wrap md:flex md:justify-between border-b-2 border-[#817E7E] py-10 '>
              <div className='flex'>
                {book}
                <p className='ml-3 text-lg'>Experiencia laboral</p>
              </div>
              <div className='flex'>
                <div className='mr-14'>
                  <p className='font-semibold text-start md:text-right'>
                    1 a 3 años de experiencia
                  </p>
                  <p>Nivel ingés avanzado</p>
                </div>
                <button>{pencil}</button>
              </div>
            </div>

            <div className='flex-wrap md:flex md:justify-between border-b-2 border-[#817E7E] py-10 '>
              <div className='flex'>
                {calendar}
                <p className='ml-3 text-lg'>Disponibilidad</p>
              </div>
              <div className='flex'>
                <div className='mr-14'>
                  <p className='font-semibold text-start md:text-right'>
                    Full time
                  </p>
                  <p>Disponibilidad inmediata</p>
                </div>
                <button>{pencil}</button>
              </div>
            </div>

            <div className='flex-wrap md:flex md:justify-between border-b-2 border-[#817E7E] py-10'>
              <div className='flex'>
                {profile}
                <p className='ml-3 text-lg'>Rol y salario actual</p>
              </div>
              <div className='flex'>
                <div className='mr-14'>
                  <p className='font-semibold text-start md:text-right'>
                    Full stack
                  </p>
                  <p>Salario actual 1.000.000 clp</p>
                </div>
                <button>{pencil}</button>
              </div>
            </div>

            <div className='flex justify-center  md:justify-between py-6 '>
              <div className='flex'>
                <p className='ml-3 text-xl font-medium'>Habilidades</p>
              </div>
              <button>{pencil}</button>
            </div>
            <div className='border-b-2 border-[#817E7E] py-6 ml-3'>
              <div className='flex my-5'>
                Avanzado
                <div>
                  <span className='mx-10 border py-1 px-1 border-sky-700 rounded-md'>
                    HTML
                  </span>
                </div>
              </div>

              <div className='flex my-5'>
                Experimentado
                <div>
                  <span className='mx-10 border py-1 px-1 border-sky-700 rounded-md'>
                    CSS
                  </span>
                  <span className='mx-10 border py-1 px-1 border-sky-700 rounded-md'>
                    JavaScript
                  </span>
                </div>
              </div>

              <div className='flex my-5'>
                Principiante
                <span className='mx-10 border py-1 px-1 border-sky-700 rounded-md'>
                  Angular
                </span>
              </div>
            </div>

            <div className='flex justify-center md:justify-between py-6 '>
              <p className='ml-3 text-xl font-medium'>Educación</p>
            </div>

            <div className='flex  md:justify-between py'>
              <div className='flex my-4'>
                <div className='ml-5'>
                  <p className='mb-2 text-[#2738F5] text-sm'>
                    Mar 2021 - Mar 2022
                  </p>
                  <h3 className='text-xl font-medium mb-2'>Desafío Latam</h3>
                  <p className='mb-2 text-[#2738F5] text-sm'>
                    Full Stack Developer
                  </p>
                </div>
              </div>
              <div className='my-5'>
                <button>{pencil}</button>
                <button className='px-3'>{trash}</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default DatosPersonal;
