import React, {useEffect, useState} from 'react';

export default {
    title: 'UseEffectExample'
};


export const UseEffectExample = () => {
    console.log('useStateDemo');
    const [counter, setCounter] = useState(1);
    const [fake, setFake] = useState(1);

    // useEffect(() => {
    //     console.log('useEffect every render');
    //     document.title = counter.toString();
    // });
    //
    // useEffect(() => {
    //     console.log('useEffect only first render (like componentDidMount)');
    //     document.title = counter.toString();
    // }, []);
    //
    // useEffect(() => {
    //     console.log('useEffect first render and every counter changed');
    //     document.title = counter.toString();
    // }, [counter]);


    return (
        <>
            <button onClick={() => setFake(state => state + 1)}>ADD</button>
            {fake}
            <button onClick={() => setCounter(state => state + 1)}>ADD</button>
            {counter}
        </>
    );
};

export const SetTimeoutExample = () => {
    console.log('useStateDemo');
    const [counter, setCounter] = useState(1);
    const [fake, setFake] = useState(1);

    useEffect(() => {

        setInterval(() => {
           setCounter(state => state + 1)
        }, 1000);

    }, []);

    let date = new Date()

    return (
        <>
            {/*<button onClick={() => setFake(state => state + 1)}>ADD</button>*/}
            FAKE :{fake} <br/>
            {/*<button onClick={() => setCounter(state => state + 1)}>ADD COUNT</button>*/}
            COUNTER :{counter} <br/>
            TIME - {date.getHours()}:{date.getMinutes()}:{date.getSeconds()}
        </>
    );
};