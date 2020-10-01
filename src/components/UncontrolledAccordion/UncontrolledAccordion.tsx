import React, {useReducer, useState} from 'react';
import {reduser, SET_COLLAPSED} from './reducer';


type AccordionPropsType = {
    collapsed ?: boolean
    titleValue:string
    defaultValue: ()=>void
}
type AccordionTitlePropsType = {
    onClick: () => void
    title:string
}


function UncontrolledAccordion(props: AccordionPropsType) {
   /*let [collapsed, setCollapsed]  = useState(false);*/

    let [state, dispatch]  = useReducer(reduser, {collapsed:false});
    return (
        <div>
            <AccordionTitle title={props.titleValue} onClick = { () => {dispatch({type: SET_COLLAPSED})}}/>
            {!state.collapsed &&  <AccordionBody/>}
        </div>
    )
}

function AccordionTitle(props:AccordionTitlePropsType) {
    return <h3 onClick={()=>{props.onClick()} }>{props.title}</h3>
}
function AccordionBody() {
    return (<ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>)
}

export default UncontrolledAccordion