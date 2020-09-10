import React, {useMemo, useState} from 'react';

export default {
    title: 'useMemo'
}

export const SelectsUseMemo = () => {
    console.log('SelectsUseMemo');

    const [counter, setCounter] = useState(0);
    const [cities, setCities] = useState([
        {
            name: 'Kyiv',
            people: 5000000,
            country: 'Ukraine'
        },
        {
            name: 'Moskov',
            people: 10000000,
            country: 'Russia'
        },
        {
            name: 'Minsk',
            people: 2000000,
            country: 'Belorus'
        },
        {
            name: 'Magadan',
            people: 100000,
            country: 'Russia'
        },
        {
            name: 'Lviv',
            people: 1000000,
            country: 'Ukraine'
        },
        {
            name: 'Dnipro',
            people: 2000000,
            country: 'Ukraine'
        },
        {
            name: 'Brest',
            people: 200000,
            country: 'Ukraine'
        },
        {
            name: 'Vitebsk',
            people: 50000,
            country: 'Ukraine'
        },
        {
            name: 'Rostov',
            people: 1500000,
            country: 'Russia'
        },
    ]);

    const cityPeople = useMemo(() => {
        console.log('cityPeople')
        const cityPeople = cities.filter(c => c.people > 1000000)
        return cityPeople
    }, [cities])

    const cityCountry = useMemo(() => {
        console.log('cityCountry')
        const cityCountry = cities.filter(c => c.country === "Ukraine")
        return cityCountry
    }, [cities])

    const cityNameStartM = useMemo(() => {
        console.log('cityNameStartM')
        const cityNameStartM = cities.filter(c => c.name.toUpperCase().indexOf('M') > -1)
        return cityNameStartM
    }, [cities])

    const onCounter = () => setCounter(counter + 1);
    return (
    <div>
    <button onClick={onCounter}>+</button>
        {counter}

        <select>
            {cityPeople.map(c => <option>{c.name}</option>)}
        </select>
        <select>
            {cityNameStartM.map(c => <option>{c.name}</option>)}
        </select>
        <select>
            {cityCountry.map(c => <option>{c.name}</option>)}
        </select>

        <button onClick={() => setCities([...cities,{
            name: 'New York',
            people: 20000000,
            country: 'USA'
        }])}>
            Add city
        </button>
</div>)
};