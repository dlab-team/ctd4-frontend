import { Formik, Form, Field, ErrorMessage } from 'formik';
import TextInput from './TextInput';
import Select from './Select';
import Radio from './Radio';
import Checkbox from './CheckBox';
import * as Yup from 'yup';

const InfoPersonalForm = () => {
    return(
        <>
            <div>
                <Formik
                initialValues={{
                    name:"",
                    lastName:"",
                    email:"",
                    phone:"",
                    city:"",
                    countrie:"",
                    gender:"",
                    radio:"",
                    workArea:"",

                }}
                onSubmit={values => console.log(values)}
                >

                    <Form>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
                        <TextInput name="name" label="Nombre"  />     
                        <TextInput name="lastName" label="Apellido"  />
                        <TextInput name="email" label="Email"  />
                        <TextInput name="phone" label="Teléfono"  />
                        <TextInput name="city" label="Ciudad"  />
                        <TextInput name="country" label="Ciudad/País"  />
                        <Select label="¿Con qué género te identificas?" name="gender">
                            <option value=''>Seleccionar</option>
                            <option value="male">Masculino</option>
                            <option value="female">Femenino</option>
                            <option value="other">Otro</option>
                        </Select>
                        <div>
                            <h3>¿Cuál es tu estado laboral actual?</h3>
                        <Radio name="radio" value="Cesante Buscando empleo en TI por primera vez" label="Cesante Buscando empleo en TI por primera vez" />
                        <Radio name="radio" value="Cesante, ya he trabajado antes en TI." label="Cesante, ya he trabajado antes en TI." />
                        <Radio name="radio" value="Tengo trabajo en TI, pero busco otro." label="Tengo trabajo en TI, pero busco otro." />
                        <Radio name="radio" value="Tengo trabajo (en otras áreas), pero busco en TI." label="Tengo trabajo (en otras áreas), pero busco en TI." />
                        </div>
                        
                        <div>
                            <h3>
                            ¿Cuál o cuáles cargos te gustaría optar?
                            </h3>
                            <p>
                            Ten en cuenta: De acuerdo al cargo que postules, te pediremos que seas capaz de demostrarlo de manera práctica durante el proceso de selección.
                            </p>
                        <Checkbox name="workArea" value="Desarrollador FrontEnd">Desarrollador FrontEnd</Checkbox>
                        <Checkbox name="workArea">Desarrollador/a Full Stack</Checkbox>
                        <Checkbox name="workArea">Desarrollador/a Back End</Checkbox>
                        <Checkbox name="workArea">Desarrollador/a Front End</Checkbox>
                        <Checkbox name="workArea">Diseñador/a UX / UX Research o UI</Checkbox>
                        <Checkbox name="workArea">Desarrollador/a Móvil</Checkbox>
                        <Checkbox name="workArea">Data Scientist o especialista machine learning</Checkbox>
                        <Checkbox name="workArea">Ingeniería de Datos</Checkbox>
                        </div>
                        
                         
                        </div>
                        <button type='submit' className="btn py-3 mt-5">Enviar</button>
                    </Form> 
                </Formik>
           </div>
        </>
    )
}

export default InfoPersonalForm