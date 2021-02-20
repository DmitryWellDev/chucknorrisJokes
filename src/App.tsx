import React from 'react';
import './App.css';
import {RandomJoke} from "./Conponents/RandomJoke/RandomJoke";
import {JokeCategories} from "./Conponents/JokeCategories/JokeCategories";
import {FreeTextSearching} from "./Conponents/FreeTextSearching/FreeTextSearching";
import styled from "styled-components"

const Main = styled.div`
width:1200px;
height: 500px;
margin: 0 auto;
`



function App() {
    return (
        <Main>
            <RandomJoke/>
            <JokeCategories/>
            <FreeTextSearching/>
        </Main>
    );
}

export default App;
