import React from 'react';

export const Cards = ({children}) => {
    const arrayChildren = Array.from(children)
    return(
        <>
            {arrayChildren.map((i, index) => {
                return(
                    <div key={index} className="w-[183px] h-[200px] bg-[#E2F2FE] rounded-[8px] shadow-md p-5 m-5">
                        <div className="w-[40px] h-[40px] bg-[#000000] rounded-full flex justify-center items-center">
                            {React.createElement(`${i.type}`, {className: "text-[#FFFFFF]"}, `${index+1}`)}
                        </div>
                        <div className="my-5">
                            {React.createElement(`${i.type}`, {className: "text-[20px]"}, `${i.props.children}`)}
                        </div>
                    </div>
                )
            })}
        </>
    )      
}
