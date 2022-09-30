import React from 'react';
import { useAnimationInput } from '../login/hooks/useAnimationInput';
import { Link } from 'react-router-dom';

const SignUp = () => {
  const animationEmail = useAnimationInput();
  const animationPassword = useAnimationInput();
  const animationRepeatPassword = useAnimationInput();

  return (
    // color de fondo gradiente

    <div className='h-screen flex bg-gradient-to-b p-6 rounded-xl '>
      {/* seccion de  imagenes o texto  */}
      <div
        className='hidden lg:flex w-full lg:w-1/2 login_img_section
          justify-around items-center '
      >
        <div
          className=' 
                bg-black 
                opacity-20 
                inset-0 

                z-0'
        ></div>
        <div className='w-full mx-auto px-20 flex-col items-center space-y-6'>
          <h1 className='text-black font-bold text-4xl font-sans'>
            ¿Buscas talento TI?
          </h1>
          <p className='text-black text-justify mt-1'>
            Registrate y te ayudamos a contratar a los mejores en 5 dias, y
            nosotros los acompañamos por 3 meses con tutores senior para
            potenciar sus habilidades tecnicas
          </p>
          <div className='flex justify-center lg:justify-start mt-6'>
            <a
              href='https://github.com'
              className=' hover:bg-blue-400 hover:-translate-y-1 transition-all duration-500 bg-blue-700 text-white mt-4 px-4 py-2 rounded-2xl font-bold mb-2'
            >
              Get Started
            </a>
          </div>
        </div>
        {/* sección de formulario de datos registro */}
        <div className='flex w-full lg:w-1/2 justify-center items-center space-y-8 '>
          <div className='w-full px-8 md:px-32 lg:px-24   '>
            <form
              className='shadow-2xl p-5 rounded-xl border-1 border-zinc-300/60      bg-white'
              action='#'
              method='POST'
              id='signupcss'
            >
              <div className='my-5'>
                <Link to='/'>
                  <img
                    className='mx-auto h-12 w-auto my-5'
                    src='https://devsafio.com/wp-content/uploads/2022/02/DEV-IMAGOTIPO-COLOR-HORIZONTAL.png'
                    alt='DevSafio'
                  />
                </Link>
                <h2 className='text-black text-center font-bold text-2xl mb-1'>
                  Sign Up
                </h2>
                <p className='mt-2 text-center text-sm text-black'>
                  Or{' '}
                  <span className='font-bold'>
                    <Link to='/login'>Sign in</Link>
                  </span>
                </p>
              </div>
              <div className='flex items-center border-2 mb-8 rounded-2xl relative'>
                <input
                  type='text'
                  className='text-input'
                  id='email'
                  onFocus={() => animationEmail.focusAnimation()}
                  onBlur={(e) => animationEmail.blurAnimation(e)}
                />
                <label
                  htmlFor='email'
                  className={`${
                    animationEmail.inputFocus ? 'labelBlur' : 'labelFocus'
                  }`}
                >
                  Email
                </label>
              </div>

              <div className='flex items-center border-2 mb-8 rounded-2xl relative'>
                <input
                  type='password'
                  className='text-input'
                  id='password'
                  onFocus={() => animationPassword.focusAnimation()}
                  onBlur={(e) => animationPassword.blurAnimation(e)}
                />
                <label
                  htmlFor='password'
                  className={`${
                    animationPassword.inputFocus ? 'labelBlur' : 'labelFocus'
                  }`}
                >
                  Password
                </label>
              </div>
              <div className='flex items-center border-2 mb-8 rounded-2xl relative'>
                <input
                  type='password'
                  className='text-input'
                  id='repeat-password'
                  onFocus={() => animationRepeatPassword.focusAnimation()}
                  onBlur={(e) => animationRepeatPassword.blurAnimation(e)}
                />
                <label
                  htmlFor='repeat-password'
                  className={`${
                    animationRepeatPassword.inputFocus
                      ? 'labelBlur'
                      : 'labelFocus'
                  }`}
                >
                  Repetir contraseña
                </label>
              </div>
              <button
                type='submit'
                className='block w-full bg-blue-700 mt-5 py-2 rounded-2xl hover:bg-blue-400 hover:-translate-y-1 transition-all duration-500 text-white font-semibold mb-2'
              >
                Sing Up
              </button>
              <p className='mt-4 text-center  text-black'>Or</p>

              <div className='flex justify-between mt-2'>
                <button
                  type='submit'
                  className='bg-blue-700 mt-5 py-2 px-6 rounded-2xl hover:bg-blue-400 hover:-translate-y-1 transition-all duration-500 text-white font-semibold mb-2'
                >
                  Linkedin
                </button>
                <button
                  type='submit'
                  className='bg-blue-700 mt-5 py-2 px-6 rounded-2xl hover:bg-blue-400 hover:-translate-y-1 transition-all duration-500 text-white font-semibold mb-2'
                >
                  Google
                </button>
                <button
                  type='submit'
                  className='bg-blue-700 mt-5 py-2 px-6 rounded-2xl hover:bg-blue-400 hover:-translate-y-1 transition-all duration-500 text-white font-semibold mb-2'
                >
                  GitHub
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
