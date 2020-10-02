import React, {useState} from 'react';
import './App.css';
import Accordion from './components/Accordion/Accordion';
import {Rating, RatingValueType} from './components/Rating/Rating';
import UncontrolledAccordion from './components/UncontrolledAccordion/UncontrolledAccordion';
import {UncontrolledRating} from './components/UncontrolledRating/UncontrolledRating';
import {UncontrolledOnOff} from './components/UncontrolledOnOff/UncontrolledOnOff';
import OnOff from './components/OnOff/OnOff';
import {Select} from './components/Select/Select';

function App(props: any) {
    //сама функция

    let [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    let [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)
    // let [selectCollapsed, setSelectCollapsed] = useState<boolean>(false)
    let [switchOn, setSwitchOn] = useState<boolean>(false)
let selectArr = [
    {title: 'Tim', value: 1},
    {title: 'Bim', value: 2},
    {title: 'Fim', value: 3},
]

    // возвращает JSX
    return (
        <div className={'App'}>
            <PageTitle title={'This is App component'}/>
            <PageTitle title={'My friends'}/>
            {/*<Accordion titleValue={'Users'}*/}
            {/*           collapsed={accordionCollapsed}*/}
            {/*           onChange={() => {*/}
            {/*               setAccordionCollapsed(!accordionCollapsed)*/}
            {/*           }}*/}
            {/*           items={menuAcc}*/}
            {/*           onClick={() => {*/}
            {/*           }}/>*/}
            <UncontrolledAccordion titleValue={'Menu'}/>
            {/*<Rating value={1} />*/}
            <UncontrolledRating defaultValue={0} onChange={setRatingValue}/>
            <Rating value={ratingValue} onClick={setRatingValue}/>
            {/*<Rating value={0} />*/}
            <OnOff on={switchOn} onChange={setSwitchOn}/>
            <UncontrolledOnOff onChange={setSwitchOn}/>{switchOn.toString()}
            <Select items={selectArr} value={1} onChange={() => {}}/>
        </div>
    );
};

type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType) {
    console.log('AppTitle rendering')
    return <h1>{props.title}</h1>
}

;


export default App;
