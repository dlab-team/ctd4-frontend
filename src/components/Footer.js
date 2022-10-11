import LogoFooter from '../assets/images/DEV-ISOTIPO-WHITE.png'


export function Footer() {

    return (

        <footer className="flex flex-col w-full mt-3 bg-[#040335]">
            <div className="h-48 mx-6 py-10 text-center md:text-left text-white">
                <div className="grid grid-1 md:grid-cols-2 md:grid-cols-4 gap-8">
                    
                        <div className="">
                            <img src={LogoFooter} className="w-14 lg:w-16 mx-auto" alt=""/>
                            <p className="mt-4 text-sm text-center">© Copyright 2022</p>
                            <p className="text-sm text-center">DEVsafio</p>
                        </div>
                        
                        <div className="Nosotros hidden lg:block font-medium text-sm">
                            <h6 className="uppercase font-semibold mb-3 ml-40 flex lg:justify-start">Conócenos</h6>
                            <p className="flex items-center ml-40 lg:justify-start mb-3">¿Quienes somos?</p>
                            <p className="flex items-center ml-40 lg:justify-start mb-3">Noticias</p>
                            <p className="flex items-center ml-40 lg:justify-start mb-3">Trabaja con Nosotros</p>
                        </div>

                        <div className="Contacto hidden lg:block font-medium text-sm">
                            <h6 className="uppercase font-semibold mb-3 ml-20 flex ">Contacto</h6>
                            <p className="flex items-center ml-20 lg:justify-start mb-3">Dirección - Chile</p>
                            <p className="flex items-center ml-20 lg:justify-start mb-3">info@example.com</p>
                            <p className="flex items-center ml-20 md:justify-start mb-3">Phono</p>
                        </div>

                        <div className="Social hidden lg:block font-medium text-sm">
                            <h6 className="uppercase font-semibold mb-3 flex justify-center md:justify-start">Social</h6>
                            <p className="mb-3">
                                <a href="#!" className="text-white-600">Linkedin</a>
                            </p>
                            <p className="mb-3 text-white">
                                <a href="#!" className="text-white-600">Twitter</a>
                            </p>
                            <p className="mb-3 text-white">
                                <a href="#!" className="text-white-600">Facebook</a>
                            </p>
                        </div>
                </div>
            </div>
            
        </footer>

    );
  
  
  }
  