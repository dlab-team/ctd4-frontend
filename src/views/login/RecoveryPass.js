import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useAnimationInput } from './hooks/useAnimationInput';
import './css/login.css';
import { LoginUI } from './LoginUI';
import DEV_COLOR from '../../assets/images/DEV_COLOR.png'


export const RecoveryPass = ({request}) => {
    const animationEmail = useAnimationInput();

    return(

    <LoginUI>
        <Formik
          onSubmit={(values) => request(values)}
        >
            <Form className='w-full md:px-10 rounded-xl border-1 border-zinc-300/60'>
            <div className='flex justify-center mb-10'>
              <img src={DEV_COLOR} className="w-[60px]" />
            </div>
              <div className="text-center">
                <p className="mb-6 text-2xl font-semibold ">Necesitas ayuda con tu contraseña?</p>
                <p className="mb-6">Ingresa el correo que utilizas para Devsafio, y te ayudaremos a crear una nueva contraseña</p>
              </div>

              <div style={{position: "relative"}} className="my-4">
                <Field
                  type='text'
                  id='email'
                  name='email'
                  className={`text-input ${animationEmail.inputFocus && 'text-inputBlur'}`}
                  onFocus={() => animationEmail.focusAnimation()}
                  onBlur={(e) => animationEmail.blurAnimation(e)}
                  autocomplete="off"
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

              <div className="mb-10 mt-6">
                <button
                  onSubmit={(value) => {}}
                  type='submit'
                  className='block w-full bg-blue-700 mt-5 py-2 rounded-2xl hover:bg-blue-400 hover:-translate-y-1 transition-all duration-500 text-white font-semibold mb-2'
                >
                  Enviar enlace a correo
                </button>
              </div>

            </Form>
        </Formik>
    </LoginUI>
  )
}

