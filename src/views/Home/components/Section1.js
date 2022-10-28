
import { Header } from '../../../components/Header'
import { Link } from "react-router-dom"
import heroImage from '../../../assets/images/Development.png'

export function Section1() {
  return (

    <>

      <div className="bg-hero-gradient2 flex " >
        <div className="flex-col">
          <h1 className=" text-7xl font-bold mt-20 ml-20">¿Buscas talento TI?</h1>

          <div className="content flex">
            <div className="hero  mt-4 mb-[15rem] flex flex-col  items-start ml-24 ">
              <p className=" font-medium  text-4xl  mt-10 leading-[3.37rem]">Contrata <b className="text-[#008FF7]"> Talento TI </b>rápido,</p>
              <p className=" font-medium  text-4xl ">  inteligente y eficiente </p>
              <p className=" font-medium  text-xl    mt-8 leading-8">Te encontramos profesionales en 5 días y los acompañamos por 3 meses con tutores senior para potenciar y acelerar sus habilidades técnicas</p>
              <Link to="/register" className="mt-32 bg-zinc-100 text-[#0F0BC7] py-[1.3rem] px-8  rounded-3xl text-2xl font-bold  hover:opacity-80" href="">QUIERO CONTRATAR</Link>
            </div>


            <div className=" flex-col ">
              <img src={heroImage} alt="" className='w-[98rem]  mt-[4rem] mb-8' />
            </div>

          </div>

        </div>




      </div>

    </>

  )
}