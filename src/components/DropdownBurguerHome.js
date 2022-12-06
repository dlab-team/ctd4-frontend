import { Fragment} from 'react'
import { Menu, Transition } from '@headlessui/react'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export function DropdownBurguerHome() {

  return (

    <>

    <Menu as="div" className="relative inline-block text-left mr-10">
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
                  <a href="/perfil" className={classNames(active ? 'bg-gray-100 text-gray-900' : 'text-gray-700','block px-4 py-2 text-base')}>
                    Inicia sesión
                  </a>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <a href="/register" className={classNames(active ? 'bg-gray-100 text-gray-900' : 'text-gray-700','block px-4 py-2 text-base')}>
                    Regístrate
                  </a>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <a href="#" className={classNames(active ? 'bg-gray-100 text-gray-900' : 'text-gray-700','block px-4 py-2 text-base')}>
                    Contáctanos
                  </a>
                )}
              </Menu.Item>
            </div>
            
          </Menu.Items>
        </Transition>
      </Menu>

  </>
  )
}