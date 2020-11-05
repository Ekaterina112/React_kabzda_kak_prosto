import React, {useCallback,  useState} from 'react';

export default {
    title: 'useStateDemo'
}
const someOperation = () => {
    let n =  100 + 500
    return n
}


export const PosibilitiesUseState = () => {

    const [count, setCount] = useState(someOperation)
const changer = (c:number) => { return c+1}
    return <>
        <button onClick={() => setCount(changer)}>+</button>
        {count}
    </>

}
