import React from 'react';
// import { Header } from '../../components/Header';
import { Footer } from '../../../components/Footer';
import NavPerfil from '../../../components/perfil/NavPerfil';
import Bienvenido from '../../../components/perfil/Bienvenido';
import Sidebar from '../../../components/Sidebar/Sidebar';
import Profile from '../../../assets/images/Profile.jpg';
import { EditarDatosPersonalesModal } from '../modal/EditarDatosPersonalesModal';
import { FormularioDatosPersonales } from '../modal/FormularioDatosPersonales';
import axios from 'axios';
import { useState, useEffect } from 'react';

import {
  pencil,
  trash,
  upload,
  mail,
  phone,
  book,
  calendar,
  profile,
} from '../../../assets/svgs/iconos';

const DatosPersonal = () => {
  const userToken = JSON.parse(localStorage.getItem('user'));

  const [auxUser, setAuxUser] = useState('');

  const [user, setUser] = useState({});
  const [showModal, setShowModal] = useState(false);
  let url = process.env.REACT_APP_BACKEND_URL + '/user';

  useEffect(() => {
    axios
      .get(url, {
        headers: {
          'Content-Type': 'Application/json',
          Authorization: `Bearer ${userToken.token}`,
        },
      })
      .then((res) => {
        const datos = res.data;
        setUser(datos);
      });
  }, [auxUser]);

  console.log(user);
  console.log(auxUser);

  return (
    <>
      <EditarDatosPersonalesModal
        isVisible={showModal}
        onClose={() => setShowModal(false)}
      >
        <FormularioDatosPersonales
          user={user}
          setShowModal={setShowModal}
          setUser={setUser}
          setAuxUser={setAuxUser}
        />
      </EditarDatosPersonalesModal>

      {/* <Header /> */}

      <NavPerfil />

      {/* sidebar */}

      <div className="flex mb-6">
        <Sidebar />

        <div className="container mt-10 px-3 md:px-12 place-content-center justify-center">
          <div className="row">
            <div className="flex justify-center md:justify-start">
              <Bienvenido />
            </div>

            <div>
              <div className="flex justify-center md:justify-between border-b-2 border-[#817E7E] py-6 ">
                <div className="flex">
                  <input
                    id="icon-button-file"
                    type="file"
                    style={{ display: 'none' }}
                  />
                  <label htmlFor="icon-button-file">
                    <button component="span">{upload}</button>
                  </label>
                  <p className="ml-3">Sube tu CV</p>
                </div>
                <button className="">{pencil}</button>
              </div>

              <div className="flex justify-center md:justify-between py-4">
                <div className="flex my-4">
                  <img
                    className="w-14 h-14 inline object-cover rounded-full"
                    src={Profile}
                    alt=""
                  />
                  <div className="ml-5">
                    <h3 className="font-semibold">{user.fullname}</h3>
                    <p className="pt-3">
                      {user.City ? user.City.Country.name : ' Pais'}
                    </p>
                  </div>
                </div>
                <button onClick={() => setShowModal(true)}>{pencil}</button>
              </div>
              <div className="flex-wrap justify-center md:flex  md:justify-between  border-b-2 border-[#817E7E] py-3">
                <div className="flex-wrap flex md:">
                  {mail}
                  <span>{user.email}</span>
                </div>
                <div className="flex">
                  {phone}
                  <span>
                    {user.phoneNumber ? user.phoneNumber : '+569 *******'}
                  </span>
                </div>
                <div className="flex"></div>

                {user.WorkProfile ? (
                  <a href={user.WorkProfile.urlGithub} target="_blank">
                    Github
                  </a>
                ) : (
                  <a href="https://github.com/" target="_blank">
                    Github
                  </a>
                )}

                {user.WorkProfile ? (
                  <a href={user.WorkProfile.urlLinkedin} target="_blank">
                    Linkedin
                  </a>
                ) : (
                  <a href="https://linkedin.com/" target="_blank">
                    Linkedin
                  </a>
                )}
              </div>
            </div>

            <div className="flex-wrap md:flex md:justify-between border-b-2 border-[#817E7E] py-10 ">
              <div className="flex">
                {book}
                <p className="ml-3 text-lg">Experiencia laboral</p>
              </div>
              <div className="flex">
                <div className="mr-14">
                  <p className="font-semibold text-start md:text-right">
                    {user.WorkProfile
                      ? `${user.WorkProfile.yearsExperience} `
                      : ' 1 a 3 '}
                    años de experiencia
                  </p>

                  {user.WorkProfile ? (
                    <p>Nivel inglés {user.WorkProfile.levelEnglish}</p>
                  ) : (
                    <p>Nivel inglés avanzado</p>
                  )}
                </div>
                <button>{pencil}</button>
              </div>
            </div>

            <div className="flex-wrap md:flex md:justify-between border-b-2 border-[#817E7E] py-10 ">
              <div className="flex">
                {calendar}
                <p className="ml-3 text-lg">Disponibilidad</p>
              </div>
              <div className="flex">
                <div className="mr-14">
                  <p className="font-semibold text-start md:text-right">
                    {user.WorkProfile
                      ? user.WorkProfile.availability
                      : 'Fulltime'}
                  </p>
                  <p>Disponibilidad inmediata</p>
                </div>
                <button>{pencil}</button>
              </div>
            </div>

            <div className="flex-wrap md:flex md:justify-between border-b-2 border-[#817E7E] py-10">
              <div className="flex">
                {profile}
                <p className="ml-3 text-lg">Rol y salario actual</p>
              </div>
              <div className="flex">
                <div className="mr-14">
                  <p className="font-semibold text-start md:text-right">
                    Full stack
                  </p>
                  <p>Salario actual 1.000.000 clp</p>
                </div>
                <button>{pencil}</button>
              </div>
            </div>

            <div className="flex justify-center  md:justify-between py-6 ">
              <div className="flex">
                <p className="ml-3 text-xl font-medium">Habilidades</p>
              </div>
              <button>{pencil}</button>
            </div>
            <div className="border-b-2 border-[#817E7E] py-6 ml-3">
              <div className="flex my-5">
                Avanzado
                <div>
                  <span className="mx-10 border py-1 px-1 border-sky-700 rounded-md">
                    HTML
                  </span>
                </div>
              </div>

              <div className="flex my-5">
                Experimentado
                <div>
                  <span className="border py-1 px-1 border-sky-700 rounded-md">
                    CSS
                  </span>
                  <span className="border py-1 px-1 border-sky-700 rounded-md">
                    JavaScript
                  </span>
                </div>
              </div>

              <div className="flex my-5">
                Principiante
                <span className="border py-1 px-1 border-sky-700 rounded-md">
                  Angular
                </span>
              </div>
            </div>

            <div className="flex justify-center md:justify-between py-6 ">
              <p className="ml-3 text-xl font-medium">Educación</p>
            </div>

            <div className="flex  md:justify-between py">
              <div className="flex my-4">
                <div className="ml-5">
                  <p className="mb-2 text-[#2738F5] text-sm">
                    Mar 2021 - Mar 2022
                  </p>
                  <h3 className="text-xl font-medium mb-2">Desafío Latam</h3>
                  <p className="mb-2 text-[#2738F5] text-sm">
                    Full Stack Developer
                  </p>
                </div>
              </div>
              <div className="my-5">
                <button>{pencil}</button>
                <button className="px-3">{trash}</button>
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
