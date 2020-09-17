import React, {useState} from 'react';
import Accordion from '../Accordion/Accordion';

type AccordionPropsType = {
    collapsed ?: boolean
    titleValue:string
    defaultValue: ()=>void
}

function UncontrolledAccordion(props: AccordionPropsType) {

   let [collapsed, setCollapsed]  = useState(false);
    return (
        <div>
            <AccordionTitle title={props.titleValue} onClick = { () => {setCollapsed(!collapsed)}}/>
            {!collapsed &&  <AccordionBody/>}
        </div>
    )
}
type AccordionTitlePropsType = {
    onClick: () => void
    title:string
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