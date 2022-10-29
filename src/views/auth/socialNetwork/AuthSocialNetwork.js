const AuthSocialNetwork = () => {
    return(
        <div className='flex justify-between mt-2'>
            <button
              type='submit'
              className='bg-blue-700 mt-5 py-2 px-6 rounded-2xl hover:bg-blue-400 hover:-translate-y-1 transition-all duration-500 text-white font-semibold mb-2'
            >
              Linkedin
            </button>
            <button
              type='submit'
              className='bg-blue-700 mt-5 py-2 px-6 rounded-2xl hover:bg-blue-400 hover:-translate-y-1 transition-all duration-500 text-white font-semibold mb-2'
            >
              Google
            </button>
            <button
              type='submit'
              className='bg-blue-700 mt-5 py-2 px-6 rounded-2xl hover:bg-blue-400 hover:-translate-y-1 transition-all duration-500 text-white font-semibold mb-2'
            >
              GitHub
            </button>
        </div>
    )
}