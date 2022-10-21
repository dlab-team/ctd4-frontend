import React from "react";
import Review1 from '../../../assets/images/Review1.jpg'
import Review2 from '../../../assets/images/Review2.jpg'
import Review3 from '../../../assets/images/Review3.jpg'
import Rating from '../../../assets/images/Rating.JPG'

export function Section5() {

    return (

<div className="container">
        <div className="flex  mt-20 lg:mt-40 block">

            <div className="">
                
                <h1 className="text-[5px] md:text-[32px] font-[600] text-[#000000]">DEVsafiamos el sistema</h1>
                
            </div>
                
            <div className="">
                
                <p className="text-[5px] md:text-[32px] font-[600] text-[#000000]">¿Escasez de talento Senior? No te preocupes, en Devsafio encontrarás el talento que necesitas en nuestro programa Mentorías.</p>
                <p className="text-[5px] md:text-[32px] font-[600] text-[#000000]">Completa el formulario y te contactaremos en breve para acompañarte en la búsqueda de Talento TI que necesitas.</p>

        {/* Agregar imagen */}
                <p className="text-[5px] md:text-[32px] font-[600] text-[#000000]">¡Agenda una asesoría con nosotros si quieres saber más sobre cómo acelerar y potenciar tu próximo Talento TI!</p>

                <div className="flex flex-col justify-center items-center">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white text-[14px] font-semibold py-2 px-4 rounded">Guardar</button>
                </div>

                
            </div>
</div>
    

            


        </div>











    );

}
