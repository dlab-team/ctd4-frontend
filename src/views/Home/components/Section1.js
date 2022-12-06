import { Header } from '../../../components/Header';
import { Link } from 'react-router-dom';
import heroImage from '../../../assets/images/Development.png';

export function Section1() {
  return (
    <>
      <div className="bg-hero-gradient2 flex font-[Poppins] justify-center">
        <div className="flex-col text-center md:text-left mx-14 md:mx-0">
          <h1 className="text-6xl md:text-7xl font-bold mt-24 md:mt-20 md:ml-20">
            ¿Buscas talento TI?
          </h1>

          <div className="content flex text-center md:text-left mx-14 md:mx-0">
            <div className="hero mt-4 mb-[15rem] flex flex-col  items-start md:ml-24">
              <p className=" font-medium  text-4xl mt-16 md:mt-10 leading-[3.37rem]">
                Contrata <b className="text-[#008FF7]"> Talento TI </b>rápido,
              </p>
              <p className=" font-medium  text-4xl ">
                {' '}
                inteligente y eficiente{' '}
              </p>
              <p className=" font-medium  text-xl  mt-14 md:mt-8 leading-8">
                Te encontramos profesionales en 5 días y los acompañamos por 3
                meses con tutores senior para potenciar y acelerar sus
                habilidades técnicas
              </p>
              <Link
                to="/register"
                className="mt-20 md:mt-32 bg-zinc-100 text-[#0F0BC7] py-[1.3rem] px-8  rounded-3xl text-2xl font-bold  hover:opacity-80"
                href=""
              >
                QUIERO CONTRATAR
              </Link>
              <p className="mt-20 font-medium  text-4xl">
                Si eres <b>Talento TI</b>
              </p>
              <Link
                to="/formulario"
                className="mt-10 bg-zinc-100 text-[#0F0BC7] py-[1.3rem] px-8  rounded-3xl text-2xl font-bold  hover:opacity-80"
                href=""
              >
                POSTULAR
              </Link>
            </div>

            <div className="hidden md:block flex-col ">
              <img
                src={heroImage}
                alt=""
                className="w-[98rem] mt-[4rem] mb-8"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
