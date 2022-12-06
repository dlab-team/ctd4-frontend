import NavPerfil from './../../../components/perfil/NavPerfil'
import {Footer} from './../../../components/Footer'
import Sidebar from './../../../components/Sidebar/Sidebar';


export const MapaUI = ({children}) => {
    return(
        <div className="w-[100vw] min-h-[100vh] relative pb-[120px]">
            <NavPerfil />
            <div className="flex">
                <Sidebar />
                <div className="md:w-[70%]">
                    <div className="px-20 my-10">
                        <h2 className="ml-4 md:ml-0 text-[32px] font-[600]">¡Bienvenido!</h2>
                    </div>
                    <div className="px-20 mb-10">
                        <p className="text-center md:text-start text-[24px] font-[500]">Mapa para recibir ofertas automaticas</p>
                    </div>
                    <div className="flex px-20 justify-between max-lg:justify-center flex-wrap">
                        {children}
                    </div>
                </div>
            </div>
            <div className="w-full absolute bottom-0">
                <Footer />
            </div>
        </div>
        
    )
}
