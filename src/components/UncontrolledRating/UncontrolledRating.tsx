import React, {useState} from 'react';

export type RatingValueType = 0|1|2|3|4|5

type UncontrolledRatingPropsType = {
    defaultValue?:RatingValueType
    onChange: (value:RatingValueType)=>void
}

function UncontrolledRating(props:UncontrolledRatingPropsType) {
    let [value, setValue] = useState<RatingValueType>(props.defaultValue ? props.defaultValue:0)
        return (
            <div>
                <Star selected={value>0} setValue={()=>{setValue(1); props.onChange(1)}}/>
                <Star selected={value>1} setValue={()=>{setValue(2); props.onChange(2)}}/>
                <Star selected={value>2} setValue={()=>{setValue(3); props.onChange(3)}}/>
                <Star selected={value>3} setValue={()=>{setValue(4); props.onChange(4)}}/>
                <Star selected={value>4} setValue={()=>{setValue(5); props.onChange(5)}}/>
            </div>
        )
    }


type StarPropsType = {
    selected: boolean
    setValue: (value: 1|2|3|4|5) => void
    value: 1|2|3|4|5
    onChange: (value: 1|2|3|4|5)=>void
}
/*function Star(props:StarPropsType) {
    if (props.selected === true) {
        return (
            <span><b>star </b></span>
        )
    } else {
        return (
            <span>star </span>
        )
    }

}*/
function Star(props:StarPropsType){return <span onClick={()=>{props.setValue(props.value);props.onChange(props.value)
}}>{props.selected ? <b>star </b>:'star '}</span>}

export default UncontrolledRating