import React, {useEffect, useState} from 'react';;
import Clock from './Clock';

export default {
    title: 'CLOCK',
    component: Clock
}
export const BaseExample = () => {
    return <Clock/>
}
/*
export const Clock: React.FC<PropsType> = (props) => {
    let [clock, setClock] = useState(new Date()) //now clock is a new object
    //changing state is a side effect, we have to use 'useEffect'
    useEffect(() => {
            console.log('start')
            //need to clear with help id-of-setInterval, setInterval always returns id!
            //it will wiorking when component dies
            const id = setInterval(() => {
                console.log('tick')
                // eslint-disable-next-line @typescript-eslint/no-unused-expressions
                setClock(new Date()), 1000
            })
            return () => clearInterval(id)
        }
        , []
    )   //dependencies is a empty array, because we need only one! rendering
        //we need to call setClock every second
    const numToString = (num: number) => num < 10 ? '0' + num : num
    //these need for right image
    const hours = numToString(clock.getHours())
    const minutes = numToString(clock.getMinutes())
    const seconds = numToString(clock.getSeconds())
    return <>
        <div>
            <span>{hours}</span>
            :<span>{minutes}</span>
            :<span>{seconds}</span>
        </div>
    </>
}
//from useEffect we can return another function*/
