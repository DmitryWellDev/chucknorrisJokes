import React from 'react';
import  './RandomJoke';
import {useDispatch, useSelector} from 'react-redux';
import {setRandomJokeTC} from "../../Redux/RandomJokeReducer";
import {AppRootStateType} from "../../Redux/store";

export function RandomJoke() {
    const dispatch = useDispatch()

    const setRandomJokeHandle = () => {
        dispatch(setRandomJokeTC())
    }

    const joke = useSelector<AppRootStateType, any>(state => state.RandomJokeReducer.value)

    return (
        <div className="App">
            <div className='JokeField'>{joke}</div>
            <button onClick={setRandomJokeHandle}>Random Joke</button>
        </div>
    );
}

