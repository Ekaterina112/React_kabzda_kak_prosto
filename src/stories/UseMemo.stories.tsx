import React, {useMemo, useState} from 'react';


export default {
    title: 'USE-MEMO'

}

export const DifficultCountingExample = () => {
    let [a, setA] = useState<number>(5)
    let [b, setB] = useState<number>(5)

    let returnA = 1
    let returnB = 1
    //for saving some cash   //second parametr is dependences //
    //memo, count and save!
    returnA = useMemo(() => {
        let tempResult = 1
        for (let i = 1; i <= a; i++) {
            let fake = 0
            while (fake < 10000000) {
                fake++
                const fakeValue = Math.random()
            }
            tempResult = tempResult * i
        }
        return tempResult
    }, [a])


    for (let i = 1; i <= b; i++) {
        returnB = returnB * i
    }
    return <>
        <input value={a} onChange={e => setA(+e.currentTarget.value)}/>
        <input value={b} onChange={e => setB(+e.currentTarget.value)}/>
        <hr/>
        {returnA}
        <hr/>
        {returnB}
    </>
}

//useMemo()+React.memo()


const UserSecret = (props: { users: Array<string> }) => {
    console.log('user')
    return <div>
        {props.users.map((u, i) => <div>{u}</div>)} </div>

}
const Users = React.memo(UserSecret) //обертка //ПРИ ИЗМЕНЕНИИ ПРОПСОВ

export const HelpsToReactMemo = () => {
    console.log('HelpsToReactMemo')
    const [count, setCount] = useState(0)
    const [users, setUsers] = useState(['Tom', 'Nick', 'Sasha'])
    const newArray = useMemo(() => {
        return users.filter(u => u.toLowerCase().indexOf('a') > -1)
    }, users) //dependencies!!! for doing actual changes 
    return <>
        <button onClick={() => setCount(count + 1)}>+</button>
        {count}
        <Users users={newArray}/>
    </>
}
//map,filter need memo!!!
//sort not accept
//about filter. create newArray, and react memo render new page, thinks that newArray. need to cash UsersFilter