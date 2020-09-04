import React, {useState} from 'react';
import {Select} from './Select';
import {action} from '@storybook/addon-actions';

export default {
    title: 'Select',
    component: Select
}

export const WithValueSelect = () => {

    const [value, setValue] = useState(2)

    return <Select onChange={setValue}
                   value={value}
                   items={[
                       {title: 'Tim', value: 1},
                       {title: 'Bim', value: 2},
                       {title: 'Fim', value: 3},
                   ]}/>
}


export const WithoutValueSelect = () => {

    const [value, setValue] = useState(null)

    return <Select onChange={setValue}
                   value={value}
            items={[
                {title: 'Tim', value: 1},
                {title: 'Bim', value: 2},
                {title: 'Fim', value: 3},
            ]}/>
}