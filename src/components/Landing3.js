import image3 from '../assets/images/imageLanding3.png'

export default function () {
  return (<>
    <div className=" flex w-full  bg-[#F6F5FF] justify-center gap-x-36">


      <img src={image3} alt="" className="mt-12 mb-20" />

      <div className="flex flex-col justify-center items-center">
        <p className="text-5xl font-bold text-[#000000]">DEVsafiamos el <br /> sistema</p>
        <p className="mt-10 text-[#000000]">¿Escasez de talento Senior? No te preocupes, en Devsafio <br /> encontrarás el talento que necesitas en nuestro programa <br /> Mentorías.</p>
        <a href="" className="mt-10 font-bold text-xl px-6 py-5 bg-hero-gradient text-white rounded-full" >COMPLETAR  FORMULARIO</a>

      </div>
    </div>
  </>)
}