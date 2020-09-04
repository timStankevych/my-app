import React, {ChangeEvent, useState} from 'react';




export default {
    title: 'Input',
}

export const UncontrolledInput = () => <input/>;
export const TrackValueUncontrolledInput = () => {
    const [value, setValue] = useState('');
    return <div><input onChange={(event) => {
        const actualValue = event.currentTarget.value;
        setValue(actualValue);
    }}/> - {value}</div>;
};

export const ControlledInput = () => {
    const [parentValue, setParentValue] = useState('')
    const onChange = (event: ChangeEvent<HTMLInputElement>) => setParentValue(event.currentTarget.value)

    return <input value={parentValue} onChange={onChange}/>
};

export const ControlledCheckbox = () => {
    const [parentValue, setParentValue] = useState(true)
    const onChange = (event: ChangeEvent<HTMLInputElement>) => setParentValue(event.currentTarget.checked)

    return <input type='checkbox' checked={parentValue} onChange={onChange}/>
};

export const ControlledSelect = () => {
    const [parentValue, setParentValue] = useState<string | undefined>('2')
    const onChange = (event: ChangeEvent<HTMLSelectElement>) => {setParentValue(event.currentTarget.value)}

    return <select value={parentValue} onChange={onChange}>
        <option>none</option>
        <option value={'1'}>Kyiv</option>
        <option value={'2'}>London</option>
    </select>

};


export const ControlledInputWithFixedValue = () => <input value={'123456789'}/>;