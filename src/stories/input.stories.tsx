import React, {ChangeEvent, useRef, useState} from 'react';
import {action} from '@storybook/addon-actions';


export default {
  title: 'Input'

}

export const TestInput = () => <input/>

export const TrackingInput = () => {
  const [value, setValue] =useState("")
  const onChange= (e:ChangeEvent<HTMLInputElement>) => {
    const actualValue = e.currentTarget.value
    setValue(actualValue)
  }
  return<> <input onChange={onChange}/> -----{value}</>
}

export const ClickInput = () => {
  const [value, setValue] =useState("")
  const inputRef= useRef<HTMLInputElement>(null)
 const save = ()=> {
    const el = inputRef.current as HTMLInputElement
    setValue(el.value)
  }
  return <> <input ref={inputRef}/><button onClick={save}>save</button> -----{value}</>
}

export const ControlledInput = ()=> {
   const  [stay, setStay] = useState('')
    return <input value={stay} onChange={(e)=>(setStay(e.currentTarget.value))} />
}

export const ControlledCheckBox = ()=> {
    const  [stay, setStay] = useState(false)
    return <input type='checkbox' checked={stay} onChange={(e)=>(setStay(e.currentTarget.checked))} />
}
export const ControlledSelect = ()=> {
    const  [stay, setStay] = useState<string | undefined>(undefined)
    const callback = (e: ChangeEvent<HTMLSelectElement>) => {
        setStay(e.currentTarget.value)
    }
    return (<select value={stay} onChange={callback}>
        <option>nums</option>
        <option id={'1'}>one</option>
        <option id={'2'}>two</option>
        <option id={'3'}>three</option>
    </select>)
}