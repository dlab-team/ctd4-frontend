import {useState} from 'react'

export const useAnimationInput = () => {
    const [inputFocus, setInputFocus] = useState(false)

    const blurAnimation = (e) => {
        if(e.target.value === ""){
            setInputFocus(false);
        }
    }

    const focusAnimation = () => {
        setInputFocus(true)   
    }

    return {
        inputFocus,
        focusAnimation,
        blurAnimation 
    }
}