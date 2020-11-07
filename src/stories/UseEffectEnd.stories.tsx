import React, {useEffect, useState} from 'react';

export default {
    title: 'useEffectReset'
}

export const Reset = () => {
    console.log('Example render')
    const [text, setText] = useState('')
    useEffect(() => {
        console.log('Effect Occurred')
        const handler = (e: { key: string; }) => {
            setText((state) => state + e.key)
        }
        window.addEventListener('keypress', handler)
        return () => {
            window.removeEventListener('keypress', handler)
        }
    }, [text])
    return <>
        <div>Text: {text}</div>
    </>
}
export const ResetSecond = () => {
    console.log('Example2 render')
    useEffect(() => {
      let timeOutId =  setTimeout(
           ()=> console.log("Timeout worked"), 5000
       )
        return () => {
         clearTimeout(timeOutId) 
        }
    }, [])
    return <>
        <div>Example</div>
    </>
}
