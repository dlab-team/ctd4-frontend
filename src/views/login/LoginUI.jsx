import './css/login.css';
import { useForm } from 'react-hook-form'
import { useAnimationInput } from './hooks/useAnimationInput';
import { Link } from 'react-router-dom';

export const LoginUI = () => {
  const animationEmail = useAnimationInput();
  const animationPassword = useAnimationInput();

  const { register, handleSubmit, formState: {errors} } = useForm({
    mode: "onTouched"
  });

  const onSubmit = (data, e) => {
    //e.preventDefault();
    console.log(data);
    e.target.reset()
  }

  return (
    <div>
      <div className='h-screen flex bg-gradient-to-b p-6 rounded-xl '>
        {/* sección de formulario de datos registro */}
        <div className='flex w-full lg:w-1/2 justify-center items-center space-y-8 '>
          <div className='w-full px-8 md:px-32 lg:px-24   '>
            <form
              className='formcss shadow-2xl p-5 rounded-xl border-1 border-zinc-300/60      bg-white'
              action='#'
              //method='POST'
              id='signincss'
              onSubmit={handleSubmit(onSubmit)} //---> para evaluar los datos que son enviados al back
            >
              <div className='my-5'>
                <img
                  className='mx-auto h-12 w-auto my-5'
                  src='https://devsafio.com/wp-content/uploads/2022/02/DEV-IMAGOTIPO-COLOR-HORIZONTAL.png'
                  alt='DevSafio'
                />
                <h2 className='text-black text-center font-bold text-2xl mb-1'>
                  Sign In
                </h2>
                <p className='mt-2 text-center text-sm text-black'>
                  Or{' '}
                  <span className='font-bold'>
                    <Link to='/register'>Sign up</Link>
                  </span>
                </p>
              </div>

              <span className="formulario__input-error">
                {errors.email?.type === 'required' && <p>El correo es requerido</p>}
                {errors.email?.type === 'minLength' && <p>El correo debe tener mínimo 4 caracteres</p>}
                {errors.email?.type === 'pattern' && <p>El formato del correo no es válido</p>}
              </span>

              <div className='flex items-center border-2 mb-8 rounded-2xl relative'>
                <input
                  type='text'
                  className='text-input'
                  id='email'
                  onFocus={() => animationEmail.focusAnimation()}
                  onBlur={(e) => animationEmail.blurAnimation(e)}
                  {...register("email", {
                    minLength: 4,
                    required: true,
                    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i
                  })}
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

              <span className="formulario__input-error">
                {errors.password?.type === 'required' && <p>La contraseña es requerida</p>}
                {errors.password?.type === 'minLength' && <p>La contraseña debe tener un mínimo de 4 caracteres</p>}
                {errors.password?.type === 'maxLength' && <p>La contraseña debe tener un máximo de 14 caracteres</p>}
              </span>

              <div className='flex items-center border-2 mb-8 rounded-2xl relative'>
                <input
                  type='password'
                  className='text-input'
                  id='password'
                  onFocus={() => animationPassword.focusAnimation()}
                  onBlur={(e) => animationPassword.blurAnimation(e)}
                  {...register("password", {
                    minLength: 4,
                    required: true,
                    maxLength: 14
                  })}
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

              <button
                type='submit'
                className='block w-full bg-blue-700 mt-5 py-2 rounded-2xl hover:bg-blue-400 hover:-translate-y-1 transition-all duration-500 text-white font-semibold mb-2'
              >
                Sing In
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
            <h1 className='bg-red  text-black font-bold text-4xl font-sans'>
              ¿Buscas talento TI?
            </h1>
            <p className='text-black text-justify mt-1'>
              Registrate y te ayudamos a contratar a los mejores en 5 dias, y
              nosotros los acompañamos por 3 meses con tutores senior para
              protencias sus habilidades tecnicas
            </p>
            <div className='flow-root flex justify-center lg:justify-start mt-6'>
              <a
                href='https://github.com'
                className='float-right hover:bg-indigo-700 hover:bg-blue-400 hover:-translate-y-1 transition-all duration-500 bg-blue-700 text-white mt-4 px-4 py-2 rounded-2xl font-bold mb-2'
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
