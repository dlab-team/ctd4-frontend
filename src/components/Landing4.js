import React from "react";
import business1 from '../assets/images/business1.svg'
import business2 from '../assets/images/amazon-ar21.png'


export function Landing4() {

    return (

    <div className="">

         <div className="flex justify-center mb-20">
            <h1 className="text-5xl font-bold text-[#000000]">Empresas que confían en DEVsafio</h1>
        </div>

                     
<div id="carouselExampleIndicators" class="carousel slide relative" data-bs-ride="carousel">
  <div class="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4 bg-[#000000]">
    <button
      type="button"
      data-bs-target="#carouselExampleIndicators"
      data-bs-slide-to="0"
      class="active"
      aria-current="true"
      aria-label="Slide 1"
    ></button>
    <button
      type="button"
      data-bs-target="#carouselExampleIndicators"
      data-bs-slide-to="1"
      aria-label="Slide 2"
    ></button>

  </div>
  <div class="carousel-inner relative w-full overflow-hidden">
    
        <div class="carousel-item active float-left w-full">
            <div class="flex grid-cols-3 gap-20 justify-center mb-16">

            <img
                src={business1}
                class="block w-44"
                alt="Wild Landscape"
            />

            <img
                src={business2}
                class="block w-44"
                alt="Wild Landscape"
            />

            <img
                src={business1}
                class="block w-44"
                alt="Wild Landscape"
            />

            <img
                src={business2}
                class="block w-44"
                alt="Wild Landscape"
            />
            </div>
        </div>

        <div class="carousel-item float-left w-full">
            <div class="flex grid-cols-3 gap-20 justify-center mb-16">

            <img
                src={business2}
                class="block w-44"
                alt="Wild Landscape"
            />

            <img
                src={business1}
                class="block w-44"
                alt="Wild Landscape"
            />

            <img
                src={business2}
                class="block w-44"
                alt="Wild Landscape"
            />

            <img
                src={business1}
                class="block w-44"
                alt="Wild Landscape"
            />
            </div>
        </div>
    
  </div>
  <button
    class="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
    type="button"
    data-bs-target="#carouselExampleIndicators"
    data-bs-slide="prev"
  >
    <span class="carousel-control-prev-icon inline-block bg-no-repeat bg-[#000000]" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button
    class="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
    type="button"
    data-bs-target="#carouselExampleIndicators"
    data-bs-slide="next"
  >
    <span class="carousel-control-next-icon inline-block bg-no-repeat bg-[#000000]" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>


        

    </div>
            

    );
}