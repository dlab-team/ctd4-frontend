import { AiFillGoogleCircle, AiFillTwitterCircle, AiFillLinkedin, AiFillGithub } from 'react-icons/ai';

export const FormSocialNetworks = () => {
    return(
        <div className="flex flex-wrap justify-around my-5" >
            <button className="px-8 py-2 my-2 border-[#243c5a] flex justify-center items-center rounded-md botonSocialNetwork">
               <span className='justify-self-start'><AiFillGoogleCircle size={30} /></span> <p>Google</p>
            </button>
            <button className="px-8 py-2 my-2 border-[#243c5a] flex justify-center items-center bg-sky-500/75 text-white rounded-md botonSocialNetwork">
               <span><AiFillTwitterCircle size={30} /></span> <p>Twitter</p>
            </button>
            <button className="px-8 py-2 my-2 border-[#243c5a] flex justify-center items-center bg-[#140B34] text-white rounded-md botonSocialNetwork">
               <span><AiFillLinkedin size={30} /></span> <p>Linkedin</p>
            </button>
            <button className="px-8 py-2 my-2 border-[#243c5a] flex justify-center items-center bg-[#140B34] text-white rounded-md botonSocialNetwork">
               <span><AiFillGithub size={30} /></span> <p>Github</p>
            </button>
        </div>
    )
}