import logo from "../../assets/images/devSafio-logo.svg"
import Dropdown from "../Dropdown"
import {DropdownBurguer} from "../DropdownBurguer ";

const NavPerfil = () => {
    return(
            <header className="flex items-center px-4 justify-between bg-[#2738F5] h-20">
                <div className="ml-6 logo w-37">
                    <img src={logo} alt="" />
                </div>
                <nav className="text-white hidden md:block space-x-8">
                </nav>
        
                <Dropdown/>
                <div className="md:hidden">
                <DropdownBurguer/>
                </div>

        </header>
    )
}

export default NavPerfil