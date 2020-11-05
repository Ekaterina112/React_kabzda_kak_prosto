import React, {useEffect, useState} from 'react';

export default {
    title: 'useEffect'
}

export const WithUseEffect = () => {
    console.log('Example render')
    const [count, setCount] = useState(0)
    const [fake, setFake] = useState(0)

useEffect(()=>{
    console.log("with dependencies")
    document.title = count.toString()
},[count])
    useEffect(()=>{
        console.log("with empty array")
        document.title = count.toString()
    },[])
    useEffect(()=>{
        console.log("without dependencies")
        document.title = count.toString()
    })

    return <>
        <button onClick={() => setCount(count + 1)}>+</button>
      <div>count {count}</div>
        <button onClick={() => setFake(fake + 1)}>+</button>
       <div>fake {fake}</div>
    </>

}
