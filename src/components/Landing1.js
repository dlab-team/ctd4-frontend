
import logo from '../assets/images/devSafio-logo.svg'


export function Landing1() {
  return (

    <>

      <div className="bg-hero-gradient flex justify-center" >

        <div className="container">
          <div className="flex   w-full  text-zinc-100 ">

            <div className="flex flex-col w-full mt-[64px] ml-[163px] mr-[82px]">

              <header className="flex space-x-4  ">
                <div className="logo w-37">
                  <img src={logo} alt="" />
                </div>


                <div className="navBar flex flex-row-reverse w-full">
                  <nav className="navBar">
                    <ul className="flex space-x-10">
                      <li><a href="">¿Buscas Empleo?</a></li>
                      <li><a href="">Contrata talento</a></li>
                      <li><a href="">Programa Mentorias</a></li>
                      <li><a href="">Show The Code</a></li>
                      <li><a href="" className="border-solid border-zinc-100 border-2 py-3 px-7 radius rounded-full">Sign In</a></li>
                      <li><a href="" className="bg-zinc-100 text-black py-3 px-7 radius rounded-full">Sing Up</a ></li>
                    </ul>
                  </nav>
                </div>

              </header>


              <div className="hero mt-[189px] mb-[212px] flex flex-col justify-center w-full">
                <h1 className="text-7xl font-bold">¿Buscas Talento TI?</h1>
                <p className=" font-medium opacity-80 text-2xl mx-auto mt-10">Contrata talento TI</p>
                <p className=" font-medium opacity-80 text-2xl mx-auto"> Rapido Inteligente y Eficaz </p>
                <p className=" font-medium opacity-80 text-lg mx-auto mt-5">Profecionales En 5 dias con tutores seniors por 3 meses</p>
                <a className="mt-14 bg-zinc-100 text-[#0F0BC7] py-5 px-10 radius rounded-full text-xl font-bold " href="">Empieza Ahora</a>


              </div>

            </div>




          </div>

        </div>
      </div>

    </>

  )
}