import React from 'react';
import { useParams } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';

export const FormularioDatosPersonales = ({
  user,
  setShowModal,
  setAuxUser,
}) => {
  const initialValues = {
    fullname: user.fullname,
    email: '',
    phoneNumber: '',
    linkedin: '',
    github: '',
  };

  const userToken = JSON.parse(localStorage.getItem('user'));

  const onSubmit = (values) => {
    const actualizarPerfilData = {
      headers: {
        'Content-Type': 'Application/json',
        Authorization: `Bearer ${userToken.token}`,
      },
      body: JSON.stringify({
        user: {
          email: user.email,
          fullname: values.fullname,
          phoneNumber: values.phoneNumber,

          workProfile: {
            idealJobComment: null,
            featureProyect: null,
            activeVisa: null,
            currentJobSituation: null,
            yearsExperience: 5,
            dreamJobComment: null,
            urlLinkedin: values.linkedin,
            urlGithub: values.github,
            urlWebsite: null,
            urlCv: null,
            levelEnglish: 'Ninguno',
            employmentStatus: null,
            availability: null,
            softSkills: null,
          },
        },
      }),
      method: 'PUT',
    };

    ActualizarPerfil(actualizarPerfilData);

    // setUser()

    setShowModal(false);

    // setAuxUser('Q');

    getUserData();
  };

  let url = process.env.REACT_APP_BACKEND_URL + `/user/${user.id}`;

  const ActualizarPerfil = (data) => {
    fetch(url, data)
      .then(function (response) {
        return response.json();
      })
      .then(function (myJson) {
        // console.log(myJson);
      })
      .catch((error) => console.log(error.response.data.message));
  };

  const getUserData = () => {
    let getDataUrl = process.env.REACT_APP_BACKEND_URL + '/user';

    fetch(getDataUrl, {
      headers: {
        'Content-Type': 'Application/json',
        Authorization: `Bearer ${userToken.token}`,
      },
    }).then(function (myJson) {
      setAuxUser(myJson);
      console.log('papata');
    });
  };

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      <div className='py-6 px-6 lg:px-8 text-left'>
        <h3 className='mb-4 text-xl font-medium text-gray-900'>
          Editar Datos personales
        </h3>
        <Form action=' ' className='space-y-6'>
          <div className='px-10 py-5 h-20 W-48 text-[20px] text-[#140B34]'>
            <label
              htmlFor='fullname'
              className=' text-lg font-medium text-[#140B34]'
            >
              Nombre
            </label>

            <Field
              type='text'
              name='fullname'
              id='fullname'
              className='text-input bg-[#E2F2FE] W-48 border border-sky-800 mt-2 '
              placeholder={user.fullname}
            />
          </div>
          <div className='px-10 py-5 h-20 W-48 text-[20px] text-[#140B34]'>
            <label
              htmlFor='phoneNumber'
              className='block text-lg font-medium text-[#140B34]'
            >
              Telefono
            </label>
            <Field
              type='tel'
              name='phoneNumber'
              id='phoneNumber'
              className='text-input bg-[#E2F2FE] W-48 border border-sky-800 mt-2  '
              placeholder={
                user.phoneNumber ? user.phoneNumber : '+569 ********'
              }
            />
          </div>
          <div className='px-10 py-5 h-20 W-48 text-[20px] text-[#140B34]'>
            <label
              htmlFor='linkedin'
              className='block text-lg font-medium text-[#140B34]'
            >
              Linkedin
            </label>
            <Field
              type='tel'
              name='linkedin'
              id='linkedin'
              className='text-input bg-[#E2F2FE] W-48 border border-sky-800 mt-2 '
              placeholder='url'
            />
          </div>
          <div className='px-10 py-5 h-20 W-48 text-[20px] text-[#140B34]'>
            <label
              htmlFor='github'
              className='block text-lg font-medium text-[#140B34]'
            >
              Github
            </label>
            <Field
              type='tel'
              name='github'
              id='github'
              className='text-input bg-[#E2F2FE] W-48 border border-sky-800 mt-2 '
              placeholder='url'
            />
          </div>
          <div className='flex justify-end'>
            <button
              type='submit'
              className=' h-12 w-36 bg-[#2738F5] hover:bg-blue-600 text-[#FFFFFF] text-lg font-bold mt-4 py-2 px-4 rounded-3xl '
            >
              Guardar
            </button>
          </div>
        </Form>
      </div>
    </Formik>
  );
};
