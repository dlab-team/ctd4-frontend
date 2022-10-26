import React from 'react'
import CardsLandingPage2 from '../../../components/CardsLandingPage2'
import imagen1 from '../../../assets/images/pablita-girls-holding-hourglass 1.png'
import imagen2 from '../../../assets/images/pablita-636 1.png'
import imagen3 from '../../../assets/images/pablita-people-holding-pieces-of-puzzle 1.png'

export function NewSection2() {
  return (
    <>

      <div className=" flex  flex-col  justify-center">

        <div className="container">
          <div
            className="flex flex-col lg:flex-row place-content-center justify-around content-center items-center  mt-14 mb-24"
            id="program"
          >
            <div className="flex flex-col items-center   p-3">

              <p className="font-[600] text-[2rem]  mt-[1.25rem] text-[#140B34] mb-2.5 ">
                ¿Cómo funcionamos?
              </p>

              <p className="text-[#232323] font-[400] text-2xl text-center mt-16">
                Da click a nuestro video y en sólo 60 segundos conoce <b className="text-[#2738F5]"> Devsafio </b>y cómo estamos <b className="text-[#2738F5]"> cambiando el mundo TI</b>, acelerando y potenciando las células tecnológicas.
              </p>

            </div>
            <div className="box-border p-3 ">
              <iframe
                className=" w-[25rem] h-[14rem] md:w-[39.18rem] md:h-[26.43rem] rounded-2xl"
                src="https://youtube.com/embed/z5NPi7WrViU"
                frameborder="0"
                allow="autoplay; encrypted-media"
                allowfullscreen
                title="video"
              />{" "}
            </div>
          </div>


        </div>

        <div className="section3 flex flex-col text-green-900 w-full bg-[#E2F2FE] ">

          <div className="text-center mt-10">
            <p className="text-[#140B34] font-[600] text-3xl">
              Sin Juniors no hay Seniors

            </p>
            <p className="text-[#232323] text-2xl leading-9 mt-10 mx-28 ">
              En este programa unimos la <b className="text-[#2738F5]"> rapidez, eficiencia y visión de un desarrollador junior </b>junto con <b className="text-[#2738F5]">la experiencia y liderazgo de un senior TI</b>, quien acompañará al talento junior contratado para potenciar tu área digital, acá te explicamos cómo:
            </p>
          </div>

          <div className=" flex flex-row mx-24 gap-10 mb-20 mt-24">


            <div className=" flex flex-col gap-10 text-center items-center max-w-[64]">
              <img src={imagen1} alt="" className="items-center pt-4" />
              <p className="text-[#140B34] text-2xl font-[600] leading-9 w-[64]">Aceleramos</p>
              <p className="text-[#232323] text-xl font-[400] leading-8 max-w-[64]"> <b> Aceleramos el proceso de contratación. </b> Una vez que nos envíes tu necesidad de talento digital recibirás un listado con los mejores candidatos en <b> 5 días.</b></p>
            </div>


            <div className=" flex flex-col gap-10 text-center items-center max-w-[64]">
              <img src={imagen2} alt="" className="items-center" />
              <p className="text-[#140B34] text-2xl font-[600] leading-9 w-[64]">Acompañamos</p>

              <div className="">
                <p className="text-[#232323] text-xl font-[400] leading-8">Nosotros nos hacemos cargo, tú creces. Todos los desarrolladores que contrates <b> serán guiados y apoyados a nivel técnico </b> por un mentor senior TI experto en tu área <b> sin ningún costo ($0). </b> </p>

              </div>
            </div>


            <div className=" flex flex-col gap-10 text-center items-center max-w-[64]">
              <img src={imagen3} alt="" className="items-center pt-4" />
              <p className="text-[#140B34] text-2xl font-[600] leading-9 w-[64]">Potenciamos</p>
              <p className="text-[#232323] text-xl font-[400] leading-8 max-w-[64]">
                Potenciamos y retenemos el talento. Realizamos un <b>seguimiento</b>  de alta calidad para <b>potenciar el crecimiento y desarrollo técnico</b>  de todos los desarrolladores contratados.
              </p>

            </div>

          </div>

        </div>

      </div>
    </>
  )
}

