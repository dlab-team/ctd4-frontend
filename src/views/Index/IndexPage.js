import React from "react";
import "animate.css";
// import { LockClosedIcon } from "@heroicons/react/20/solid";
// import hero from "../../assets/images/referencia.png";

const IndexPage = () => {
  return (
    // color de fondo gradiente
    <div className="bg-gradient-to-b   from-cyan-400 via-blue-500  to-blue-700 ">
      {/* una forma de poner imagen de fondo */}
      {/* <style
          dangerouslySetInnerHTML={{
            __html:
              "\n  .login_img_section {\n  background: linear-gradient(rgba(2,2,2,.7),rgba(0,0,0,.7)),url(https://images.unsplash.com/photo-1650825556125-060e52d40bd0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80) center center;\n}\n",
          }}
        /> */}
      <div className="h-screen flex bg-gradient-to-b p-6 rounded-xl ">
        {/* seccion de  imagenes o texto  */}
        <div
          className="hidden lg:flex w-full lg:w-1/2 login_img_section
            justify-around items-center "
        >
          <div
            className=" 
                  bg-black 
                  opacity-20 
                  inset-0 
                  z-0"
          ></div>
          <div className="w-full mx-auto px-20 flex-col items-center space-y-6">
            <h1 className="text-white font-bold text-4xl font-sans">
              ¿Buscas talento TI?
            </h1>
            <p className="text-white text-justify mt-1">
              Registrate y te ayudamos a contratar a los mejores en 5 días, y
              nosotros los acompañamos por 3 meses con tutores senior para
              potenciar sus habilidades tecnicas.
            </p>
            <div className="flex justify-center lg:justify-start mt-6">
              <a
                href="https://github.com"
                className="hover:bg-indigo-700 hover:text-white hover:-translate-y-1 transition-all duration-500 bg-white text-indigo-800 mt-4 px-4 py-2 rounded-2xl font-bold mb-2"
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
        {/* sección de formulario de datos registro */}
        <div className="flex w-full lg:w-1/2 justify-center items-center space-y-8 ">
          <div className="w-full px-8 md:px-32 lg:px-24   ">
            <form
              className="  shadow-2xl p-5 rounded-xl border-1 border-zinc-300/60      bg-gradient-to-b   from-cyan-400 via-blue-500  to-purple-700"
              action="#"
              method="POST"
            >
              <div className="my-5">
                <img
                  className="mx-auto h-12 w-auto my-5"
                  src="https://devsafio.com/wp-content/uploads/2022/02/DEV-IMAGOTIPO-COLOR-HORIZONTAL.png"
                  alt="DevSafio"
                />
                <h1 className="text-white text-center font-bold text-2xl mb-1">
                  Sign Up
                </h1>

                <a
                  href="https://github.com"
                  className="font-medium text-white hover:text-green-500"
                >
                  <p className="mt-2 text-center text-sm text-blue-200">
                    Or <spam className="font-bold">Sign In </spam>
                  </p>
                </a>
              </div>

              <div className="flex items-center border-2 mb-8 py-2 px-3 rounded-2xl">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokelinecap="round"
                    strokelinejoin="round"
                    strokewidth={2}
                    d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                  />
                </svg>
                <input
                  id="email"
                  className=" pl-2 w-full outline-none border-none bg-transparent"
                  type="email"
                  name="email"
                  placeholder="Email Address"
                />
              </div>
              <div className="flex items-center border-2 mb-12 py-2 px-3 rounded-2xl ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillrule="evenodd"
                    d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                    cliprule="evenodd"
                  />
                </svg>
                <input
                  className="pl-2 w-full outline-none border-none bg-transparent"
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Password"
                />
              </div>
              <button
                type="submit"
                className="block w-full bg-indigo-600 mt-5 py-2 rounded-2xl hover:bg-indigo-700 hover:-translate-y-1 transition-all duration-500 text-white font-semibold mb-2"
              >
                Sing Up
              </button>
              <p className="mt-4 text-center  text-blue-200">Or</p>
              <div className="flex justify-between mt-2">
                <button
                  type="submit"
                  className="block w-full  bg-indigo-600 mt-5 py-2 rounded-2xl hover:bg-indigo-700 hover:-translate-y-1 transition-all duration-500 text-white font-semibold mb-2"
                >
                  Linkedin
                </button>
                <button
                  type="submit"
                  className="block w-full  bg-indigo-600 mt-5 py-2 rounded-2xl hover:bg-indigo-700 hover:-translate-y-1 transition-all duration-500 text-white font-semibold mb-2"
                >
                  Google
                </button>
                <button
                  type="submit"
                  className="block w-full  bg-indigo-600 mt-5 py-2 rounded-2xl hover:bg-indigo-700 hover:-translate-y-1 transition-all duration-500 text-white font-semibold mb-2"
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

export default IndexPage;
