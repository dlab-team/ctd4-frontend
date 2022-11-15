import logo from '../assets/images/devSafio-logo.svg';
import { Link } from 'react-router-dom';
import { DropdownBurguerHome } from './DropdownBurguerHome';// 


export function Header() {

  return (
  <>
    <header className="flex items-center justify-between bg-[#2738F5] h-24 text-zinc-100">
      <div className="logo ml-14 md:ml-24">
        <a href="http://localhost:3001/">
          <img src={logo} alt=""/>
        </a>
      </div>

      <nav className="flex items-center gap-8 mr-24 text-xl">
        <Link to="/login" className="hidden md:block">Inicia sesión</Link>
        <Link to="/register" className="hidden md:block border-solid border-zinc-100 border py-4 px-4  rounded-md inline hover:opacity-80">Regístrate</Link>
        <Link to="" className="hidden md:block bg-zinc-100 py-4 px-4  rounded-md inline hover:opacity-80 text-[#2738F5]" >Contáctanos</Link>
      </nav>

    <div className="block md:hidden">
      <DropdownBurguerHome />
    </div>

    </header>

  </>
  )
}