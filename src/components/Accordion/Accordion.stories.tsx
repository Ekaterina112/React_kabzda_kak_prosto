import React, {useState} from 'react';
import { action} from '@storybook/addon-actions';
import Accordion from './Accordion';


export default {
    title: 'Accordion',
    component: Accordion,
};
const callbackOn= action("some item was clicked")
const callback= action("was clicked")
export const AccordionCollapsed =() => <Accordion collapsed={true}
                                                  title={"UsersOne"}
                                                  onChange={callback}
                                                   items={[]}
                                                  onClick={callbackOn} />;
export const AccordionUncollapsed =() => <Accordion collapsed={false}
                                                    title={"UsersTwo"}
                                                    onChange={callback}
                                                    items={[{title:'Nick',value:1},{title:'Kate', value: 2},{title:'Rob', value:3}]}
                                                    onClick={callbackOn} />;
export const ChangeAccordion = () => {
    let [value, setValue] = useState<boolean>(true)
    return <Accordion title={'finish'}
                      collapsed={value}
                      onChange={()=> setValue(!value)}
                      items={[{title:'Nick',value:1},{title:'Kate', value:2},{title:'Rob', value:3}]}
                      onClick={callbackOn}/>
}
