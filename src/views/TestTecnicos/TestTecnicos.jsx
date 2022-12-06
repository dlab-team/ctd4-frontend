import { Footer } from '../../components/Footer';
import { useState, useEffect } from 'react';
import NavPerfil from '../../components/perfil/NavPerfil';
import Sidebar from '../../components/Sidebar/Sidebar';
import CardQuizzes from './Componets/CardQuizzes';
import javascriptLogo from '../../assets/images/javascript-logo.png';
import htmlLogo from '../../assets/images/htmlLogo.png';
import androidLogo from '../../assets/images/androidLogo.png';
import azureLogo from '../../assets/images/azureLogo.png';
import ModalSkills from './Modal/ModalSkills';
import FormModalSkills from './Modal/FormModalSkills';
import FormModalQuizzes from './Modal/FormModalQuizzes';
import ModalQuizzes from './Modal/ModalQuizzes';
import axios from 'axios';

export function TestTecnicos() {
  const [showModal, setShowModal] = useState(false);
  const [showModalQuizzes, setShowModalQuizzes] = useState(false);
  const [tag, setTag] = useState([]);
  const [newItem, setNewItem] = useState('');
  const [quizzes, setQuizzes] = useState([]);

  const [auxTag, setAuxTag] = useState('');
  const [auxq, setAuxq] = useState([]);

  useEffect(() => {
    axios.get(process.env.REACT_APP_BACKEND_URL + '/labels').then((res) => {
      const datos = res.data;
      setTag(datos);
    });
  }, [auxTag]);

  useEffect(() => {
    axios.get(process.env.REACT_APP_BACKEND_URL + '/quizzes').then((res) => {
      const datos = res.data;
      setQuizzes(datos);
    });
  }, [auxq]);

  const onClickDelete = (id) => {
    const urlDelete = `${process.env.REACT_APP_BACKEND_URL}/labels/${id}`;
    axios
      .delete(urlDelete)
      .then((response) => {
        const res = response.data;
        if (res.success) {
          const newItems = [...tag];
          newItems.splice(id, 1);
          setTag(newItems);
        }
      })
      .catch((error) => {
        alert('Error ==> ' + error);
      });
  };

  const onClickDeleteQuizz = (id) => {
    const urlDelete = `${process.env.REACT_APP_BACKEND_URL}/quizzes/${id}`;
    axios
      .delete(urlDelete)
      .then((response) => {
        const res = response.data;
        if (res.success) {
          const newItems = [...tag];
          newItems.splice(id, 1);
          setTag(newItems);
        }
      })
      .catch((error) => {
        alert('Error ==> ' + error);
      });
  };

  return (
    <>
      <ModalSkills isVisible={showModal} onClose={() => setShowModal(false)}>
        <FormModalSkills setAuxTag={setAuxTag} />
      </ModalSkills>
      <ModalQuizzes
        isVisible={showModalQuizzes}
        onClose={() => setShowModal(false)}
      >
        <FormModalQuizzes />
      </ModalQuizzes>
      <div className='flex flex-col'>
        <NavPerfil />
        <div className='flex'>
          <Sidebar />
          <div className='content min-h-screen ml-28 mr-20'>
            <h1 className='text-3xl font-semibold mt-20'>
              Completa los tests técnicos
            </h1>
            <p className='text-2xl mt-10'>
              De esta forma podemos conocer qué trabajos encajan mejor contigo.
              Haz los tests de las habilidades que te gustaría continuar usando
              para tu próximo trabajo.
            </p>
            <p className='text-2xl mt-8'>
              Marcamos tus
              <span className='font-semibold'>habilidades destacadas</span>según
              tu<span className='text-blue-700'>perfil</span> con una estrella
            </p>
            <p className='text-sm mt-6'>
              Tip: Si temes fallar un test, no te preocupes. Puedes volver a
              realizarlo luego de 3 meses.
            </p>
            <div className='flex justify-between'>
              <h3 className='text-xl font-semibold mt-6'>Habilidades</h3>
              <button onClick={() => setShowModal(true)} className='btn '>
                Agregar Tag
              </button>
            </div>

            <input
              type='text'
              className=' bg-[#E2F2FE] border border-zinc-300 mt-4 w-[36rem] h-[2.8rem] rounded-lg p-4'
              placeholder='Buscar habilidades'
            />

            <div className='mt-12 max-w-[36rem] flex flex-wrap gap-2'>
              <button className='border  py-1 px-2 rounded-lg bg-blue-700 text-zinc-100'>
                {' '}
                Todos{' '}
              </button>{' '}
              {tag.map((item, i) => {
                return (
                  <>
                    <div className='flex flex-row'>
                      <span
                        className='border border-blue-700 py-1 px-2 rounded-lg hover:bg-blue-700 hover:text-zinc-100'
                        key={i}
                      >
                        {item.name}
                      </span>
                      <button
                        onClick={() => onClickDelete(item.id)}
                        className=' hover:visible text-transparent hover:text-[#1E1E1E] hover:bg-white hover:transition-all rounded-xl 
                      '
                        key={i}
                      >
                        X
                      </button>
                    </div>
                  </>
                );
              })}{' '}
            </div>

            <h3 className='text-xl font-semibold mt-6'>Test Técnicos</h3>
            <button onClick={() => setShowModalQuizzes(true)} className='btn '>
              Agregar Test
            </button>

            <div className='cards mt-12 mb-24 flex gap-4'>
              {quizzes.map((item, i) => {
                return (
                  <>
                    <div key={i}>
                      <CardQuizzes
                        image={item.url_logo}
                        titulo={item.name}
                        text1={`Duración: ${item.duration}`}
                        text2='Iniciar test'
                      />
                      <button
                        className='hover:visible text-transparent hover:text-[#1E1E1E] hover:bg-white hover:transition-all rounded-xl'
                        onClick={() => onClickDeleteQuizz(item.id)}
                      >
                        X
                      </button>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
