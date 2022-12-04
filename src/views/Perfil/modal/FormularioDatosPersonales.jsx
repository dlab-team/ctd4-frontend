import React from 'react';
import { useParams } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';

const initialValues = {
  fullname: '',
  email: '',
  phoneNumber: '',
  linkedin: '',
  github: '',
};

export const FormularioDatosPersonales = ({ user, setShowModal }) => {
  const userToken = JSON.parse(localStorage.getItem('user'));

  console.log(user);

  const onSubmit = (values) => {
    console.log(userToken.token);
    const actualizarPerfilData = {
      headers: {
        'Content-Type': 'Application/json',
        Authorization: `Bearer ${userToken.token}`,
      },
      body: JSON.stringify({
        user: {
          email: user.email,
          fullname: values.fullname,
          phoneNumber: '8906455663',

          workProfile: {},
        },
      }),
      method: 'PUT',
    };

    ActualizarPerfil(actualizarPerfilData);

    console.log(values.fullname);

    setShowModal(false);
  };

  let url = process.env.REACT_APP_BACKEND_URL + `/user/${user.id}`;

  const ActualizarPerfil = (data) => {
    fetch(url, data)
      .then(function (response) {
        return response.json();
      })
      .then(function (myJson) {
        console.log(myJson);
      });
  };

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      <div className='py-6 px-6 lg:px-8 text-left'>
        <h3 className='mb-4 text-xl font-medium text-gray-900'>
          Editar Datos personales
        </h3>
        <Form action=' ' className='space-y-6'>
          <div>
            <label
              htmlFor='fullname'
              className='block mb-2 text-sm font-medium text-gray-900'
            >
              Nombre
            </label>
            <Field
              type='text'
              name='fullname'
              id='fullname'
              clasname='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 '
              placeholder={user.fullname}
            />
          </div>
          <div>
            <label
              htmlFor='phoneNumber'
              className='block mb-2 text-sm font-medium text-gray-900'
            >
              Telefono
            </label>
            <Field
              type='tel'
              name='phoneNumber'
              id='phoneNumber'
              clasname='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 '
              placeholder={
                user.phoneNumber ? user.phoneNumber : '+569 ********'
              }
            />
          </div>
          <div>
            <label
              htmlFor='linkedin'
              className='block mb-2 text-sm font-medium text-gray-900'
            >
              Linkedin
            </label>
            <Field
              type='tel'
              name='linkedin'
              id='linkedin'
              clasname='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 '
              placeholder='url'
            />
          </div>
          <div>
            <label
              htmlFor='github'
              className='block mb-2 text-sm font-medium text-gray-900'
            >
              Github
            </label>
            <Field
              type='tel'
              name='github'
              id='github'
              clasname='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 '
              placeholder='url'
            />
          </div>
          <div className='flex justify-end'>
            <button type='submit' className='  '>
              Guardar
            </button>
          </div>
        </Form>
      </div>
    </Formik>
  );
};
