import {MapaUI} from './views/MapaUI';
import {CardGenerator} from './views/CardGenerator'
import {Card} from './views/Card'
import { useNavigate } from "react-router-dom";


export const Mapa = () => {
    const navigate = useNavigate();

    const animationClickCard = (index, route) => {
        document.getElementsByClassName("button")[index].style.animationDuration = "0.3s"
        document.getElementsByClassName("button")[index].style.animationName = "pressButton"
        setTimeout(() => {
            navigate(route);
        }, 300);
    }
    return(
        <MapaUI>
            <CardGenerator animationClickCard={animationClickCard}>
                <Card href="/datospersonales" text={"Completa tu perfil de usuario"} />
                <Card href="" text={"Realiza tests tecnicos"} />
                <Card href="" text={"Participa en show de codes"} />
                <Card href="" text={"Recibe ofertas de trabajo"} />
            </CardGenerator>
        </MapaUI>
    )
}
