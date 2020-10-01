import React from 'react';
import classes from './Select.module.css';

export type ItemType = {
    title:string
    value:any
}

export type SelectPropsType = {
    items:ItemType[]
    onChange ?: (value:any)=>void
}

function Select(props: SelectPropsType) {
        return (<select>
            {props.items.map((i) => <option key={i.value}> {i.title}
            </option>)}
        </select>
        )
}



export default Select