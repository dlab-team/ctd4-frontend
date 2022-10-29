import React from 'react';
import './animationButton.css'

export const CardGenerator = ({children, animationClickCard}) => {
    const arrayChildren = Array.from(children)
    return(
        <>
            {arrayChildren.map((text, index) => {
                return(
                    <div key={index} className="w-[183px] h-[200px] bg-[#E2F2FE] rounded-[8px] shadow-md p-5 m-5 button" onClick={() => animationClickCard(index, text.props.href)}>
                        <div className="w-[40px] h-[40px] bg-[#000000] rounded-full flex justify-center items-center">
                            <p className="text-[#FFFFFF]">{(index+1)}</p>
                        </div>
                        <div className="my-5">
                            {text}
                        </div>
                    </div>
                )
            })}
        </>
    )      
}
