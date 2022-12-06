const CardQuizzes = ({image, titulo, text1, text2}) => {
    return(
        <div className='card w-[11rem] h-[18rem]  flex justify-center items-center shadow-xl gap-2'>
            <img src={image} alt='' />
            <h1 className='title  font-semibold'>{titulo}</h1>
            <div className=' text-zinc-400 text-sm'>{text1}</div>
            <div className='text-zinc-400 text-sm'>{text2}</div>
           
        </div>
    )
}

export default CardQuizzes