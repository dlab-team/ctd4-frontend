import React from 'react'
import CardsLandingPage2 from '../../../components/CardsLandingPage2'


export function Section2() {
  return (
    <>

      <div className=" flex  justify-center">

        <div className="container">
          <div
            className="flex flex-col lg:flex-row place-content-center justify-around content-center items-center pb-[5.25rem] mt-16 mb-24"
            id="program"
          >
            <div className="flex flex-col items-center box-border  p-3">

              <h1 className="font-[900] text-[2rem] md:text-[3rem] mt-[1.25rem] text-[#2c3142] mb-2.5 ">
                DEVsafio <br />
                como cambiamos<br />
                el mundo TI
              </h1>

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
          <CardsLandingPage2 />

        </div>

      </div>
    </>
  )
}

