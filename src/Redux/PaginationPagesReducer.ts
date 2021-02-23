
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE'

type setCurrentPageActionType = {
    type: 'SET-CURRENT-PAGE'
    page: number
}

type actionsType = setCurrentPageActionType

export type initialStateType = {
    currentPage: number
}

const initialState = {
    currentPage: 1
}


export const PaginationPagesReducer = (state: initialStateType = initialState, action: actionsType): initialStateType => {

    switch (action.type) {
        case 'SET-CURRENT-PAGE':
            return {
                ...state,
                currentPage: action.page
            }
        default:
            return state
    }
};

export const setCurrentPageAC = (page: number): setCurrentPageActionType => {
    return {type: SET_CURRENT_PAGE, page}
}
