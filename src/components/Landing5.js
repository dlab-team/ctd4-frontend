import React from "react";
import Review1 from '../assets/images/Review1.jpg'
import Review2 from '../assets/images/Review2.jpg'
import Review3 from '../assets/images/Review3.jpg'
import Rating from '../assets/images/Rating.JPG'

export function Landing5() {

    return (

    <div className="Reviews">

        <div className="flex flex-col justify-center mt-20 lg:mt-40">
            <h1 className="text-4xl md:text-5xl text-center font-bold text-[#000000]">¿Que dicen de nosotros?</h1>
        </div>

{/* Reviews General*/}

        <div className="lg:flex items-center lg:gap-6 lg:justify-center my-12 lg:my-20">

            {/* Reviews 1 */}

            
            <div className="w-[340px] h-[367px] mb-6 ml-8 lg:ml-0 mb-6 lg:mb-0 py-4 px-8 bg-white shadow-lg rounded-lg">

                <div className="Imagen grid grid-1 md:grid-cols-2 lg:grid-cols-3 gap-2 mt-8">
                    <img className="" src={Rating}/>
                </div>
            
                    <div className="text-[15px] lg:text-[16px] text-[#000000] leading-relaxed">
                        <p className="mt-8 mr-16 leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna</p>
                    </div>
                        
                        <div className="mt-10 flex items-center">
                            <img className="w-[60px] h-[60px] object-cover rounded-full" src={Review1}/>
                                <div className="mt-2">
                                    <p className="ml-4 text-[14px] font-semibold text-[#000000] leading-relaxed">Marian Rivero</p>
                                    <p className="ml-4 text-[13px] font-light text-[#000000] leading-relaxed">Santiago, Chile</p>
                                </div>
                        </div>
            </div>  


            {/* Reviews 2 */}

            <div className="w-[340px] h-[367px] mb-6 ml-8 lg:ml-0 lg:mb-0 py-4 px-8 bg-white shadow-lg rounded-lg">

                <div className="Imagen grid grid-1 md:grid-cols-2 lg:grid-cols-3 gap-2 mt-8">
                    <img className="" src={Rating}/>
                </div>
            
                    <div className="text-[15px] lg:text-[16px] text-[#000000] leading-relaxed">
                        <p className="mt-8 mr-16 leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna</p>
                    </div>
                        
                        <div className="mt-10 flex items-center">
                            <img className="w-[60px] h-[60px] object-cover rounded-full" src={Review2}/>
                                <div className="mt-2">
                                    <p className="ml-4 text-[14px] font-semibold text-[#000000] leading-relaxed">Carlos González</p>
                                    <p className="ml-4 text-[13px] font-light text-[#000000] leading-relaxed">Santiago, Chile</p>
                                </div>
                        </div>
            </div>  

            {/* Reviews 3 */}

            <div className="w-[340px] h-[367px] ml-8 lg:ml-0 lg:mb-0 py-4 px-8 bg-white shadow-lg rounded-lg"> {/*sin mb-6*/}

                <div className="Imagen grid grid-1 md:grid-cols-2 lg:grid-cols-3 gap-2 mt-8">
                    <img className="" src={Rating}/>
                </div>
            
                    <div className="text-[15px] lg:text-[16px] text-[#000000] leading-relaxed">
                        <p className="mt-8 mr-16 leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna</p>
                    </div>
                        
                        <div className="mt-10 flex items-center">
                            <img className="w-[60px] h-[60px] object-cover rounded-full" src={Review3}/>
                                <div className="mt-2">
                                    <p className="ml-4 text-[14px] font-semibold text-[#000000] leading-relaxed">Sebastian López</p>
                                    <p className="ml-4 text-[13px] font-light text-[#000000] leading-relaxed">Santiago, Chile</p>
                                </div>
                        </div>
            </div>  

        </div>   

    </div>




       
        
        
      
    


);
  
}
