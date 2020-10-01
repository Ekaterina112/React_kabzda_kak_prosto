import React, {ChangeEvent, useState} from 'react';
import {action} from '@storybook/addon-actions';
import SelectTwo from './SelectTwo';




export default {
    title: 'SelectTwo',
    component: SelectTwo,
};

export const WithValue = () => {

    const [value, setValue] = useState(1)
    return (<SelectTwo onChange={setValue}
                       value={value}
                       items={[{title: 'Hello!', value: 1},
                           {title: 'You', value: 2},
                           {title: 'are', value: 3},
                           {title: 'awesome', value: 4},
                           {title: '!', value: 5}]}

    />)
}

export const WithoutValue = () => {
    const [value, setValue] = useState(null)
    return (<SelectTwo onChange={setValue}
                       value={value}
                       items={[{title: '---', value: 0},
                           {title: 'You', value: 1},
                           {title: 'are', value: 2},
                           {title: 'awesome', value: 3},
                           {title: '!', value: 4}]}
    />)
}


