import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useAnimationInput } from './hooks/useAnimationInput';
import './css/login.css';
import { Link } from 'react-router-dom';


export const FormNewPassword = ({request}) => {
    const animationPassword = useAnimationInput();
    const animationConfirmPassword = useAnimationInput();

    return(
        <Formik
          initialValues={{password: '', confirmPassword: '',}}
          validationSchema={Yup.object({
            password: Yup.string()
              .min(6, 'Debe tener al menos 6 caracteres')
              .required('La contraseña es obligatoria'),
            confirmPassword: Yup.string()
                .min(6, 'Debe tener al menos 6 caracteres')
              .required('La confirmación es obligatoria')
          })}
          onSubmit={(values) => request(values)}
        
        >
          {({ errors }) => (
            <Form className='w-full md:px-10 rounded-xl border-1 border-zinc-300/60'>
              <div style={{position: "relative"}} className="my-4">
                <Field
                  type='password'
                  id='password'
                  name='password'
                  className={`text-input ${animationPassword.inputFocus && 'text-inputBlur'}`}
                  onFocus={() => animationPassword.focusAnimation()}
                  onBlur={(e) => animationPassword.blurAnimation(e)}
                />
                <label
                  htmlFor='password'
                  className={`${
                    animationPassword.inputFocus ? 'labelBlur' : 'labelFocus'
                  }`}
                >
                  Contraseña
                </label>
                <ErrorMessage
                  name='password'
                  component={() => (
                    <div className='text-red-600'>{errors.password}</div>
                  )}
                />
              </div>

              <div style={{position: "relative"}} className="my-4">
                <Field
                  type='confirmPassword'
                  id='confirmPassword'
                  name='confirmPassword'
                  className={`text-input ${animationPassword.inputFocus && 'text-inputBlur'}`}
                  onFocus={() => animationConfirmPassword.focusAnimation()}
                  onBlur={(e) => animationConfirmPassword.blurAnimation(e)}
                />
                <label
                  htmlFor='confirmPassword'
                  className={`${
                    animationConfirmPassword.inputFocus ? 'labelBlur' : 'labelFocus'
                  }`}
                >
                  Confirmar Contraseña
                </label>
                <ErrorMessage
                  name='confirmPassword'
                  component={() => (
                    <div className='text-red-600'>{errors.confirmPassword}</div>
                  )}
                />
              </div>

              <button
                onSubmit={(value) => {}}
                type='submit'
                className='block w-full bg-blue-700 mt-5 py-2 rounded-2xl hover:bg-blue-400 hover:-translate-y-1 transition-all duration-500 text-white font-semibold mb-2'
              >
                Restablecer contraseña
              </button>

            </Form>
          )}
      </Formik>
  )
}

