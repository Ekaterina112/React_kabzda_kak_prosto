import React from 'react';


const numToString = (num:number) => num < 10 ?  '0' + num : num
export  type PropsType= {
date:Date
}
const DigitalClock: React.FC<PropsType> = ({date}) => {

    return <>
        <div>
            <span>{numToString(date.getHours())}</span>
            :<span>{numToString(date.getMinutes())}</span>
            :<span>{numToString(date.getSeconds())}</span>
        </div>
    </>
}
export default DigitalClock