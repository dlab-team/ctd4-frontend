/*
Como hijo del componente ShowResponseFromBack, debes escribir el texto del mensaje y un <button> con la funcion que cambiara el estado que hace desaparecer la ventana

<ShowResponseFromBack>
    <p>{responseFromBack}</p>
    <button onClick={() => setResponseFromBack(false)}>Entendido!</button>
</ShowResponseFromBack>

*/

import ReactDOM from "react-dom";

function ShowResponseFromBack({ children }){

    return ReactDOM.createPortal(
        <div className="alerta">
            <div className="message">
                {children}
            </div>
        </div>,
        document.getElementById("modal")
    );
}





/*
Loading es un componente que muestra un loading cuando se hace una llamada al servidor. Tampoco es necesario posicionarlo con css.
Loading debe condicionarse a un estado que se active cuando se haga una llamada al servidor
*/
function Loading(){

    return ReactDOM.createPortal(
        <div className="containerLoading">
            <div className="loading">
                
            </div>
        </div>,
        document.getElementById("modal")
    );
}

export {ShowResponseFromBack, Loading}; 
