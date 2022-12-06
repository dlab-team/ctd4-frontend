import React from 'react';
import { PasswordChangeForm } from './PasswordChangeForm';
import { Header } from '../../components/Header';


export const PasswordChange= () => {

  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="w-screen h-screen bg-gradient-to-b from-[#2738F5] via-from-[#1E239A] to-black flex justify-center items-center">
        <div className="mx-6 lg:w-1/2 bg-white border-4 border-black rounded-[16px] p-5">
            <div className="flex justify-center p-4">
                <h2 className="text-center text-[35px] font-[600]">Cambia tu Contraseña</h2>
            </div>
            {/* <div className="flex justify-center text-center p-4">
            <h4 className="text-[17px]">Ingresa tu nueva contraseña</h4>
            </div> */}

            
            <div className="flex justify-center">
              <PasswordChangeForm/>
            </div>
        </div>
      </div>
    </div>
  );
};