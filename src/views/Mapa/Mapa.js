import Sidebar from './../../components/Sidebar/Sidebar';
import {MapaUI} from './MapaUI';
import {Cards} from './Cards'


export const Mapa = () => {
    return(
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
    )
}