import './css/login.css';
import {TypeEffect} from './../../components/typeEffect/TypeEffect'

export const LoginUI = ({children}) => {

  return (
    <div>
      <div className='h-screen flex bg-gradient-to-b p-6 rounded-xl '>
        {/* sección de formulario de datos registro */}
        <div className='flex w-full lg:w-1/2 justify-center items-center space-y-8 '>
          <div className='w-full px-8 md:px-32 lg:px-24   '>

          {children}

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

            <div style={{width: "100%", height: "3em"}}>
              <TypeEffect>
                Registrate y te ayudamos a contratar a los mejores en 5 dias, y
                nosotros los acompañamos por 3 meses con tutores senior para
                protencias sus habilidades tecnicas.
              </TypeEffect>
            </div>
            
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
