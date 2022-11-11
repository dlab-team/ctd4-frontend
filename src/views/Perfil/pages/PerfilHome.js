import React from 'react';
// import { Header } from '../../components/Header';
import { Footer } from '../../../components/Footer';
import logo from '../../../assets/images/devSafio-logo.svg';
import Sidebar from '../../../components/Sidebar/Sidebar';
import Dropdown from '../../../components/Dropdown';


const PerfilHome = () => {
   return (
      <>

{/* <Header /> */}
<header className="flex items-center justify-center md:justify-between space-x-8 bg-hero-gradient h-20">
      <div className="ml-6 logo w-37">
        <img src={logo} alt="" />
      </div>
      <nav className="text-white hidden lg:block space-x-8">
      </nav>

<Dropdown/>

</header>

{/* sidebar */}

<div className="flex">
   <Sidebar/>


      <div className="container mt-10">
      
         <div className="container">

         
               
         {/* Fecha actualizacion */}
            <div className="flex justify-end mr-10">
               <h3 className="mt-2 content-end text-[14px]">Ultima actualización 16/09/2022</h3>
            </div>


         {/* Progress bar */}
                  <div className="flex justify-between mt-8">
                     <div className="w-3/5 rounded-full my-auto ml-28">
                        <span className="text-[14px] font-semibold">Progreso del perfil</span>
                        <div className="bg-[#2738f5] text-xs font-medium text-blue-100 text-center rounded-full" > 45%</div>
                     </div>
                  </div>
         </div>
      </div>
</div>
         <Footer />

      </>

   );

}

export default PerfilHome;
