import {MapaUI} from './views/MapaUI';
import {CardGenerator} from './views/CardGenerator'
import {TextCard} from './views/TextCard'

export const Mapa = () => {
    return(
        <MapaUI>
            <CardGenerator>
                <TextCard href="/perfil" text={"Completa tu perfil de usuario"} />
                <TextCard href="/datospersonales" text={"Realiza tests tecnicos"} />
                <TextCard href="/perfileducacional" text={"Participa en show de codes"} />
                <TextCard href="/perfileducacional" text={"Recibe ofertas de trabajo"} />
            </CardGenerator>
        </MapaUI>
    )
}
