import React, {useEffect, useState} from 'react';
import DigitalClock from './DigitalClock';
import AnalogClock from './AnalogClock';




export  type PropsType = {
    mode: 'analog' | 'digital'

}

const MyClock: React.FC<PropsType> = (props) => {
    const [date, setDate] = useState(new Date())
    useEffect(() => {

            const intervalId = setInterval(() => {
                setDate(new Date())
            }, 1000)
            return () => clearInterval(intervalId)
        }, []
    )
    let view
    switch (props.mode) {
        case 'analog':
            view = <AnalogClock  date={date}/>
            break
        case 'digital':
            view = <DigitalClock date={date}/>
        default:
            view = <DigitalClock date={date}/>
    }
    return <div>{view}</div>
}
export default MyClock