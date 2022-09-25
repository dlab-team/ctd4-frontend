
import logo from '../assets/images/devSafio-logo.svg'
import { Header } from './Header'


export function Landing1() {
  return (

    <>

      <div className="bg-hero-gradient flex justify-center w-full " >

        <div className="container">
          <div className="flex   w-full  text-zinc-100 ">


            <div className="flex  flex-col w-full mt-[4rem] mx-auto " >

              <Header />

              <div className="hero mt-[6rem] lg:mt-[11rem] mb-[15rem] flex flex-col justify-center w-full">
                <h1 className="text-4xl  sm:text-6xl md:text-7xl font-bold">¿Buscas Talento TI?</h1>
                <p className=" font-medium opacity-80 text-2xl mx-auto mt-10">Contrata talento TI</p>
                <p className=" font-medium opacity-80 text-2xl mx-auto"> Rapido Inteligente y Eficaz </p>
                <p className=" font-medium opacity-80 text-lg mx-[3rem] text-center md:mx-auto mt-5">Profecionales En 5 dias con tutores seniors por 3 meses</p>
                <a className="mt-14 bg-zinc-100 text-[#0F0BC7] py-5 px-10 radius rounded-full text-xl font-bold  hover:opacity-80" href="">Empieza Ahora</a>


                <a href="" className="bg-zinc-100 text-black py-3 px-7 radius rounded-full mt-[4rem] lg:hidden" > Sign Up</a>
                <a href="" className="border-solid border-zinc-100 border-2 py-3 px-7 radius rounded-full mt-[2rem] lg:hidden">Sign In</a>


                <div className="hidden  lg:block mt-[4rem] xl:hidden">
                  <a href="" className="bg-zinc-100 text-black py-3 px-7 radius rounded-full  xl:hidden mt-[10rem] mr-10" > Sign Up</a>
                  <a href="" className="border-solid border-zinc-100 border-2 py-3 px-7 radius rounded-full mt-[2rem] ">Sign In</a>
                </div>

              </div>


            </div>




          </div>

        </div>
      </div>

    </>

  )
}