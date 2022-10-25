import Typewriter from 'typewriter-effect';

export const TypeEffect = ({children}) => {
    
    return(
        <Typewriter
            options={{
                strings: [children],
                autoStart: true,
                loop: true,
                delay: 10,
                deleteSpeed: 0,
                pauseFor: 1000000
            }}
        />
    )
}