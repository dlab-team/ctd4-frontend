import './css/login.css';
import {TypeEffect} from './../../components/typeEffect/TypeEffect'

export const LoginUI = ({children, title, textAnimated}) => {

  return (
    <div className="w-screen h-screen bg-gradient-to-b from-[#2738F5] via-from-[#1E239A] to-black flex justify-center items-center">
      <div className="w-1/2 bg-white border-4 border-black rounded-[16px] py-2 px-5">
          <div className="flex justify-center p-4">
              <h2 className="text-[35px] font-[600]">{title}</h2>
          </div>
          <div className="h-[3em] text-[17px] font-[400] my-5">
              <TypeEffect>
                  {textAnimated}
              </TypeEffect>
          </div>
          <div className="flex justify-center">
              {children}
          </div>
      </div>
    </div>
  );
};
