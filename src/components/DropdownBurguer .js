import { Fragment, useState, useEffect } from 'react'
import { Menu, Transition } from '@headlessui/react'
import {ShowResponseFromBack} from './../components/Alerts'
import {closeSession} from './../utils/utils'
import axios from 'axios';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export function DropdownBurguer() {

  const [logOut, setLogOut] = useState(false);

  const userToken = JSON.parse(localStorage.getItem('user'));

  const [user, setUser] = useState([]);

  useEffect(() => {
    axios
      .get(process.env.REACT_APP_BACKEND_URL + '/user/', {
        headers: {
          'Content-Type': 'Application/json',
          Authorization: `Bearer ${userToken.token}`,
        },
      })
      .then((res) => {
        const datos = res.data;
        setUser(datos);
      });
  }, []);

  return (

    <>

    <Menu as="div" className="relative inline-block text-left mr-6">
      <div>
        <Menu.Button className="inline-flex w-full justify-center rounded-md bg-zinc-100 py-4 px-4  rounded-md inline  hover:opacity-80" >
          <div class="space-y-2">
            <div class="w-6 h-0.5 bg-[#2738F5] opacity-80"></div>
            <div class="w-6 h-0.5 bg-[#2738F5] opacity-80"></div>
            <div class="w-6 h-0.5 bg-[#2738F5] opacity-80"></div>
          </div>
        </Menu.Button>
      </div>

      <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-1 z-10  mt-1 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="py-1">
            <Menu.Item>
                {({ active }) => (
                  <a href="#" className={classNames(active ? 'bg-gray-100 text-gray-300' : 'text-gray-700', 'block px-4 py-2 text-base md:text-sm font-semibold text-blue-700')}>
                   {user.fullname} {user.status}
                  </a>
                  
                )}
              </Menu.Item>
            </div>
            <div className="py-1">
            <Menu.Item>
                {({ active }) => (
                  <a href="/perfil" className={classNames(active ? 'bg-gray-100 text-gray-900' : 'text-gray-700','block px-4 py-2 text-base md:text-sm')}>
                    Inicio
                  </a>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <a href="/datospersonales" className={classNames(active ? 'bg-gray-100 text-gray-900' : 'text-gray-700','block px-4 py-2 text-base md:text-sm')}>
                   Perfil
                  </a>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <a href="/tests" className={classNames(active ? 'bg-gray-100 text-gray-900' : 'text-gray-700','block px-4 py-2 text-base md:text-sm')}>
                  Tests técnicos
                  </a>
                )}
              </Menu.Item>
              </div>
              <div className="py-1">
              <Menu.Item>
                {({ active }) => (
                  <a href="#" className={classNames(active ? 'bg-gray-100 text-gray-900' : 'text-gray-700','block px-4 py-2 text-base md:text-sm')}>
                    Ayuda
                  </a>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <a href="#" className={classNames(active ? 'bg-gray-100 text-gray-900' : 'text-gray-700','block px-4 py-2 text-base md:text-sm')}>
                    Configuración
                  </a>
                )}
              </Menu.Item>
              </div>
            
            <div className="py-1">
              <Menu.Item>
                {({ active }) => (
                  <a href="#" onClick={() => setLogOut(true)} className={classNames(active ? 'bg-gray-100 text-gray-900' : 'text-gray-700','block px-4 py-2 text-base md:text-sm')}>
                    Cerrar Sesion
                  </a>
                )}

              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
      { logOut && 
        <ShowResponseFromBack>
          <p>¿Seguro que desea cerrar su sesion?</p>
          <div>
            <div>
              <button style={{width: "100%"}} onClick={() => setLogOut(false)}> Cancelar </button>
            </div>
            <div>
              <button onClick={() => closeSession()}>Cerrar sesión</button>
            </div>
          </div>
          
        </ShowResponseFromBack>
      }

  </>
  )
}