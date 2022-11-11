import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useAnimationInput } from '../login/hooks/useAnimationInput';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { ShowResponseFromBack, Loading } from '../../components/Alerts';
import axios from 'axios';

export const SignUpForm = () => {
  const animationName = useAnimationInput();
  const animationEmail = useAnimationInput();
  const animationPassword = useAnimationInput();
  const animationRepeatPassword = useAnimationInput();
  const navigate = useNavigate();

  const [errorMessage, setErrorMessage] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);
  const [loadingLogup, setLoadingLogup] = useState(false);

  return (
    <>
      {loadingLogup && <Loading />}

      {successMessage && (
        <ShowResponseFromBack>
          <p>{successMessage}</p>
          <p>Inicie sesion para confirmar</p>
          <button onClick={() => navigate('/login', { replace: true })}>
            Iniciar sesion
          </button>
        </ShowResponseFromBack>
      )}

      {errorMessage && (
        <ShowResponseFromBack>
          <p>{errorMessage}</p>
          <button onClick={() => setErrorMessage(null)}>
            Volver a intentar
          </button>
        </ShowResponseFromBack>
      )}

      <Formik
        initialValues={{
          name: '',
          email: '',
          password: '',
          re_password: '',
        }}
        validationSchema={Yup.object({
          email: Yup.string()
            .email('No es un email válido')
            .required('El email es obligatorio'),

          password: Yup.string()
            .min(6, 'Debe tener al menos 6 caracteres')
            .required('La contraseña es obligatoria')
            .oneOf([Yup.ref('re_password')], 'Las contraseñas no son iguales'),

          re_password: Yup.string()
            .min(6, 'Debe tener al menos 6 caracteres')
            .required('La contraseña es obligatoria')
            .oneOf([Yup.ref('password')], 'Las contraseñas no son iguales'),
        })}
        onSubmit={(values) => {
          setLoadingLogup(true);
          let url = process.env.REACT_APP_BACKEND_URL + '/signup';
          setTimeout(() => {
            axios
              .post(url, {
                name: values.name,
                email: values.email,
                password: values.password,
                re_password: values.re_password,
              })
              .then(function (response) {
                setLoadingLogup(false);
                if (response.data) {
                  setSuccessMessage('El registro ha sido exitoso!');
                }
              })
              .catch(function (error) {
                setLoadingLogup(false);
                setErrorMessage(error.response.data.message);
              });
          }, 1500);
        }}
      >
        {({ errors }) => (
          <Form className="w-full md:px-10 rounded-xl border-1 border-zinc-300/60">
            <div style={{ position: 'relative' }} className="my-4">
              <Field
                type="text"
                id="name"
                name="name"
                className={`text-input ${
                  animationName.inputFocus && 'text-inputBlur'
                }`}
                onFocus={() => animationName.focusAnimation()}
                onBlur={(e) => animationName.blurAnimation(e)}
                autocomplete="off"
              />
              <label
                htmlFor="name"
                className={`${
                  animationName.inputFocus ? 'labelBlur' : 'labelFocus'
                }`}
              >
                Nombre
              </label>
              <ErrorMessage
                name="name"
                component={() => (
                  <div className="text-red-600">{errors.name}</div>
                )}
              />
            </div>

            <div style={{ position: 'relative' }} className="my-4">
              <Field
                type="text"
                id="email"
                name="email"
                className={`text-input ${
                  animationEmail.inputFocus && 'text-inputBlur'
                }`}
                onFocus={() => animationEmail.focusAnimation()}
                onBlur={(e) => animationEmail.blurAnimation(e)}
                autocomplete="off"
              />
              <label
                htmlFor="email"
                className={`${
                  animationEmail.inputFocus ? 'labelBlur' : 'labelFocus'
                }`}
              >
                Email
              </label>
              <ErrorMessage
                name="email"
                component={() => (
                  <div className="text-red-600">{errors.email}</div>
                )}
              />
            </div>

            <div style={{ position: 'relative' }} className="my-4">
              <Field
                type="password"
                id="password"
                name="password"
                className={`text-input ${
                  animationPassword.inputFocus && 'text-inputBlur'
                }`}
                onFocus={() => animationPassword.focusAnimation()}
                onBlur={(e) => animationPassword.blurAnimation(e)}
              />
              <label
                htmlFor="password"
                className={`${
                  animationPassword.inputFocus ? 'labelBlur' : 'labelFocus'
                }`}
              >
                Contraseña
              </label>
              <ErrorMessage
                name="password"
                component={() => (
                  <div className="text-red-600">{errors.password}</div>
                )}
              />
            </div>

            <div style={{ position: 'relative' }} className="my-4">
              <Field
                type="password"
                id="rePassword"
                name="re_password"
                className={`text-input ${
                  animationRepeatPassword.inputFocus && 'text-inputBlur'
                }`}
                onFocus={() => animationRepeatPassword.focusAnimation()}
                onBlur={(e) => animationRepeatPassword.blurAnimation(e)}
              />
              <label
                htmlFor="rePassword"
                className={`${
                  animationRepeatPassword.inputFocus
                    ? 'labelBlur'
                    : 'labelFocus'
                }`}
              >
                Repita la contraseña
              </label>
              <ErrorMessage
                name="re_password"
                component={() => (
                  <div className="text-red-600">{errors.re_password}</div>
                )}
              />
            </div>

            <button
              onSubmit={(value) => {}}
              type="submit"
              className="block w-full bg-blue-700 mt-5 py-2 rounded-2xl hover:bg-blue-400 hover:-translate-y-1 transition-all duration-500 text-white font-semibold mb-2"
            >
              Crear cuenta
            </button>
          </Form>
        )}
      </Formik>
    </>
  );
};
