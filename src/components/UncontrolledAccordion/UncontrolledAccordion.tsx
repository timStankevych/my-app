import React, {useReducer, useState} from 'react';

type AccordionPropsType = {
    titleValue: string
}

type ActionType = {
    type: string
}

const reducer = (state: boolean, action: ActionType) => {
    if (action.type === 'TOGGLE-COLLAPSED'){
        return !state
    }


    return state;
}

function UncontrolledAccordion(props: AccordionPropsType) {
    console.log('Accordion rendering')

    // let [collapsed, setCollapsed] = useState(false);

    let [collapsed, dispatch] = useReducer(reducer, false);

    return (
        <div>
            <AccordionTitle title={props.titleValue} onClick={() => {
                dispatch({type: 'TOGGLE-COLLAPSED'})
            }}/>
            {!collapsed && <AccordionBody/>}
        </div>
    )
}


type AccordionTitlePropsType = {
    title: string
    onClick: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log('AccordionTitle rendering')
    return (
        <div><h3 onClick={() => {
            props.onClick()
        }}>--- {props.title} ---</h3></div>
    )
};

function AccordionBody() {
    console.log('AccordionBody rendering')
    return (
        <div>
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>
        </div>
    )
}

export default UncontrolledAccordion;