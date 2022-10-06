import React from 'react';
// import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';
import logo from '../../assets/images/devSafio-logo.svg' 
const DataPersonal = () => {
   return (
      <>

{/* <Header /> */}
<header className="flex items-center justify-center md:justify-between space-x-8 bg-hero-gradient h-20">
      <div className="logo w-37">
        <img src={logo} alt="" />
      </div>
      <nav className="text-white hidden lg:block space-x-8">
        <a href="">¿Buscas Empleo?</a>
        <a href="">Contrata talento</a>
        <a href="">Programa Mentorias</a>
        <a href="">Show The Code</a>
        
      </nav>
    </header>

   

{/* sidebar */}


 <div className="flex">

   <div class="flex-col w-64 h-fix py-8 bg-[#F6F5FF]  dark:bg-gray-900 dark:border-gray-700">
    <div class="flex flex-col justify-between flex-1 mt-6">
       <nav>
          <a class="lflex lg:items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 dark:hover:text-gray-200 hover:text-gray-700" href="#">
             {/* pendiente agregar icono */}
             <span class="mx-4 font-medium">Datos personales</span>
          </a>

          <a class="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 dark:hover:text-gray-200 hover:text-gray-700" href="#">
             {/* pendiente agregar icono */}
             <span class="mx-4 font-medium">Perfil educacional</span>
          </a>

          <a class="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 dark:hover:text-gray-200 hover:text-gray-700" href="#">
             {/* pendiente agregar icono */}
             <span class="mx-4 font-medium">Perfil laboral</span>
          </a>
          <a class="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 dark:hover:text-gray-200 hover:text-gray-700" href="#">
             {/* pendiente agregar icono */}
             <span class="mx-4 font-medium">Experiencia laboral</span>
          </a>
          <a class="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 dark:hover:text-gray-200 hover:text-gray-700" href="#">
             {/* pendiente agregar icono */}
             <span class="mx-4 font-medium">Tipo de trabajo <br />que buscas</span>
          </a>

          <a class="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 dark:hover:text-gray-200 hover:text-gray-700" href="#">
             {/* pendiente agregar icono */}
             <span class="mx-4 font-medium">Acerca de tí</span>
          </a>
          <a class="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-300 transform dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 dark:hover:text-gray-200 hover:text-gray-700" href="#">
             {/* pendiente agregar icono */}
             <span class="mx-4 font-medium">Tu historia <br />(background)</span>
          </a>
       </nav>
    </div>
   </div>
 
{/* Formularios */}
         <div className="container">

               <div className="container">

                  {/* Progress bar */}

                  <div className="flex justify-between mt-14">
                     <div className="w-3/5 rounded-full my-auto ml-20">
                        <span className="text-[14px] font-semibold">Progreso del perfil</span>
                        <div className="bg-[#2738f5] text-xs font-medium text-blue-100 text-center rounded-full" > 45%</div>
                     </div>
                     <div className="flex items-center">
                     <h4 className="mx-2 mt-2 text-[11px] font-semibold text-gray-800 dark:text-gray-200 hover:underline">Signed in as <br/>Jorge123</h4>
                     <img className="w-[60px] h-[60px] mr-10 object-cover rounded-full" src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" alt="avatar" />
                     </div>
                  </div>



                  <div className="lg:flex lg:justify-between">
                     <h1 className="mt-14 ml-20 text-[18px] font-semibold"> Datos Personales</h1>
                     <h3 className="mt-14 mr-16 text-[14px]">Ultima actualización 16/09/2022</h3>
                  </div>


                  <form>
                     <div className="lg:flex">

                        {/* cuadro 1 */}
                        <div className="ml-20 mt-3 text-start ">

                           <div className="mb-6 mt-6 font-semibold">Personal
                           </div>
                           <div className="h-fit w-fit flex flex-col ">

                              <div className="flex justify-between">
                                 <div>
                                    <label for="nombre" className="block mb-1 text-sm font-medium text-gray-900 dark:text-gray-300">Nombre</label>
                                    <input type="text" id="first_name" className="mb-3 w-[14rem] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Andrea" required="" />
                                 </div>
                                 <div>
                                    <label for="apellido" className="block mb-1 text-sm font-medium text-gray-900 dark:text-gray-300">Apellido</label>
                                    <input type="text" id="last_name" className="mb-3 w-[14rem] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Leal" required="" />
                                 </div>
                              </div>
                              <div>
                                 <label for="fecha_nacimiento" className="block mb-1 text-sm font-medium text-gray-900 dark:text-gray-300">Fecha de Nacimiento</label>
                                 <input type="text" id="company" className="mb-3 w-[30rem] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="dd-mm-aaaa" required="" />
                              </div>
                              <div>
                                 <label for="profile_github" className="block mb-1 text-sm font-medium text-gray-900 dark:text-gray-300">Perfil de Github</label>
                                 <input type="tel" id="phone" className="mb-3 w-[30rem] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Ingresa perfil de Github" required="" />
                              </div>

                              <div>
                                 <label for="profile_linkedin" className="block mb-1 text-sm font-medium text-gray-900 dark:text-gray-300">Perfil Linkedin</label>
                                 <input type="url" id="website" className="mb-3 w-[30rem] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Ingresa perfil de Linkedin" required="" />
                              </div>
                           </div>
                        </div>


                        {/* cuadro 2 */}

                        <div className="ml-20 mt-3 text-start ">
                           <div className="mb-6 mt-6 font-semibold">Contacto
                           </div>
                           <div className="h-fit w-fit flex flex-col ">
                              <div>
                                 <label for="nombre" className="block mb-1 text-sm font-medium text-gray-900 dark:text-gray-300">Email</label>
                                 <input type="text" id="first_name" className="mb-3 w-[30rem] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="example@example.com" required="" />
                              </div>

                              <div>
                                 <label for="apellido" className="block mb-1 text-sm font-medium text-gray-900 dark:text-gray-300">Número de Teléfono</label>
                                 <input type="text" id="last_name" className="mb-3 w-[30rem] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Ingrese número de teléfono" required="" />
                              </div>
                              <div class="relative">

                              <div>
                                 <label for="pais" className="block mb-1 text-sm font-medium text-gray-900 dark:text-gray-300">País</label>
                                    <select className="mb-3 w-[30rem] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" >
                                       <option>Chile</option>
                                       <option>Argentina</option>
                                       <option>Perú</option>
                                    </select>
                                    <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                       <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                                    </div>
                              </div>
                              <div>
                                 <label for="ciudad" className="block mb-1 text-sm font-medium text-gray-900 dark:text-gray-300">Ciudad</label>
                                 <input type="tel" id="phone" className="mb-3 w-[30rem] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Ingresa ciudad" required="" />
                              </div>
                           </div>
                        </div>
                     </div>
                     </div>

                  </form>

                  <div className="mt-6 mb-6 ml-20">
                     <button className="bg-blue-500 hover:bg-blue-700 text-white text-[14px] font-semibold py-2 px-4 rounded">Guardar</button>
                  </div>
               </div>
         </div>
   </div>

         <Footer />

      </>

   );

}

export default DataPersonal;


{/* <div className="mx-auto mt-5 text-start">
        <div className="mb-6">Contacto</div>
            <div className="bg-gray-300 h-fit w-fit flex flex-col">
            
                <div className="mr-10">
                    <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Email</label>
                    <input type="text" id="first_name" class="w-[34rem] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="email@gmail.com" required="" />
                </div>                        
                <div>
                    <label for="phono" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Numero de Telefono</label>
                    <input type="text" id="last_name" class="w-[34rem] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="xxxxxx" required="" />
                </div>

                <div>
                    <label for="pais" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">País</label>
                    <input type="text" id="company" class="w-[34rem] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Chile" required="" />
                </div>
                <div>
                    <label for="ciudad" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Ciudad</label>
                    <input type="tel" id="phone" class="w-[34rem] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Santiago"  required="" />
                </div>
            </div>  
        </div>*/}