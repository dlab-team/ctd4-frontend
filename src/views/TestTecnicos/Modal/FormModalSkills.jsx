import { useState, useEffect } from "react"
import { Form, Formik } from "formik"
import  InputTest  from "../Componets/InputTest"
import axios from "axios"

const FormModalSkills = () => {

    const [skills, SetSkills] = useState([]);

    useEffect(()=>{
        axios.get(process.env.REACT_APP_BACKEND_URL + '/skills').then((res) => {
            const datos = res.data;
            SetSkills(datos);
          });
    },[])

    return(
        <>
        <div>
            <Formik
            initialValues={{
                name: '',
            }}
            onSubmit={(values) =>{
                let url = process.env.REACT_APP_BACKEND_URL + '/labels'
                axios.post(url, {
                    name: values.name
                })
                .then(function (response) {
                    console.log(response);
                  })
                  .catch(function (error) {
                    console.log(error);
                  });
            }}
            >
                <Form>
                    <div className="text-center"> 

                    <InputTest name='name' label='Agregar tag' />                 
                        <div>
                            <button type='submit' className='btn'>Guardar</button>
                        </div>
                    </div>
                </Form>
            </Formik>
        </div>

        </>
    )
}

export default FormModalSkills
