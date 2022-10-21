import React from "react";
import imageForm from "../../../assets/images/imageForm.png";

export function Section5() {

    return (
        
<div className="flex justify-center ">
    <div className="container">
        <div className="flex w-full mt-10 mb-24 lg:mt-40 block gap-x-36">

            <div className="">
                <div>
                    <h1 className="mx-44 text-[5px] md:text-[32px] font-semibold text-[#000000]">DEVsafiamos el sistema</h1>
                </div>
                <div>
                    <p className="mt-16 mx-44 text-[5px] md:text-[20px] text-[#000000]">¿Escasez de talento Senior? No te preocupes, en Devsafio encontrarás el talento que necesitas en nuestro programa Mentorías.</p>
                </div>
                <div>
                    <p className="mt-10 mx-44 text-[5px] md:text-[20px] text-[#000000]">Completa el formulario y te contactaremos en breve para acompañarte en la búsqueda de Talento TI que necesitas.</p>
                </div>
                    <img src={imageForm} className="mx-auto my-10 w-[443px] h-[372px]" alt="" />
            
                    <p className="mx-44 text-[5px] md:text-[20px] text-[#000000] font-bold">¡Agenda una asesoría con nosotros si quieres saber más sobre cómo acelerar y potenciar tu próximo Talento TI!</p>

                <div className="flex items-start mx-44 mt-10">
                    <button className="h-[68px] w-[166px] bg-[#2738F5] hover:bg-blue-700 text-[#FFFFFF] text-[24px] font-bold py-2 px-4 rounded">AGENDAR</button>
                </div>    
            </div>

        {/* formulario */}

            <div className="bg-[#140B34] h-[820px]">
                <div>
                    <h1 className="mt-10 text-[5px] md:text-[20px] font-semibold text-[#FFFFFF] mb-6">Si eres empresa y buscas talento TI, déjanos tu información en este formulario. En breve te contactaremos:</h1>
                </div>

                    <div className="flex flex-col md:flex-row md:justify-between">
                        <div>
                            <label for="firts_name" className="block mb-4 text-[16px] font-medium text-[#FFFFFF]">Nombre *</label>
                            <input type="text" id="firts_name" className="bg-[#E2F2FE] mb-3 w-[24rem] md:w-[18rem] text-gray-900 text-[14px] rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"/>
                        </div>
                        <div>
                            <label for="last_name" className="block mb-4 text-[16px] font-medium text-[#FFFFFF]">Apellido *</label>
                            <input type="text" id="last_name" className="bg-[#E2F2FE] mb-3 w-[24rem] md:w-[18rem] text-gray-900 text-[14px] rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"/>
                        </div>
                    </div>

                    <div className="flex md:justify-between mt-2">
                        <div>
                            <label for="email" className="block mb-4 text-[16px] font-medium text-[#FFFFFF]">Email corporativo *</label>
                            <input type="text" id="email" className="bg-[#E2F2FE] mb-3 w-[24rem] md:w-[18rem] text-gray-900 text-[14px] rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"/>
                        </div>
                        <div>
                            <label for="phone" className="block mb-4 text-[16px] font-medium text-[#FFFFFF]">Número de teléfono *</label>
                            <input type="text" id="phone_number" className="bg-[#E2F2FE] mb-3 w-[24rem] md:w-[18rem] text-gray-900 text-[14px] rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"/>
                        </div>
                    </div>

                    <div>
                        <label for="business" className="block mt-2 mb-4 text-[16px] font-medium text-[#FFFFFF]">¿A que empresa perteneces? *</label>
                        <input type="tel" id="business" className="bg-[#E2F2FE] mb-3 w-[24rem] md:w-[35rem] text-gray-900 text-[14px] rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"/>
                    </div>


                    <label for="business" className="block mt-2 mb-4 text-[16px] font-medium text-[#FFFFFF]">Cargo/área de preferencia que buscas contratar *</label>



            </div>

        </div>
    
    </div>
</div>


    
    );

}
