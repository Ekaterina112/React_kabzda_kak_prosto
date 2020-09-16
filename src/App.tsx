import React, {useState} from 'react';
import './App.css';
import Accordion  from './components/Accordion/Accordion';
import {Rating, RatingValueType} from './components/Rating/Rating';
import OnOff from './components/OnOff/OnOff';
import UncontrolledAccordion from './components/UncontrolledAccordion/UncontrolledAccordion';
import UncontrolledRating from './components/UncontrolledRating/UncontrolledRating';
import UncontrolledOnOff from './components/UncontrolledOnOff/UncontrolledOnOff';

function App() {
   /* let [ratingValue, setRatingValue] = useState <RatingValueType>(0)
    let [collapsed, setCollapsed] = useState<boolean>(true)*/
    let [on, setOn] = useState<boolean>(false)
    return (
        <div>
           {/* <UncontrolledRating />*/}

           {/* <Accordion title = {"Good Morning"} collapsed ={collapsed} onChange = {()=>{setCollapsed(!collapsed)} }/>*/}
           {/* <Rating value = {ratingValue} onClick={setRatingValue}/>*/}

            <UncontrolledOnOff/>
            <OnOff on={on} onChange={setOn}/>
           {/* <OnOff call={false}/>
            <OnOff call={true}/>*/}
           {/* Article #1
            <Rating value = {1}/>
            Article #2
            <Rating value = {2}/>
            Article #3
            <Rating value = {3}/>
            Article #4
            <Rating value = {4}/>
            Article #5
            <Rating value = {5}/>
            <Accordion title = {"Good Morning"} collapsed ={true} />
            <Accordion title = {"Good Night"} collapsed ={false} />*/}
          {/*  <UncontrolledAccordion titleValue={'Menu first'} />*/}
            {/*<UncontrolledAccordion title={'Menu second'} />*/}
        </div>
    )
}


export default App;

