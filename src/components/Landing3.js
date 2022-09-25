import image3 from '../assets/images/imageLanding3.png'
import { Link } from "react-router-dom"

export default function () {
  return (<>

    <div className="bg-[#F6F5FF]  flex justify-center">
      <div className="container">

        <div className=" flex w-full mt-[4rem] mb-[4rem] justify-center gap-x-36">

          {/* <div className="bg-hero-gradient mt-12 mb-20 hidden md:block  rounded-t-3xl  w-[36.18rem] h-[43.43rem ]  ">

          </div> */}
          <img src={image3} alt="" className="mt-12 mb-20 hidden md:block  rounded-t-3xl w-[36.18rem] h-[43.43rem ] bg-[length:580px_493px] bg-no-repeat bg-bottom " />

          <div className="flex flex-col justify-center items-center md:items-start">
            <p className=" text-4xl md:text-5xl font-bold text-[#000000]">DEVsafiamos el <br /> sistema</p>
            <p className="mt-10 text-[#000000]  text-center md:text-start font-medium nd:text-lg 2xl:pr-[4rem]">¿Escasez de talento Senior? No te preocupes, en Devsafio  encontrarás el talento que necesitas en nuestro programa  Mentorías.</p>
            <Link to="/register" className="mt-10 font-bold text-xl px-6 py-5 bg-hero-gradient text-white rounded-full hover:opacity-80" >COMPLETAR  FORMULARIO</Link>

          </div>
        </div>
      </div>

    </div>

  </>)
}