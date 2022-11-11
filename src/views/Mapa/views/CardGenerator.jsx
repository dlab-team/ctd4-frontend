import React, {useState} from 'react';
import {ShowResponseFromBack} from './../../../components/Alerts'
import './animationButton.css'

export const CardGenerator = ({children, animationClickCard}) => {
    const arrayChildren = Array.from(children)
    const[notAccess, setNotAccess] = useState(false);
    return(
        <>
            {arrayChildren.map((text, index) => {
                return(
                    <div key={index} className={`w-[183px] h-[200px] ${text.props.href !== "" ? "bg-[#E2F2FE]" : "bg-[#E2F2FE] opacity-30"} rounded-[8px] shadow-md p-5 m-5 button`} onClick={() => text.props.href !== "" ? animationClickCard(index, text.props.href) : setNotAccess(true)}>
                        <div className="w-[40px] h-[40px] bg-[#000000] rounded-full flex justify-center items-center">
                            <p className="text-[#FFFFFF]">{(index+1)}</p>
                        </div>
                        <div className="my-5">
                            {text}
                        </div>
                    </div>
                )
            })}

            {notAccess && 
                <ShowResponseFromBack>
                    <p>Para acceder a este paso debes completar el anterior</p>
                    <button onClick={() => setNotAccess(false)}>Entendido</button>
                </ShowResponseFromBack>
            }
        </>
    )      
}
