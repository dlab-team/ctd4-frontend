import React from 'react';
import {SignUpForm} from './SignUpForm';
import { Header } from '../../components/Header';


const SignUp = () => {

  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="w-screen h-screen bg-gradient-to-b from-[#2738F5] via-from-[#1E239A] to-black flex justify-center items-center">
        <div className="lg:w-1/2 bg-white border-4 border-black rounded-[16px] p-5">
            <div className="flex justify-center p-4">
                <h2 className="text-[35px] font-[600]">Regístrate</h2>
            </div>
            <div className="flex justify-center">
              <SignUpForm />
            </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
