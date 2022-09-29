//para importar a su componente debe usar la ruta hasta la carpeta react-typed
    //import {TypedEffect} from '<ruta>/animations/react-typed'

//el componente al ser usado en el jsx, debe tener un prop text y un prop speed
    //el prop text debe tener un valor string y el prop speed debe ser tener un valor number



import Typed from 'react-typed';


export const TypedEffect = ({text, speed}) => {

    return(
        <>
            <Typed
                strings={[text]}
                typeSpeed={speed}
            />
        </>
    )
}