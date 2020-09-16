import React from "react";


type AccordionPropsType = {
    title: string
    collapsed: boolean
    onChange:() => void
}

function Accordion(props: AccordionPropsType) {
    return (
        <div>
            <AccordionTitle title={props.title} onChange={props.onChange}/>
            {!props.collapsed && <AccordionBody/>}
        </div>
    )
}
type AccordionTitleType = {
    title:string
    onChange:() => void
}
function AccordionTitle (props:AccordionTitleType) {
    return <h3 onClick={e =>props.onChange()}>{props.title}</h3>
}

function AccordionBody() {
    return (<ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>)
}

export default Accordion