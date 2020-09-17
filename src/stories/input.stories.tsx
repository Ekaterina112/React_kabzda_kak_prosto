import React, {ChangeEvent, useRef, useState} from 'react';


export default {
  title: 'Input'

}

export const ControlledInput = () => <input/>

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


