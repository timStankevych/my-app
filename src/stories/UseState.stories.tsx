import React, {useState} from 'react';

export default {
    title: 'useStateDemo'
};

let generateData = () => {
    console.log('generateData')
    return 1
}

export const UseStateDemo = () => {
    console.log('useStateDemo');
    const [counter, setCounter] = useState(generateData);

    return (
        <>
            <button onClick={() => setCounter(state => state + 1)}>ADD</button>
            {counter}
        </>
    );
};