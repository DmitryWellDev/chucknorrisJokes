import {randomJokesAPI} from "../api/api";
import {Dispatch} from "redux";

const SET_RANDOM_JOKE = 'SET-RANDOM-JOKE'

type setRandomJokeActionType = {
    type:'SET-RANDOM-JOKE'
    data: string
}

type actionsType = setRandomJokeActionType

export type initialStateType = {
    value: string
}

const initialState = {
    value: ''
}


export const RandomJokeReducer = (state: initialStateType = initialState, action: actionsType): initialStateType => {
    switch (action.type) {
        case 'SET-RANDOM-JOKE':
            return {...state,
                value: action.data}
        default:
            return state
    }
};

export const setRandomJokeAC = (data: any) => {
    return {type: SET_RANDOM_JOKE, data}
}


export const setRandomJokeTC = () => {
    return (dispatch: Dispatch) => {
        randomJokesAPI.getRandomJoke()
            .then((res) => {
                dispatch(setRandomJokeAC(res))
            })
    }
}