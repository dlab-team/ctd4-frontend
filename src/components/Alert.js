//Este es un componente que puede escribirse en cualquier jsx y nunca rompera la maquetacion que tu creaste ya que se renderiza en un portal

/*
return(
    <>
        {!loggedUser ? 
            <LoginUI functions={functions}/>
        :

            <Navigate to="/profileUser" replace={true} />
        }
        
        {loginFailMessage &&
            <Alert props={() => setLoginFailMessage(null)}>
                <p>{loginFailMessage}</p>
            </Alert>
        }
    </>
)
*/
//el component debe llevar un prop llamado close con una funcion anonima en donde debes escribir la funcion que va a cerrar la alerta
//la informacion que mostrara la alerta debe ir como jsx (html)


import ReactDOM from "react-dom";

function Alert({ children, close }){

    return ReactDOM.createPortal(
        <div className="alerta">
            {close ?
                <div className="message">
                    {children}
                    <button onClick={close}>Entendido!</button>
                </div>
            :
                <div className="message">
                    <h3>ESPERE......</h3>
                </div>
            }
        </div>,
        document.getElementById("modal")
    );
}

export {Alert}; 
