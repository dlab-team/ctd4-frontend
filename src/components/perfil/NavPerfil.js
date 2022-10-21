import logo from "../../assets/images/devSafio-logo.svg"
import Dropdown from "../Dropdown"

const NavPerfil = () => {
    return(
            <header className="flex items-center px-10 justify-center md:justify-between bg-[#2738F5] h-20">
                <div className="ml-6 logo w-37">
                    <img src={logo} alt="" />
                </div>
                <nav className="text-white hidden md:block space-x-8">
                </nav>
        
                <Dropdown/>

        </header>
    )
}

export default NavPerfil