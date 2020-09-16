import React, {useState} from 'react';
import { action} from '@storybook/addon-actions';
import Accordion from './Accordion';


export default {
    title: 'Accordion',
    component: Accordion,
};
const callback= action("was clicked")
export const AccordionCollapsed =() => <Accordion collapsed={true} title={"UsersOne"} onChange={callback} />;
export const AccordionUncollapsed =() => <Accordion collapsed={false} title={"UsersTwo"} onChange={callback} />;
export const ChangeAccordion = () => {
    let [value, setValue] = useState<boolean>(true)
    return <Accordion title={'finish'} collapsed={value} onChange={()=> setValue(!value)}/>
}
