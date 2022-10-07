import Typewriter from 'typewriter-effect';

export const TypeEffect = ({children}) => {
    return(
        <Typewriter
            options={{
                strings: [`${children}`, 'Los profesionales......', 'estan aqui!'],
                autoStart: true,
                loop: true,
                delay: 30,
                deleteSpeed: 0,
                pauseFor: 2000
            }}
        />
    )
}