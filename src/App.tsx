import React from 'react';
import './App.css';
import {RandomJoke} from "./Conponents/RandomJoke/RandomJoke";
import {JokeCategories} from "./Conponents/JokeCategories/JokeCategories";
import {FreeTextSearching} from "./Conponents/FreeTextSearching/FreeTextSearching";

function App() {
    return (
        <div className="App">
            <RandomJoke/>
            <JokeCategories/>
            <FreeTextSearching/>
        </div>
    );
}

export default App;
