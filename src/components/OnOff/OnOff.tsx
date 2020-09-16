import React, {useState} from 'react';

type OnOffPropsType = {
    on: boolean
    onChange: (on:boolean) => void
}

function OnOff(props: OnOffPropsType) {

    const onStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        padding: '2px',
        background: props.on ? 'green' : 'white'
    }
    const offStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        padding: '2px',
        background: props.on ? 'white' : 'red'
    }
    const indicatorStyle = {
        width: '10px',
        height: '10px',
        borderRadius: '15px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '5px',
        background: props.on ? 'green' : 'red'
    }

    const OnClicked =() => {
        props.onChange(true)
    }
    const OffClicked=() => {
        props.onChange(false)
    }
    return (
        <div>
            <div style={onStyle} onClick={OnClicked}>ON</div>
            <div style={offStyle} onClick={OffClicked}>OFF</div>
            <div style={indicatorStyle}></div>
        </div>
    )
}


export default OnOff