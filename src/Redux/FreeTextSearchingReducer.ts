import {r} from "../api/api";

const SET_FREE_ENTERED_TEXT = 'SET-FREE-ENTERED-TEXT'
export const SET_FREE_ENTERED_ASYNC_TEXT = 'SET-FREE-ENTERED-ASYNC-TEXT'

type setFreeEnteredTextActionType = {
    type: 'SET-FREE-ENTERED-TEXT'
    jokesList: Array<r>
}

type setFreeEnteredAsyncTextActionType = {
    type: 'SET-FREE-ENTERED-ASYNC-TEXT'
    value: string
}

type actionsType = setFreeEnteredTextActionType |
    setFreeEnteredAsyncTextActionType


export type initialStateType = {
    jokesList: Array<r>
}

const initialState = {
    jokesList: []
}


export const FreeTextSearchingReducer = (state: initialStateType = initialState, action: actionsType): initialStateType => {
    switch (action.type) {
        case 'SET-FREE-ENTERED-TEXT':
            return {
                ...state,
                jokesList: action.jokesList,
            }
        default:
            return state
    }
};

export const setFreeEnteredTextAC = (jokesList: Array<r>): setFreeEnteredTextActionType => {
    return {type: SET_FREE_ENTERED_TEXT, jokesList}
}
export const setFreeEnteredAsyncTextAC = (value: string): setFreeEnteredAsyncTextActionType => {
    return {type: SET_FREE_ENTERED_ASYNC_TEXT, value}
}


// export const setFreeEnteredTextTC = (text: string) => {
//     return (dispatch: Dispatch) => {
//         randomJokesAPI.searchFreeText(text)
//             .then((res) => {
//                 dispatch(setFreeEnteredTextAC(res.data))
//             })
//     }
// }