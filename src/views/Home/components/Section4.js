import React from "react";
import business1 from '../../../assets/images/business1.svg'
import business2 from '../../../assets/images/amazon-ar21.png'


export function Section4() {

    return (

        <div className="flex flex-col">

            <div className="hidden lg:block mx-auto my-24">
                <h1 className="text-5xl font-bold text-[#000000]">Empresas que confían en DEVsafio</h1>
            </div>

            {/* Slider */}
            <div id="carouselExampleIndicators" className="hidden lg:block carousel slide relative" data-bs-ride="carousel">

                <div className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4"> {/* indicator-sliders */}
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1">
                    </button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2">
                    </button>
                </div>

                {/* Imagen Slider */}
                <div className="carousel-inner relative w-full overflow-hidden">

                    <div className="carousel-item active float-left w-full">
                        <div className="flex grid-cols-3 gap-20 justify-center mb-16">

                            <img src={business1} className="block w-44" alt="Wild Landscape" />
                            <img src={business2} className="block w-44" alt="Wild Landscape" />
                            <img src={business1} className="block w-44" alt="Wild Landscape" />
                            <img src={business2} className="block w-44" alt="Wild Landscape" />
                        </div>
                    </div>

                    <div className="carousel-item float-left w-full">
                        <div className="flex grid-cols-3 gap-20 justify-center mb-16">

                            <img src={business2} className="block w-44" alt="Wild Landscape" />
                            <img src={business1} className="block w-44" alt="Wild Landscape" />
                            <img src={business2} className="block w-44" alt="Wild Landscape" />
                            <img src={business1} className="block w-44" alt="Wild Landscape" />
                        </div>
                    </div>

                </div>

                <button
                    className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide="prev"
                >
                    <span className="carousel-control-prev-icon inline-block bg-no-repeat]" aria-hidden="true"></span>  {/* flecha prev. slider */}
                    <span className="visually-hidden">Previous</span>
                </button>
                <button
                    className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide="next"
                >
                    <span className="carousel-control-next-icon inline-block bg-no-repeat]" aria-hidden="true"></span> {/* flecha next slider */}
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

        </div>


    );
}