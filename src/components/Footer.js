import LogoFooter from '../assets/images/DEV-ISOTIPO-WHITE.png'
import "../assets/style.css";


export function Footer() {

    return (

        <footer className="footer text-center lg:text-left text-white mt-3">
            <div className="mx-6 py-10 text-center md:text-left">
                <div className="grid grid-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="">
                            <div className="logo w-16 ml-32">
                                <img src={LogoFooter} alt="" />
                            </div>
                                <p className="mt-4 text-center">© Copyright 2022</p>
                                <p className="text-center">DEVsafio</p>
                        </div>
                        
                     
                        <div className="Nosotros font-medium text-sm">
                            <h6 className="uppercase font-semibold mb-3 ml-40 flex justify-center md:justify-start">Conócenos</h6>

                            <p className="flex items-center justify-center ml-40 md:justify-start mb-3">¿Quienes somos?</p>

                            <p className="flex items-center justify-center ml-40 md:justify-start mb-3">Noticias</p>

                            <p className="flex items-center justify-center ml-40 md:justify-start mb-3">Trabaja con Nosotros</p>
                        </div>

                        <div className="Contacto font-medium text-sm">
                            <h6 className="uppercase font-semibold mb-3 ml-20 flex justify-center md:justify-start">Contacto</h6>

                            <p className="flex items-center justify-center ml-20 md:justify-start mb-3">Dirección - Chile</p>

                            <p className="flex items-center justify-center ml-20 md:justify-start mb-3">info@example.com</p>

                            <p className="flex items-center justify-center ml-20 md:justify-start mb-3">Phono</p>
                        </div>

                        <div className="Social font-medium text-sm">
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
  