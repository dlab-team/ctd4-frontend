import { Formik, Form, Field} from 'formik';
import * as Yup from 'yup';
import { useAnimationInput } from './hooks/useAnimationInput';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { ShowResponseFromBack, Loading } from '../../components/Alerts';
import axios from 'axios';

export const RequestEmailForm = () => {
  const animationEmail = useAnimationInput();
  const navigate = useNavigate();

  // const [errorMessage, setErrorMessage] = useState(null);
  const [successMessage, setSuccessMessage] = useState(null);
  const [loadingEmail, setLoadingEmail] = useState(false);
  const [responseFromBack, setResponseFromBack] = useState(null);

  return (
    <>

    {loadingEmail&& <Loading />}

      {successMessage && (
        <ShowResponseFromBack>
          <p>{successMessage}</p>
          <button onClick={() => navigate('/login', { replace: true })}>Entendido</button>
        </ShowResponseFromBack>
      )}

      {responseFromBack && (
        <ShowResponseFromBack>
          <p>{responseFromBack}</p>
          <button onClick={() => setResponseFromBack(false)}>Volver a intentarlo</button>
        </ShowResponseFromBack>
      )}

      <Formik
        initialValues={{
          email: '',
        }}
        validationSchema={Yup.object({
          email: Yup.string()
            .email('No es un email válido')
            .required('El email es obligatorio'),
        })}
        onSubmit={(values) => {
          setLoadingEmail(true);
          let url = process.env.REACT_APP_BACKEND_URL + '/recovery-password';
          setTimeout(() => {
            axios
              .post(url, {
                email: values.email,
              })
              .then(function (response) {
                if (response.data) {
                  setLoadingEmail(false);
                  if (response.data) {
                    setSuccessMessage('Hemos enviado un enlace a tu correo electrónico para que recuperes el acceso a tu cuenta');
                  }
                }
              })
              .catch(function (error) {
                setLoadingEmail(false);
                setResponseFromBack('Usuario inválido ó no registrado');

                
              });
          }, 1500);
        }}
      >
        {({ errors }) => (
          <Form className="w-full md:px-10 rounded-xl border-1 border-zinc-300/60">
            
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
              <errorMessage
                name="email"
                component={() => (
                  <div className="text-red-600">{errors.email}</div>
                )}
              />
            </div>

            <button
              onSubmit={(value) => {}}
              type="submit"
              className="block w-full bg-blue-700 mt-5 py-2 rounded-2xl hover:bg-blue-400 hover:-translate-y-1 transition-all duration-500 text-white font-semibold mb-2"
            >
              Enviar enlace de acceso
            </button>
          </Form>
        )}
      </Formik>
    </>
  );
};
