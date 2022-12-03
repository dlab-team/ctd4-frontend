import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useAnimationInput } from './hooks/useAnimationInput';
import { useNavigate, useParams} from 'react-router-dom';
import { useState } from 'react';
import { ShowResponseFromBack, Loading } from '../../components/Alerts';
import axios from 'axios';

export const PasswordChangeForm  = () => {
  const animationPassword = useAnimationInput();
  const animationRepeatPassword = useAnimationInput();
  const navigate = useNavigate();

  const [errorMessage, setErrorMessage] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);
  const [loadingPass, setLoadingPass] = useState(false);
  const [responseFromBack, setResponseFromBack] = useState(null);

  const { id } = useParams()


return (
    <>

      {loadingPass && <Loading />}

      {successMessage && (
        <ShowResponseFromBack>
          <p>{successMessage}</p>
          <button onClick={() => navigate ('/login', { replace: true })}>
            Entendido
          </button>
        </ShowResponseFromBack>
      )}

      {errorMessage && (
        <ShowResponseFromBack>
          <p>{errorMessage}</p>
          <button onClick={() => setResponseFromBack(null)}>
            Volver a intentar
          </button>
        </ShowResponseFromBack>
      )}

      <Formik
        initialValues={{
          newPassword: '',
          confirmPassword: '',
        }}
        validationSchema={Yup.object({
          newPassword: Yup.string()
            .min(6, 'Debe tener al menos 6 caracteres')
            .required('La contraseña es obligatoria')
            .oneOf([Yup.ref('confirmPassword')], 'Las contraseñas no son iguales'),

          confirmPassword: Yup.string()
            .min(6, 'Debe tener al menos 6 caracteres')
            .required('La contraseña es obligatoria')
            .oneOf([Yup.ref('newPassword')], 'Las contraseñas no son iguales'),
        })}
        onSubmit={(values) => {
          let url = process.env.REACT_APP_BACKEND_URL + `/new-password/${id}`;
            axios
              .post(url, {
                newPassword: values.newPassword,
                confirmPassword: values.confirmPassword,
              })
              .then(function (response) {
                if (response.data) {
                  console.log('se envio la contraseña')
                }
              })
              .catch(function (error) {
                setErrorMessage(error.response.data.message);
              });
          
        }}
      >
        {({ errors }) => (
          <Form className="w-full md:px-10 rounded-xl border-1 border-zinc-300/60">
            <div style={{ position: 'relative' }} className="my-4">
              <Field
                type="password"
                id="newPassword"
                name="newPassword"
                className={`text-input ${
                  animationPassword.inputFocus && 'text-inputBlur'
                }`}
                onFocus={() => animationPassword.focusAnimation()}
                onBlur={(e) => animationPassword.blurAnimation(e)}
              />
              <label
                htmlFor="newPassword"
                className={`${
                  animationPassword.inputFocus ? 'labelBlur' : 'labelFocus'
                }`}
              >
                Contraseña
              </label>
              <ErrorMessage
                name="newPassword"
                component={() => (
                  <div className="text-red-600">{errors.newPassword}</div>
                )}
              />
              <div className="acordion text-sm">
                  <p>La contraseña debe tener: </p>
                  <p>Mayusculas y minusculas</p>
                  <p>Un minimo de 8 caracteres</p>
                  <p>Uno o varios numeros del 0 al 9</p>
              </div>
            </div>
            <div style={{ position: 'relative' }} className="my-4">
              <Field
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                className={`text-input ${
                  animationRepeatPassword.inputFocus && 'text-inputBlur'
                }`}
                onFocus={() => animationRepeatPassword.focusAnimation()}
                onBlur={(e) => animationRepeatPassword.blurAnimation(e)}
              />
              <label
                htmlFor="confirmPassword"
                className={`${
                  animationRepeatPassword.inputFocus
                    ? 'labelBlur'
                    : 'labelFocus'
                }`}
              >
                Repita la contraseña
              </label>
              <ErrorMessage
                name="confirmPassword"
                component={() => (
                  <div className="text-red-600">{errors.confirmPassword}</div>
                )}
              />
            </div>

            <button
              onSubmit={(value) => {}}
              type="submit"
              className="block w-full bg-blue-700 mt-5 py-2 rounded-2xl hover:bg-blue-400 hover:-translate-y-1 transition-all duration-500 text-white font-semibold mb-2"
            >
              Cambiar contraseña
            </button>
          </Form>
        )}
      </Formik>
    </>
  );
}



