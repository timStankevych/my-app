import React, {useState} from 'react';
import Accordion from './Accordion';
import {action} from '@storybook/addon-actions';

export type ItemType = {
    title: string
    value: any
}

export default {
    title: 'Accordion',
    component: Accordion,
};

const callback = action('accordion mode change event fired')
const onClickCallback = action('some item was clicked')

export const MenuCollapsedMode = () => <Accordion titleValue={'Menu'}
                                                  collapsed={true}
                                                  onChange={callback}
                                                  items={[]}
                                                  onClick={onClickCallback}
/>;
export const UsersUncollapsedMode = () => <Accordion titleValue={'Users'}
                                                     collapsed={false}
                                                     onChange={callback}
                                                     items={menuAcc}
                                                     onClick={onClickCallback}
/>;

export const ModeChange = () => {
    const [value, setValue] = useState<boolean>(true)
    return <Accordion titleValue={'Users'}
                      collapsed={value}
                      onChange={() => setValue(!value)}
                      items={menuAcc}
                      onClick={onClickCallback}
    />
};

let menuAcc: ItemType[] = [
    {
        title: 'Tim',
        value: 1
    },
    {
        title: 'Mary',
        value: 2
    },
    {
        title: 'Rick',
        value: 3
    },
    {
        title: 'Kom',
        value: 5
    },
]
