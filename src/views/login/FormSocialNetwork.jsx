export const FormSocialNetworks = () => {
    return(
        <div className="w-1/3 flex flex-col justify-center">
            <button className="p-2 my-2 border-[#243c5a] border flex justify-center w-[100%] rounded-md">
                <p>Google</p>
            </button>
            <button className="p-2 my-2 border-[#243c5a] border flex justify-center w-[100%] bg-sky-500/75 text-white rounded-md">
                <p>Twitter</p>
            </button>
            <button className="p-2 my-2 border-[#243c5a] border flex justify-center w-[100%] bg-[#140B34] text-white rounded-md">
                <p>Linkedin</p>
            </button>
            <button className="p-2 my-2 border-[#243c5a] border flex justify-center w-[100%] bg-[#140B34] text-white rounded-md">
                <p>Github</p>
            </button>
        </div>
    )
}