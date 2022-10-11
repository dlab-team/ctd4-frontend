import React, { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/solid';
import Profile from '../assets/images/Profile.jpg'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Dropdown() {
  return (

    <>

  {/*Notificacion*/}
    <div class="absolute inset-y-0 right-0 flex justify-center items-center md:pr-2 md:static md:inset-auto md:ml-6 md:pr-0 md:space-x-6">
        <button type="button" className="bg-none p-1 text-white hover:text-white flex outline-none hover:opacity-80">
            <span class="sr-only">View notifications</span>
            {/*Icon Bell*/}
            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
            </svg>
        </button>
    

    {/*Dropdown*/}
      <Menu as="div" className="md:relative md:inline-block md:text-left hidden">
        <div>
          <Menu.Button className="inline-flex w-full text-base font-medium text-gray-700">
            <div className="mt-10 flex rounded-full outline-none ring-1 ring-offset-1 ring-gray-500 rounded-full hover:opacity-80">
              <img className="w-12 h-12 inline object-cover rounded-full" src={Profile} />
            </div>
            {/* object-cover */}
            <ChevronDownIcon className="mr-6 ml-2 h-32 w-5 fill-white" aria-hidden="true" />
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
          <Menu.Items className="absolute right-6 z-10 -mt-8 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="py-1">
              <Menu.Item>
                {({ active }) => (
                  <a href="#" className={classNames(active ? 'bg-gray-100 text-gray-300' : 'text-gray-700', 'block px-4 py-2 text-sm font-medium')}>
                  Sing in as camila05
                  </a>
                  
                )}
              </Menu.Item>
            </div>
            <div className="py-1">
              <Menu.Item>
                {({ active }) => (
                  <a href="#" className={classNames(active ? 'bg-gray-100 text-gray-900' : 'text-gray-700','block px-4 py-2 text-sm')}>
                    Ayuda
                  </a>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <a href="#" className={classNames(active ? 'bg-gray-100 text-gray-900' : 'text-gray-700','block px-4 py-2 text-sm')}>
                    Configuración
                  </a>
                )}
              </Menu.Item>
            </div>
            <div className="py-1">
              <Menu.Item>
                {({ active }) => (
                  <a href="#" className={classNames(active ? 'bg-gray-100 text-gray-900' : 'text-gray-700','block px-4 py-2 text-sm')}>
                    Sign out
                  </a>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>

    </div>

    </>
  )
};

