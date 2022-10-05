/*
FailMessage es un componente que puede escribirse en cualquier jsx y que no es necesario posicionarlo con css ya que esta renderizado con un portal, y tiene un posicionamiento en relacion al navegador.
Nunca rompera la maquetacion que tu creaste ya que no se renderiza en el lugar que lo posicionas.

return(
    <>
        {!loggedUser ? 
            <LoginUI />
        :

            <Navigate to="/profileUser" replace={true} />
        }
        
        {loginFailMessage &&
            <FailMessage close={() => setLoginFailMessage(null)}>
                <p>{loginFailMessage}</p>
            </FailMessage>
        }
    </>
)

FailMessage debe llevar un prop llamado close con una funcion anonima en donde debes escribir la funcion que cambiara el estado que quitara la alerta de la pantalla.
La informacion que mostrara la alerta debe ir como html hijo del componente donde lo posicionas
*/


import ReactDOM from "react-dom";

function FailMessage({ children, close }){

    return ReactDOM.createPortal(
        <div className="alerta">
            <div className="message">
                {children}
                <button onClick={close}>Entendido!</button>
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

export {FailMessage, Loading}; 
