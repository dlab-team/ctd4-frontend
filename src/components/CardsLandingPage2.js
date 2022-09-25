import React from 'react'
import timemachine from '../assets/images/clock.svg'
import flag from '../assets/images/flag.svg'
import message from '../assets/images/message.svg'

const CardsLandingPage2 = () => {

  const posts = [
    {
      title: "Aceleramos",
      img: "https://cdn.pixabay.com/photo/2019/12/17/14/43/christmas-4701783__340.png",
      img: timemachine,
      content: "Aceleramos el proceso de contratación. Una vez que nos envíes tu necesidad de talento digital recibirás un listado con los mejores candidatos en 5 días."
    },
    {
      title: "Acompañamos",
      img: flag,
      content: "Nosotros nos hacemos cargo, tú creces. Todos los desarrolladores que contrates serán guiados y apoyados a nivel técnico por un mentor senior TI experto en tu área sin ningún costo($0)."
    },
    {
      title: "Potenciamos",
      img: message,
      content: "Potenciamos y retenemos el talento. Realizamos un seguimiento de alta calidad para potenciar el crecimiento y desarrollo técnico de todos los desarrolladores contratados."
    }
  ]

  //  <div className="flex flex-col items-center box-border pl-[134px] p-3">

  return (
    <>
      <div className="grid gap-2 w-5/6 mx-auto md:grid-cols-3 mb-24 ">
        {posts.map((items, key) => (
          <div className=" mx-auto w-full rounded-xl  md:w-[23.75rem] md:h-[26.12rem] shadow-md lg:max-w-sm flex flex-col gap-y-5 " key={key}>
            <img
              className=" mt-10 h-20"
              src={items.img}
              alt="image"
            />
            <div className="p-4 mb-10">
              <h4 className="text-xl text-center font-semibold text-blue-600">
                {items.title}
              </h4>
              <p className="mb-2 mt-10 leading-normal text-center mx-auto">
                {items.content}
              </p>
              {/* <button className="px-4 py-2 text-sm text-blue-100 bg-blue-500 rounded shadow">
                Read more
              </button> */}
            </div>
          </div>
        ))}
      </div>
    </>
  );


}

export default CardsLandingPage2