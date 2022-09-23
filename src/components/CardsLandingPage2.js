import React from 'react'

const CardsLandingPage2 = () => {

  const posts = [
    {
      title: "Aceleramos",
      // img: "https://cdn.pixabay.com/photo/2019/12/17/14/43/christmas-4701783__340.png",
      img: "../assets/images/timemachine.png",
      content: "Aceleramos el proceso de contratación. Una vez que nos envíes tu necesidad de talento digital recibirás un listado con los mejores candidatos en 5 días."
    },
    {
      title: "Acompañamos",
      img: "../assets/images/Diseño-sin-título-4-e1644350328646.png",
      content: "Nosotros nos hacemos cargo, tú creces. Todos los desarrolladores que contrates serán guiados y apoyados a nivel técnico por un mentor senior TI experto en tu área sin ningún costo($0)."
    },
    {
      title: "Potenciamos",
      img: "../assets/images/accurate.png",
      content: "Potenciamos y retenemos el talento. Realizamos un seguimiento de alta calidad para potenciar el crecimiento y desarrollo técnico de todos los desarrolladores contratados."
    }
  ]

  //  <div className="flex flex-col items-center box-border pl-[134px] p-3">

  return (
    <>
      <div className="grid gap-2 w-5/6 ml-48 lg:grid-cols-3">
        {posts.map((items, key) => (
          <div className="w-full rounded-lg  md:w-[380px] md:h-[418px] shadow-md lg:max-w-sm" key={key}>
            <img
              className="object-cover w-full h-48"
              src={items.img}
              alt="image"
            />
            <div className="p-4">
              <h4 className="text-xl text-center font-semibold text-blue-600">
                {items.title}
              </h4>
              <p className="mb-2 leading-normal">
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