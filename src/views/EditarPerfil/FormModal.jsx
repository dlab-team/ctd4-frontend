import React from 'react';

const FormModal = () => {
  return (
    <>
      <div className='py-6 px-6 lg:px-8 text-left'>
        <h3 className='mb-4 text-xl font-medium text-gray-900'>
          Editar Datos personales
        </h3>
        <form action=' ' className='space-y-6'>
          <div>
            <label
              htmlFor='email'
              className='block mb-2 text-sm font-medium text-gray-900'
            >
              Correo
            </label>
            <input
              type='email'
              name='email'
              id='email'
              clasname='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 '
              placeholder='name@company.com'
              required
            />
          </div>
          <div>
            <label
              htmlFor='password'
              className='block mb-2 text-sm font-medium text-gray-900'
            >
              Telefono
            </label>
            <input
              type='tel'
              name='password'
              id='password'
              clasname='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 '
              placeholder='+569 8723837'
              required
            />
          </div>
          <div>
            <label
              htmlFor='url'
              className='block mb-2 text-sm font-medium text-gray-900'
            >
              Linkedin
            </label>
            <input
              type='tel'
              name='password'
              id='password'
              clasname='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 '
              placeholder='url'
              required
            />
          </div>
          <div>
            <label
              htmlFor='password'
              className='block mb-2 text-sm font-medium text-gray-900'
            >
              Github
            </label>
            <input
              type='tel'
              name='password'
              id='password'
              clasname='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 '
              placeholder='url'
              required
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default FormModal;
