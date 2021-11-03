import React from 'react';
import './App.css'
import Input from "./components/Input";
import CardList from "./components/CardList";
import {useCitiesList} from './components/hooks/useCitiesList'

const App = () => {

const [citiesList,dispatch]=useCitiesList()
    return (
        <div className='Main'>
            <Input dispatch={dispatch}/>
            <CardList citiesList={citiesList} dispatch={dispatch}/>
        </div>
    );
};

export default App;