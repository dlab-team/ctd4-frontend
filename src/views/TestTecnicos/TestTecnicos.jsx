import { Footer } from '../../components/Footer';
import NavPerfil from '../../components/perfil/NavPerfil';
import Sidebar from '../../components/Sidebar/Sidebar';
import javascriptLogo from '../../assets/images/javascript-logo.png';
import htmlLogo from '../../assets/images/htmlLogo.png';
import androidLogo from '../../assets/images/androidLogo.png';
import azureLogo from '../../assets/images/azureLogo.png';

export function TestTecnicos() {
  return (
    <>
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
            <h3 className='text-xl font-semibold mt-6'>Habilidades</h3>
            <input
              type='text'
              className=' bg-[#E2F2FE] border border-zinc-300 mt-4 w-[36rem] h-[2.8rem] rounded-lg p-4'
              placeholder='Buscar habilidades'
            />

            <div className='mt-12 max-w-[36rem] flex flex-wrap gap-2'>
              <button className='border  py-1 px-2 rounded-lg bg-blue-700 text-zinc-100'>
                {' '}
                Todos{' '}
              </button>
              <button className='border border-blue-700 py-1 px-2 rounded-lg hover:bg-blue-700 hover:text-zinc-100'>
                {' '}
                Skill-based{' '}
              </button>
              <button className='border border-blue-700 py-1 px-2 rounded-lg hover:bg-blue-700 hover:text-zinc-100'>
                {' '}
                Backend{' '}
              </button>
              <button className='border border-blue-700 py-1 px-2 rounded-lg hover:bg-blue-700 hover:text-zinc-100'>
                {' '}
                Containers{' '}
              </button>
              <button className='border border-blue-700 py-1 px-2 rounded-lg hover:bg-blue-700 hover:text-zinc-100'>
                {' '}
                Data engineering{' '}
              </button>
              <button className='border border-blue-700 py-1 px-2 rounded-lg hover:bg-blue-700 hover:text-zinc-100'>
                {' '}
                Database{' '}
              </button>
              <button className='border border-blue-700 py-1 px-2 rounded-lg hover:bg-blue-700 hover:text-zinc-100'>
                {' '}
                DevOps{' '}
              </button>
              <button className='border border-blue-700 py-1 px-2 rounded-lg hover:bg-blue-700 hover:text-zinc-100'>
                {' '}
                Hybrid mobile{' '}
              </button>
              <button className='border border-blue-700 py-1 px-2 rounded-lg hover:bg-blue-700 hover:text-zinc-100'>
                {' '}
                Infrastructure{' '}
              </button>
              <button className='border border-blue-700 py-1 px-2 rounded-lg hover:bg-blue-700 hover:text-zinc-100'>
                {' '}
                Java{' '}
              </button>
              <button className='border border-blue-700 py-1 px-2 rounded-lg hover:bg-blue-700 hover:text-zinc-100'>
                {' '}
                Microsoft{' '}
              </button>
              <button className='border border-blue-700 py-1 px-2 rounded-lg hover:bg-blue-700 hover:text-zinc-100'>
                {' '}
                Mobile{' '}
              </button>
              <button className='border border-blue-700 py-1 px-2 rounded-lg hover:bg-blue-700 hover:text-zinc-100'>
                {' '}
                Other{' '}
              </button>
              <button className='border border-blue-700 py-1 px-2 rounded-lg hover:bg-blue-700 hover:text-zinc-100'>
                {' '}
                PHP{' '}
              </button>
              <button className='border border-blue-700 py-1 px-2 rounded-lg hover:bg-blue-700 hover:text-zinc-100'>
                {' '}
                Python{' '}
              </button>
              <button className='border border-blue-700 py-1 px-2 rounded-lg hover:bg-blue-700 hover:text-zinc-100'>
                {' '}
                React{' '}
              </button>
            </div>

            <div className='cards mt-12 mb-24 flex gap-4'>
              <div className='card w-[11rem] h-[18rem]  flex justify-center items-center shadow-xl gap-2'>
                <img src={htmlLogo} alt='' />
                <h1 className='title  font-semibold'>HTML CSS</h1>
                <div className=' text-zinc-400 text-sm'>No pasó</div>
                <div className='text-zinc-400 text-sm'>Retomar en 96 días</div>
              </div>
              <div className='card w-[11rem] h-[18rem]  flex justify-center items-center shadow-xl gap-2'>
                <img src={javascriptLogo} alt='' />
                <h1 className='title  font-semibold'>Javascript</h1>
                <div className=' text-zinc-400 text-sm'>30 min</div>
                <div className='text-blue-700 text-sm'>Empezar test</div>
              </div>
              <div className='card w-[11rem] h-[18rem]  flex justify-center items-center shadow-xl gap-2'>
                <img src={androidLogo} alt='' />
                <h1 className='title  font-semibold'>Android</h1>
                <div className=' text-zinc-400 text-sm'>45 min</div>
                <div className='text-blue-700 text-sm'>Empezar test</div>
              </div>
              <div className='card w-[11rem] h-[18rem]  flex justify-center items-center shadow-xl gap-2'>
                <img src={azureLogo} alt='' />
                <h1 className='title  font-semibold'>Azure DevOps</h1>
                <div className=' text-zinc-400 text-sm'>40 min</div>
                <div className='text-blue-700 text-sm'>Empezar test</div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
