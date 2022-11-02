import NavPerfil from './../../../components/perfil/NavPerfil'
import {Footer} from './../../../components/Footer'
import Sidebar from './../../../components/Sidebar/Sidebar';


export const MapaUI = ({children}) => {
    return(
        <div className="w-[100vw] h-[100vh]">
            <NavPerfil />
            <div className="flex">
                <Sidebar />
                <div className="w-[100%]">
                    <div className="px-20 my-10">
                        <h2 className="text-[32px] font-[600]">¡Bienvenido!</h2>
                    </div>
                    <div className="px-20 mb-10">
                        <p className="text-[24px] font-[500]">Mapa para recibir ofertas automaticas</p>
                    </div>
                    <div className="flex px-20 justify-between flex-wrap">
                        {children}
                    </div>
                </div>
            </div>
            <div>
                <Footer />
            </div>
        </div>
        
    )
}
