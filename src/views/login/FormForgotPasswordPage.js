import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useAnimationInput } from './hooks/useAnimationInput';
import './css/login.css';


export const FormForgotPasswordPage = ({request}) => {
  const animationEmail = useAnimationInput();

    return(
        <Formik
          initialValues={{email: ''}}
          validationSchema={Yup.object({
            email: Yup.string()
              .email('No es un email válido')
              .required('El email es obligatorio'),
          })}
          onSubmit={(values) => request(values)}
        
        >
          {({ errors }) => (

            <Form className='w-full md:px-10 rounded-xl border-1 border-zinc-300/60'>
              <div style={{position: "relative"}} className="my-4">
                <Field
                  type='email'
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
                <ErrorMessage
                  name='email'
                  component={() => (
                    <div className='text-red-600'>{errors.email}</div>
                  )}
                />
              </div>

              <button
                onSubmit={(value) => {}}
                type='submit'
                className='block w-full bg-blue-700 mt-5 py-2 rounded-2xl hover:bg-blue-400 hover:-translate-y-1 transition-all duration-500 text-white font-semibold mb-2'
              >
                Enviar enlace
              </button>

             
            </Form>

          )}
      </Formik>
  )
}

