const SET_RANDOM_JOKE = 'SET-RANDOM-JOKE'
export const SET_ASYNC_RANDOM_JOKE = 'SET-ASYNC-RANDOM-JOKE'
const SET_MAIN_IMAGE = 'SET-MAIN-IMAGE'
export const SET_ASYNC_MAIN_IMAGE = 'SET-ASYNC-MAIN-IMAGE'

type setRandomJokeActionType = {
    type: 'SET-RANDOM-JOKE'
    data: string
}
type setAsyncRandomJokeActionType = {
    type: 'SET-ASYNC-RANDOM-JOKE'
}
type setMainImageActionType = {
    type: 'SET-MAIN-IMAGE'
    data: string
}
type setAsyncMainImageActionType = {
    type: 'SET-ASYNC-MAIN-IMAGE'
}

type actionsType = setRandomJokeActionType |
    setAsyncRandomJokeActionType |
    setMainImageActionType |
    setAsyncMainImageActionType

export type initialStateType = {
    value: string
    mainImage: string
}

const initialState = {
    value: '',
    mainImage: ''
}

export const RandomJokeReducer = (state: initialStateType = initialState, action: actionsType): initialStateType => {
    switch (action.type) {
        case 'SET-RANDOM-JOKE':
            return {
                ...state,
                value: action.data
            }
        case "SET-MAIN-IMAGE":
            return {
                ...state,
                mainImage: action.data
            }
        default:
            return state
    }
};

export const setRandomJokeAC = (data: any): setRandomJokeActionType => {
    return {type: SET_RANDOM_JOKE, data}
}
export const setAsyncRandomJokeAC = (): setAsyncRandomJokeActionType => {
    return {type: SET_ASYNC_RANDOM_JOKE}
}
export const setMainImageAC = (data: string): setMainImageActionType => {
    return {type: SET_MAIN_IMAGE, data}
}
export const setAsyncMainImageAC = (): setAsyncMainImageActionType => {
    return {type: SET_ASYNC_MAIN_IMAGE}
}
