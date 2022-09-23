import React from 'react'
import CardsLandingPage2 from './CardsLandingPage2'


export function LandingPage2() {
  return (
    <>
      <div
        className="flex flex-row place-content-center justify-around content-center items-center pb-[84px] mt-16 mb-24"
        id="program"
      >
        <div className="flex flex-col items-center box-border pl-[134px] p-3">

          <h1 className="font-[900] md:text-[48px] mt-[20px] text-[#2c3142] mb-[9.5px] ml-[20px] md:ml-0">
            DEVsafio <br />
            como cambiamos<br />
            el mundo TI
          </h1>

        </div>
        <div className="box-border pr-[134px]  p-3">
          <iframe
            className=" md:w-[627px] md:h-[423px]"
            src="https://youtube.com/embed/z5NPi7WrViU"
            frameborder="0"
            allow="autoplay; encrypted-media"
            allowfullscreen
            title="video"
          />{" "}
        </div>
      </div>
      <CardsLandingPage2 />
    </>
  )
}

