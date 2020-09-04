import React from 'react';

export type ItemType = {
    title: string
    value: any
}

type AccordionPropsType = {
    titleValue: string
    collapsed: boolean
    onChange: () => void
    items: ItemType[]
    onClick: () => void
}

function AccordionSecret(props: AccordionPropsType) {
    console.log('Accordion rendering')
    return (
        <div>
            <AccordionTitle title={props.titleValue}
                            onChange={props.onChange}
            />
            {!props.collapsed && <AccordionBody items={props.items} onClick={props.onClick}/>}
        </div>
    )
}

const Accordion = React.memo(AccordionSecret)

type AccordionTitlePropsType = {
    title: string
    onChange: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log('AccordionTitle rendering')
    return (
        <div><h3 onClick={(e) => props.onChange()}>--- {props.title} ---</h3></div>
    )
};

type AccordionBodyPropsType = {
    items: ItemType[]
    onClick: () => void
}

function AccordionBody(props: AccordionBodyPropsType) {
    console.log('AccordionBody rendering')
    return <ul>
        {props.items.map( (i, index) => <li onClick={() => {props.onClick()}} key={index}>{i.title}</li>)}
    </ul>
}

export default Accordion;