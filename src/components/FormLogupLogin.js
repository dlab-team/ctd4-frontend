import { Link } from 'react-router-dom';
import { useAnimationInput } from './../views/login/hooks/useAnimationInput';

export const FormLogupLogin = ({request, getDataForm}) => {
    const animationEmail = useAnimationInput();
    const animationPassword = useAnimationInput();

    return(
        <form
              className='formcss shadow-2xl p-5 rounded-xl border-1 border-zinc-300/60  bg-white'
              id='signincss'
              onSubmit={request}
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

              <div className='flex items-center border-2 mb-8 rounded-2xl relative'>
                <input
                  type='text'
                  className='text-input'
                  id='email'
                  onFocus={() => animationEmail.focusAnimation()}
                  onBlur={(e) => animationEmail.blurAnimation(e)}
                  onChange={e => getDataForm(e)}
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
                  onChange={e => getDataForm(e)}
                />
                <label
                  htmlFor='password'
                  className={`${
                    animationPassword.inputFocus ? 'labelBlur' : 'labelFocus'
                  }`}
                >
                  Contraseña
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
    )
}