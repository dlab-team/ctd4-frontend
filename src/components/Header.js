import logo from '../assets/images/devSafio-logo.svg'
import { Link } from 'react-router-dom'


export function Header() {

  return (<>
    <header className="flex items-center justify-center md:justify-between space-x-8">
      <div className="logo w-37">
        <img src={logo} alt="" />
      </div>
      <nav className="hidden lg:block space-x-8">
        <a href="">¿Buscas Empleo?</a>
        <a href="">Contrata talento</a>
        <a href="">Programa Mentorias</a>
        <a href="">Show The Code</a>
        <Link to="/login" className="border-solid border-zinc-100 border-2 py-3 px-7 radius rounded-full hidden xl:inline hover:opacity-80">Sign In</Link>
        <Link to="/register" className="bg-zinc-100 text-black py-3 px-7 radius rounded-full hidden xl:inline hover:opacity-80" > Sign Up</Link>

      </nav>
    </header>

  </>)
}