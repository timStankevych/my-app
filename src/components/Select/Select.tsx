import React, {useEffect, useState, KeyboardEvent} from 'react';
import {ItemType} from '../Accordion/Accordion';
import cl from './Select.module.css'

type SelectPropsType = {
    value?: any
    onChange: (value: any) => void
    items: ItemType[]
}

function SelectSecret(props: SelectPropsType) {

    const [active, setActive] = useState<boolean>(false)
    const [hoveredElementValue, setHoveredElementValue] = useState(props.value)

    const selectedItem = props.items.find(i => i.value === props.value)
    const hoveredItem = props.items.find(i => i.value === hoveredElementValue)

    useEffect(() => {
        setHoveredElementValue(props.value);
    }, [props.value])

    const toggleItems = () => setActive(!active)
    const onItemClick = (value: any) => {
        props.onChange(value);
        toggleItems()
    }

    const onKeyUp = (e: KeyboardEvent<HTMLDivElement>) => {
        if (e.key === 'ArrowDown' || 'ArrowUp') {
            for (let i = 0; i < props.items.length; i++) {
                if (props.items[i].value === hoveredElementValue) {
                    const pretendentElement = e.key === 'ArrowDown' ? props.items[i + 1] : props.items[i - 1];
                    if (pretendentElement) {
                        props.onChange(pretendentElement.value);
                        return;
                    }
                }
            }
            if (!selectedItem) {
                props.onChange(props.items[0].value);
            }
        }

        if (e.key === 'Enter' || e.key === 'Escape') {
            setActive(false)
        }
    }

    return (
        <div className={cl.select} tabIndex={0} onKeyUp={onKeyUp}>
            <span onClick={toggleItems} className={cl.main}>{selectedItem && selectedItem.title}</span>
            {
                active &&
                <div className={cl.items}>
                    {props.items.map(i => <div
                        onMouseEnter={() => setHoveredElementValue(i.value)}
                        className={cl.item + ' ' + (hoveredItem === i ? cl.selected : '')}
                        key={i.value}
                        onClick={() => {
                            onItemClick(i.value)
                        }}>
                        {i.title}
                    </div>)}
                </div>
            }
        </div>
    )
}

export const Select = React.memo(SelectSecret)