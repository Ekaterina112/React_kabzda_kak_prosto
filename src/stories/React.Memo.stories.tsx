import React, {useState} from 'react';

export default {
  title: 'React_Memo_Demo'

}

const NewMessageCounter = (props:{count:number}) => {
    return <div> {props.count}</div>
}

const UsersSecret = (props: {users:Array<string>}) => {

    return <div>
        {props.users.map((u, i) => <div>{u}</div>)} </div >

}
const Users=React.memo(UsersSecret) //обертка //ПРИ ИЗМЕНЕНИИ ПРОПСОВ

export const Example1 = () =>{
    const [count, setCount] =useState(0)
    const [users, setUsers] =useState(["Tom",'Nick','Sasha'])
    const addUsers= () => {
        const newUsers= [...users,'Lida']
        setUsers(newUsers)
    }
    return <>
        <button onClick={()=>setCount(count+1)}>+</button>
        <button onClick={addUsers}>add users</button>
        <NewMessageCounter count={count}/>
        <Users users={users}/>
        </>
}