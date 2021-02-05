import {randomJokesAPI} from "../api/api";
import {Dispatch} from "redux";

const SET_JOKE_CATEGORIES = 'SET-JOKE-CATEGORIES'
const SET_CATEGORIE = 'SET-CATEGORIE'

type setJokeCategoriesActionType = {
    type: 'SET-JOKE-CATEGORIES'
    data: any
}

type setCategoryActionType = {
    type: 'SET-CATEGORIE'
    value: string
}

type actionsType = setJokeCategoriesActionType |
    setCategoryActionType

export type initialStateType = {
    categories: Array<string>
    value: any
}

const initialState = {
    categories: [],
    value: ''
}


export const JokeCategoriesReducer = (state: initialStateType = initialState, action: actionsType): initialStateType => {
    switch (action.type) {
        case 'SET-JOKE-CATEGORIES':
            return {
                ...state,
                categories: [...state.categories, ...action.data]
            }
        case "SET-CATEGORIE":
            return {
                ...state,
                value: action.value
            }
        default:
            return state
    }
};

export const setJokeCategoriesAC = (data: any): setJokeCategoriesActionType => {
    return {type: SET_JOKE_CATEGORIES, data}
}
export const setCategoryAC = (value: any): setCategoryActionType => {
    return {type: SET_CATEGORIE, value}
}


export const setJokeCategoriesTC = () => {
    return (dispatch: Dispatch) => {
        randomJokesAPI.getJokeCategories()
            .then((res) => {
                dispatch(setJokeCategoriesAC(res))
            })
    }
}

export const setCategoryTC = (category: string) => {
    return (dispatch: Dispatch) => {
        randomJokesAPI.getJokeCategory(category)
            .then((res) => {
                dispatch(setCategoryAC(res))
            })
    }
}