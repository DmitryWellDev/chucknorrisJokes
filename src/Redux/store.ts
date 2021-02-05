import {applyMiddleware, combineReducers, createStore} from 'redux';
import {RandomJokeReducer} from "./RandomJokeReducer";
import thunk from "redux-thunk";
import {JokeCategoriesReducer} from "./JokeCategoriesReducer";
import {FreeTextSearchingReducer} from "./FreeTextSearchingReducer";


const rootReducer = combineReducers({
    RandomJokeReducer: RandomJokeReducer,
    JokeCategoriesReducer: JokeCategoriesReducer,
    FreeTextSearchingReducer: FreeTextSearchingReducer
})

export const store = createStore(rootReducer,  applyMiddleware(thunk));

export type AppRootStateType = ReturnType<typeof rootReducer>

// @ts-ignore
window.store = store;
