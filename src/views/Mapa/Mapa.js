import Sidebar from './../../components/Sidebar/Sidebar';
import {MapaUI} from './MapaUI';
import {Cards} from './Cards';
import NavPerfil from './../../components/perfil/NavPerfil'
import {Footer} from './../../components/Footer'


/*
Cards es un componente que generara una card por cada etiqueta con texto que se le pase como hijo.
El texto corresponde al texto de la card y el numero de la card se genera automaticamente.
*/

export const Mapa = () => {
    return(
        <div className="w-[100vw] h-[100vh]">
            <NavPerfil />
            <div className="flex">
                <Sidebar />
                <MapaUI>
                    <Cards>
                        <p>Completa tu perfil de usuario</p>
                        <p>Realiza tests tecnicos</p>
                        <p>Participa en Show The Codes</p>
                        <p>Recibe ofertas de trabajo</p>
                    </Cards>
                </MapaUI>
            </div>
            <div style={{width: "100vw", position:"absolute", bottom:0}}>
                <Footer />
            </div>
        </div>
    )
}