import React, {useEffect, useState} from 'react';


export  type PropsType= {

}
const numToString = (num:number) => num < 10 ?  '0' + num : num

const Clock: React.FC<PropsType> = (props) => {
    const [date, setDate] = useState(new Date())

    useEffect(() => {
        console.log("start")
       const intervalId =  setInterval(() => {
                console.log("tick")
                setDate(new Date())
            }, 1000)
     /*   return ()=> clearInterval(intervalId)*/
        }, []
    )

    return <>
        <div>
            <span>{numToString(date.getHours())}</span>
            :<span>{numToString(date.getMinutes())}</span>
            :<span>{numToString(date.getSeconds())}</span>
        </div>
    </>
}
export default Clock