import React, {useEffect, useState} from 'react';

export default {
    title: 'useEffect'
}

export const WithUseEffectClosure = () => {
    console.log('Example render')
    const [count, setCount] = useState(0)

useEffect(()=>{

   setInterval(()=>{
       console.log("working")
       setCount(count+1)},1000)
},[])

    return <>
      <div>count {count}</div>
    </>

}
