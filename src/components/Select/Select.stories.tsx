import React, {ChangeEvent, useState} from 'react';
import { action} from '@storybook/addon-actions';
import Select from './Select';


export default {
    title: 'Select',
    component: Select,
};
const callBack = action("was clicked")

export const ControlledSelect = ()=> {
    const  [stay, setStay] = useState<string | undefined>(undefined)
    const callback = (e: ChangeEvent<HTMLSelectElement>) => {
        setStay(e.currentTarget.value)}
    return (<Select onChange={callBack}
        items={[{title: '---', value: 0},
        {title: 'You', value: 1},
        {title: 'are', value: 2},
        {title: 'awesome', value: 3},
        {title: '!', value: 4}]}
    />)
}

