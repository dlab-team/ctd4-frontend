// import { Formik, Form, Field, ErrorMessage } from 'formik';
// import * as Yup from 'yup';
import InfoPersonalForm from "./InfoPersonalForm"


const InformacionPersonal = () => {
    return(
        <div className="container mx-auto py-5 font-[Poppins]">
            <div>
            <h1 className="font-[700] py-5 ml-40 text-[32px]">INFORMACION PERSONAL</h1>
            <div className="w-4/5 mx-auto">
            <InfoPersonalForm className="" />
            </div>
            
            </div>
            
        </div>
        
    )
}

export default InformacionPersonal