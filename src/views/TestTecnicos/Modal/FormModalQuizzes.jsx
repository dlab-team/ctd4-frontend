import { useState, useEffect } from "react"
import { Form, Formik } from "formik"
import  InputTest  from "../Componets/InputTest"
import axios from "axios"

const FormModalQuizzes = () => {

    const [quizz, setQuizzes] = useState([]);

    useEffect(()=>{
        axios.get(process.env.REACT_APP_BACKEND_URL + '/quizzes').then((res) => {
            const datos = res.data;
            setQuizzes(datos);
          });
    },[quizz])

    return(
        <>
        <div>
            <Formik
            initialValues={{
                name: '',
                duration: '',
                url_logo: ''
            }}
            onSubmit={(values) =>{
                let url = process.env.REACT_APP_BACKEND_URL + '/quizzes'
                axios.post(url, {
                    name: values.name,
                    duration: values.duration,
                    url_logo: values.url_logo,

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

                    <InputTest name='name' label='Nombre del quizz' /> 
                    <InputTest name='duration' label='Duración' />  
                    <InputTest name='img' label='Agrega Url del logo del quizz' />                  
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

export default FormModalQuizzes
