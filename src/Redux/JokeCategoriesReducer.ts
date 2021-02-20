import {CategoriesResponseType} from "../api/api";

const SET_JOKE_CATEGORIES = 'SET-JOKE-CATEGORIES'
export const SET_ASYNC_JOKE_CATEGORIES = 'SET-ASYNC-JOKE-CATEGORIES'
const SET_CATEGORY = 'SET-CATEGORY'
export const SET_ASYNC_CATEGORY = 'SET-ASYNC-CATEGORY'

type setJokeCategoriesActionType = {
    type: 'SET-JOKE-CATEGORIES'
    data: any
}

type setAsyncJokeCategoriesActionType = {
    type: 'SET-ASYNC-JOKE-CATEGORIES'
}

type setCategoryActionType = {
    type: 'SET-CATEGORY'
    value: string
}

type setAsyncCategoryActionType = {
    type: 'SET-ASYNC-CATEGORY'
    value: string
}

type actionsType = setJokeCategoriesActionType |
    setAsyncJokeCategoriesActionType |
    setCategoryActionType |
    setAsyncCategoryActionType

export type initialStateType = {
    categories: Array<string>
    value: string
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
        case 'SET-CATEGORY':
            return {
                ...state,
                value: action.value
            }
        default:
            return state
    }
};

export const setJokeCategoriesAC = (data: CategoriesResponseType): setJokeCategoriesActionType => {
    return {type: SET_JOKE_CATEGORIES, data}
}
export const setAsyncJokeCategoriesAC = (): setAsyncJokeCategoriesActionType => {
    return {type: SET_ASYNC_JOKE_CATEGORIES}
}
export const setCategoryAC = (value: string): setCategoryActionType => {

    return {type: SET_CATEGORY, value}
}
export const setAsyncCategoryAC = (value: string): setAsyncCategoryActionType => {
    return {type: SET_ASYNC_CATEGORY, value}
}
