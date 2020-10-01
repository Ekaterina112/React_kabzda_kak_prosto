import React, {useState} from 'react';
import { action} from '@storybook/addon-actions';
import UncontrolledOnOff from './UncontrolledOnOff';


export default {
    title: 'UncontrolledOnOff',
    component: UncontrolledOnOff,
};
export const callback= action("on or off was clicked")
export const OnMode =() => <UncontrolledOnOff defaultOn={false} onChange={callback}/>;
export const OffMode =() => <UncontrolledOnOff defaultOn={true} onChange={callback}/>;


 
