import React from "react";
import Review1 from '../assets/images/Review1.jpg'
import Review2 from '../assets/images/Review2.jpg'
import Review3 from '../assets/images/Review3.jpg'
import Rating from '../assets/images/Rating.JPG'

export function Landing5() {

    return (

    <div>

        <div className="flex justify-center mt-40">
            <h1 className="text-5xl font-bold text-[#000000]">¿Que dicen de nosotros?</h1>
        </div>
            

        <div className="container flex grid-cols-3 gap-10 justify-center">

            {/* Reviews 1 */}
            
            <div className="w-[340px] h-[367px] py-4 px-8 bg-white shadow-lg rounded-lg my-8">

                <div className="Imagen grid grid-1 md:grid-cols-2 lg:grid-cols-3 gap-2 mt-8">
                    <img className="" src={Rating}/>
                </div>
            
                    <div className="Coments md:text-[16px] text-[#000000] leading-relaxed">
                        <p className="mt-8 mr-16">Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna</p>
                    </div>
                        
                        <div className="Imagen grid grid-1 md:grid-cols-2 lg:grid-cols-2 gap-2 mt-10">
                            <img className="w-[60px] h-[60px] ml-16 object-cover rounded-full" src={Review1}/>
                                <div className="mt-2">
                                    <p className="text-[15px] font-semibold text-[#000000] leading-relaxed">Marian Rivero</p>
                                    <p className="text-[13px] font-light text-[#000000] leading-relaxed">Santiago, Chile</p>
                                </div>
                        </div>
            </div>  

            {/* Reviews 2 */}

            <div className="w-[340px] h-[367px] py-4 px-8 bg-white shadow-lg rounded-lg my-8">

                <div className="Imagen grid grid-1 md:grid-cols-2 lg:grid-cols-3 gap-2 mt-8">
                    <img className="" src={Rating}/>
                </div>
            
                    <div className="Coments md:text-[16px] text-[#000000] leading-relaxed">
                        <p className="mt-8 mr-16">Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna</p>
                    </div>
                        
                        <div className="Imagen grid grid-1 md:grid-cols-2 lg:grid-cols-2 gap-2 mt-10">
                            <img className="w-[60px] h-[60px] ml-16 object-cover rounded-full" src={Review2}/>
                                <div className="mt-2">
                                    <p className="text-[15px] font-semibold text-[#000000] leading-relaxed">Marian Rivero</p>
                                    <p className="text-[13px] font-light text-[#000000] leading-relaxed">Santiago, Chile</p>
                                </div>
                        </div>
            </div> 

            {/* Reviews 3 */}

            <div className="w-[340px] h-[367px] py-4 px-8 bg-white shadow-lg rounded-lg my-8">

                <div className="Imagen grid grid-1 md:grid-cols-2 lg:grid-cols-3 gap-2 mt-8">
                    <img className="" src={Rating}/>
                </div>
            
                    <div className="Coments md:text-[16px] text-[#000000] leading-relaxed">
                        <p className="mt-8 mr-16">Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna</p>
                    </div>
                        
                        <div className="Imagen grid grid-1 md:grid-cols-2 lg:grid-cols-2 gap-2 mt-10">
                            <img className="w-[60px] h-[60px] ml-16 object-cover rounded-full" src={Review3}/>
                                <div className="mt-2">
                                    <p className="text-[15px] font-semibold text-[#000000] leading-relaxed">Marian Rivero</p>
                                    <p className="text-[13px] font-light text-[#000000] leading-relaxed">Santiago, Chile</p>
                                </div>
                        </div>
            </div> 

        </div>   

    </div>




       
        
        
      
    


);
  
}
