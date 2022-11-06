import Card from './components/Card'
import InformacionPersonal from './components/InformacionPersonal'
import NavPerfil from './../../components/perfil/NavPerfil'


const Formulario = () => {
    return(
        <div className="">
            <div className="mb-5">
                <NavPerfil />
            </div>
            <Card />
            <InformacionPersonal />
        </div>
    )
}

export default Formulario