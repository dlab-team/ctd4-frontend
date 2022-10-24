import React from "react";
import imageForm from "../../../assets/images/imageForm.png";

export function Section5() {

    return (
        <div className="flex justify-center">
            <div className="container">
                <div className="flex w-full mt-10 mb-24 mt-40 gap-x-10">
                    <div className="">
                        <div>
                            <h1 className="mx-32 text-[5px] md:text-[32px] font-semibold text-[#000000]">DEVsafiamos el sistema</h1>
                        </div>
                        <div>
                            <p className="mt-16 mx-32 text-[5px] md:text-[20px] text-[#000000]">¿Escasez de talento Senior? No te preocupes, en <a href="#" className="font-semibold text-[#2738F5] ">Devsafio</a> encontrarás el talento que necesitas en nuestro programa Mentorías.</p>
                        </div>
                        <div>
                            <p className="mt-10 mx-32 text-[5px] md:text-[20px] text-[#000000]">Completa el formulario y te contactaremos en breve para acompañarte en la búsqueda de Talento TI que necesitas.</p>
                        </div>
                    {/* imagen */}
                        <img src={imageForm} className="hidde mx-auto my-10 w-[443px] h-[372px]" alt="" />
                        <p className="mx-32 text-[5px] md:text-[20px] text-[#000000] font-bold">¡Agenda una asesoría con nosotros si quieres saber más sobre cómo acelerar y potenciar tu próximo Talento TI!</p>
                    {/* button */}
                        <div className="flex items-start mx-32 mt-10">
                            <button className="h-[68px] w-[166px] bg-[#2738F5] hover:bg-blue-600 text-[#FFFFFF] text-[24px] font-bold py-2 px-4 rounded-3xl">AGENDAR</button>
                        </div>
                    </div>

                    {/* formulario */}

                    <div className="bg-[#140B34] h-[1050px] w-[590px] rounded-2xl mr-40">
                        <div>
                            <h1 className="mx-14 my-10 text-[5px] md:text-[20px] font-semibold text-[#FFFFFF] mb-6">Si eres empresa y buscas talento TI, déjanos tu información en este formulario. En breve te contactaremos:</h1>
                        </div>
                        <div className="flex flex-col md:flex-row md:justify-between mx-14 mt-10">
                            <div>
                                <label for="firts_name" className="block mb-4 text-[16px] font-medium text-[#FFFFFF]">Nombre *</label>
                                <input type="text" id="firts_name" className=" bg-[#E2F2FE] mb-3 w-[24rem] md:w-[14rem] text-gray-900 text-[14px] rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
                            </div>
                            <div>
                                <label for="last_name" className="block mb-4 text-[16px] font-medium text-[#FFFFFF]">Apellido *</label>
                                <input type="text" id="last_name" className="ml-4 bg-[#E2F2FE] mb-3 w-[24rem] md:w-[14rem] text-gray-900 text-[14px] rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
                            </div>
                        </div>
                        <div className="flex md:justify-between mt-2 mx-14">
                            <div>
                                <label for="email" className="block mb-4 text-[16px] font-medium text-[#FFFFFF]">Email corporativo *</label>
                                <input type="text" id="email" className=" bg-[#E2F2FE] mb-3 w-[24rem] md:w-[14rem] text-gray-900 text-[14px] rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
                            </div>
                            <div>
                                <label for="phone" className="block mb-4 text-[16px] font-medium text-[#FFFFFF]">Número de teléfono *</label>
                                <input type="text" id="phone_number" className="ml-4 bg-[#E2F2FE] mb-3 w-[24rem] md:w-[14rem] text-gray-900 text-[14px] rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
                            </div>
                        </div>
                        <div>
                            <label for="business" className="block mt-2 mb-4 mx-14 text-[16px] font-medium text-[#FFFFFF]">¿A que empresa perteneces? *</label>
                            <input type="tel" id="business" className="mx-14 bg-[#E2F2FE] mb-3 w-[24rem] md:w-[30rem] text-gray-900 text-[14px] rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
                        </div>
                        <div>
                            <label for="business" className="block mx-14 mt-4 mb-6 text-[16px] font-medium text-[#FFFFFF]">Cargo/área de preferencia que buscas contratar *</label>
                        </div>

                    {/* checkbox */}
                        <div className="mx-14">
                            <div className="flex items-center mb-2">
                                <input id="checkbox" type="checkbox" value="" className="w-4 h-4 text-[#2738F5] bg-[#E2F2FE] border-gray-300 focus:ring-blue-500 focus:ring-1" />
                                <label for="checkbox" className="ml-6 text-[16px] font-regular text-[#FFFFFF]">Desarrollador FrontEnd</label>
                            </div>
                            <div className="flex items-center mb-2">
                                <input id="checkbox" type="checkbox" value="" className="w-4 h-4 text-[#2738F5] bg-[#E2F2FE] border-gray-300 focus:ring-blue-500 focus:ring-1" />
                                <label for="checkbox" className="ml-6 text-[16px] font-regular text-[#FFFFFF]">Desarrollador Full Stack / Backend</label>
                            </div>
                            <div className="flex items-center mb-2">
                                <input id="checkbox" type="checkbox" value="" className="w-4 h-4 text-[#2738F5] bg-[#E2F2FE] border-gray-300 focus:ring-blue-500 focus:ring-1" />
                                <label for="checkbox" className="ml-6 text-[16px] font-regular text-[#FFFFFF]">Diseñador UX/UI</label>
                            </div>
                            <div className="flex items-center mb-2">
                                <input id="checkbox" type="checkbox" value="" className="w-4 h-4 text-[#2738F5] bg-[#E2F2FE] border-gray-300 focus:ring-blue-500 focus:ring-1" />
                                <label for="checkbox" className="ml-6 text-[16px] font-regular text-[#FFFFFF]">Analista QA</label>
                            </div>
                            <div className="flex items-center mb-2">
                                <input id="checkbox" type="checkbox" value="" className="w-4 h-4 text-[#2738F5] bg-[#E2F2FE] border-gray-300 focus:ring-blue-500 focus:ring-1" />
                                <label for="checkbox" className="ml-6 text-[16px] font-regular text-[#FFFFFF]">Desarrollador Mobile</label>
                            </div>
                            <div className="flex items-center mb-2">
                                <input id="checkbox" type="checkbox" value="" className="w-4 h-4 text-[#2738F5] bg-[#E2F2FE] border-gray-300 focus:ring-blue-500 focus:ring-1" />
                                <label for="checkbox" className="ml-6 text-[16px] font-regular text-[#FFFFFF]">Datos</label>
                            </div>
                            <div className="flex items-center mb-2">
                                <input id="checkbox" type="checkbox" value="" className="w-4 h-4 text-[#2738F5] bg-[#E2F2FE] border-gray-300 focus:ring-blue-500 focus:ring-1" />
                                <label for="checkbox" className="ml-6 text-[16px] font-regular text-[#FFFFFF]">Otra</label>
                            </div>
                        </div>
                        <div className="mx-14">
                            <label for="business" className="block mt-10 mb-6 text-[16px] font-medium text-[#FFFFFF]">¿Dudas? Déjalas acá!</label>
                            <textarea id="message" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-[#E2F2FE] rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" placeholder=""></textarea>
                        </div>

                    {/* button */}
                        <div className="flex items-start mx-14 mt-10 mb-6">
                            <button className="h-[60px] w-[137px] bg-[#FFFFFF] hover:bg-gray-200 text-[#2738F5] text-[24px] font-bold py-2 px-4 rounded-3xl">ENVIAR</button>
                        </div>

                    </div>
                </div>

            </div>
        </div>

    );

}
