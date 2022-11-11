import React from 'react';
// import { Header } from '../../components/Header';
import { Footer } from '../../../components/Footer';
import logo from '../../../assets/images/devSafio-logo.svg';
import Sidebar from '../../../components/Sidebar/Sidebar';


const Experiencia = () => {
   return (
      <>

{/* <Header /> */}
<header className="flex items-center justify-center md:justify-between space-x-8 bg-hero-gradient h-20">
      <div className="ml-6 logo w-37">
        <img src={logo} alt="" />
      </div>
      <nav className="text-white hidden lg:block space-x-8">
      </nav>
    </header>

{/* sidebar */}

 <div className="flex">

 <Sidebar />
 
{/* Formularios */}
         <div className="container">

               <div className="container">

                  
            {/* Progress bar */}
                  <div className="flex justify-between mt-14">
                     <div className="w-3/5 rounded-full my-auto ml-20">
                        <span className="text-[14px] font-semibold">Progreso del perfil</span>
                        <div className="bg-[#2738f5] text-xs font-medium text-blue-100 text-center rounded-full" > 10%</div>
                     </div>
                     <div className="flex items-center">
                     <h4 className="mx-2 mt-2 text-[11px] font-semibold text-gray-800 dark:text-gray-200 hover:underline">Signed in as <br/>Jorge123</h4>
                     <img className="w-[60px] h-[60px] mr-10 object-cover rounded-full" src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80" alt="avatar" />
                     </div>
                  </div>

                  <div className="lg:flex lg:justify-between">
                     <h1 className="mt-14 ml-20 text-[18px] font-semibold">Experiencia</h1>
                     <h3 className="mt-14 mr-16 text-[14px]">Ultima actualización 16/09/2022</h3>
                  </div>

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

export default Experiencia;
