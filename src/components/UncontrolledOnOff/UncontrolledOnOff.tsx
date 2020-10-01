import React, {useState} from 'react';

export type PropsType = {
    onChange: () =>void
    defaultOn:boolean
 }

function UnControlledOnOff(props:PropsType) {

   /* let [on, setOn] = useState(true);*/


    const onStyle = {
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display: "inline-block",
        padding: "2px",
        background:props.defaultOn ? "green":"white"
    }
    const offStyle = {
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display: "inline-block",
        padding: "2px",
        background:props.defaultOn ? "white":"red"
    }
    const indicatorStyle = {
        width: "10px",
        height: "10px",
        borderRadius: "15px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "5px",
        background: props.defaultOn ? "green":"red"
    }

    return (
        <div>
            <div style={onStyle} onClick={props.onChange}>ON</div>
            <div style={offStyle} onClick={props.onChange}>OFF</div>
                <div style={indicatorStyle}></div>
                </div>
                )
}


export default UnControlledOnOff