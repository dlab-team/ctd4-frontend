import './css/login.css';
import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';

export const LoginUI = ({children, title, textAnimated}) => {

  return (
    <div className="flex flex-col h-screen">  
      <Header />
        <div className="w-full h-screen bg-gradient-to-b from-[#2738F5] via-from-[#1E239A] to-black flex justify-center items-center">
          <div className="mb-4 mt-4 mx-1 lg:w-1/2 md:w-4/5 sm:w-4/5 bg-white border-4 border-black rounded-[16px] py-2 px-5">
              <div className="flex justify-center p-4">
                  <h2 className="text-[35px] font-[600] text-center">{title}</h2>
              </div>
              <div className="text-[17px] font-[400] my-3 px-10">
                  <p className="text-center">
                      {textAnimated}
                  </p>
              </div>
              <div className="flex justify-center">
                  {children}
              </div>
          </div>
        </div>
    </div>
  );
};
