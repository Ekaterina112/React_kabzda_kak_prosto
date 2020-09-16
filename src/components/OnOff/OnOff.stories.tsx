import React, {useState} from 'react';
import { action} from '@storybook/addon-actions';
import OnOff from './OnOff';


export default {
    title: 'OnOff',
    component: OnOff,
};
const callback= action("was clicked")
export const OnMode =() => <OnOff on={true} onChange={callback} />;
export const OffMode =() => <OnOff on={false} onChange={callback} />;
export const ChangeOnOff = () => {
    let [onOff, setOnOff] = useState<boolean>(true)
    return <OnOff on={onOff} onChange={setOnOff}/>
}
 
