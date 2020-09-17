import React, {useState} from 'react';

type OnOffPropsType = {
    onChange: (on:boolean) =>void
    defaultOn:boolean
}

function UncontrolledOnOff(props: OnOffPropsType) {
    let [on, setOn] = useState(props.defaultOn ? props.defaultOn : false);
    const onStyle = {
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display: "inline-block",
        padding: "2px",
        background:on ? "green":"white"
    }
    const offStyle = {
        width: "30px",
        height: "20px",
        border: "1px solid black",
        display: "inline-block",
        padding: "2px",
        background:on ? "white":"red"
    }
    const indicatorStyle = {
        width: "10px",
        height: "10px",
        borderRadius: "15px",
        border: "1px solid black",
        display: "inline-block",
        marginLeft: "5px",
        background: on ? "green":"red"
    }
const onClicked = () => { setOn(true)
    props.onChange(true)
}
const offClicked = () => {setOn(false)
    props.onChange(true)}
    return (
        <div>
            <div style={onStyle} onClick={onClicked}>ON</div>
            <div style={offStyle} onClick={offClicked}>OFF</div>
                <div style={indicatorStyle}></div>
                </div>
                )
}






export default UncontrolledOnOff