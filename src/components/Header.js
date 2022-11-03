import logo from '../assets/images/devSafio-logo.svg'
import { Link } from 'react-router-dom'


export function Header() {

  return (<>
    <header className="flex items-center justify-between bg-[#2738F5] h-24 text-zinc-100">
      <div className="logo ml-24">
        <img src={logo} alt="" className="w-44" />
      </div>

      <nav className=" flex items-center gap-8 mr-24 text-xl">
        <a href="">Inicia sesión</a>
        <a href="">Administra la página</a>
        <Link to="/login" className="border-solid border-zinc-100 border py-4 px-4  rounded-md inline hover:opacity-80">Regístrate</Link>
        <Link to="/register" className="bg-zinc-100 py-4 px-4  rounded-md inline hover:opacity-80 text-[#2738F5]" >Contáctanos</Link>
      </nav>
    </header>

  </>)
}