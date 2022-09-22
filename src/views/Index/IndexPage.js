import React from "react";
import "animate.css";
import { LockClosedIcon } from "@heroicons/react/20/solid";
// import hero from "../../assets/images/referencia.png";

const IndexPage = () => {
  return (
    <div className="bg-gradient-to-r   from-cyan-400 via-blue-500  to-purple-700 ">
      <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8  ">
        <div className="w-full max-w-md space-y-8 bg-gradient-to-r p-6 rounded-xl from-cyan-400 via-blue-500  to-purple-600">
          <div>
            <img
              className="mx-auto h-12 w-auto"
              src="https://devsafio.com/wp-content/uploads/2022/02/DEV-IMAGOTIPO-COLOR-HORIZONTAL.png"
              alt="DevSafio"
            />
            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-white">
              Sign Up
            </h2>
            <p className="mt-2 text-center text-sm text-blue-600">
              Or{" "}
              <a
                href="#"
                className="font-medium text-white hover:text-green-500"
              >
                Sign In
              </a>
            </p>
          </div>
          <form className="mt-8 space-y-6 " action="#" method="POST">
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="-space-y-px rounded-md shadow-sm">
              <div className="my-4">
                <label htmlFor="email-address" className="sr-only">
                  Correo Electronico
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Correo Electronico"
                />
              </div>
              <div className="my-4">
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Password"
                />
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                />
                <label
                  htmlFor="remember-me"
                  className="ml-2 block text-sm text-blue-900"
                >
                  Remember me
                </label>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <LockClosedIcon
                    className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                    aria-hidden="true"
                  />
                </span>
                Sign Up
              </button>
            </div>

            {/* registro con redes sociales */}
            <div>
              <h4 className="text-center text-white">Or </h4>
            </div>
            <div className="columns-3 flex md:max-w-2xl">
              <button
                type="submit"
                className="group relative sm:text-center my-2 mx-2 flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <LockClosedIcon
                    className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                    aria-hidden="true"
                  />
                </span>
                Google
              </button>
              <button
                type="submit"
                className="group relative my-2 mx-2 flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <LockClosedIcon
                    className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                    aria-hidden="true"
                  />
                </span>
                Linkedin
              </button>
              <button
                type="submit"
                className="group relative my-2 mx-2 flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <LockClosedIcon
                    className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                    aria-hidden="true"
                  />
                </span>
                GitHub
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default IndexPage;
