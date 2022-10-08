/*
Como hijo del componente Message, debes escribir el texto del mensaje y un <button> con la funcion que 

<ShowResponseFromBack>
    <p>{loginFailMessage}</p>
    <button onClick={() => setLoginFailMessage(false)}>Entendido!</button>
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
        <div className="alerta">
            <div className="message">
                <p>Espere..........</p>
            </div>
        </div>,
        document.getElementById("modal")
    );
}

export {ShowResponseFromBack, Loading}; 
