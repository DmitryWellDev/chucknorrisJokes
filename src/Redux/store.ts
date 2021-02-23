import {applyMiddleware, combineReducers, createStore} from 'redux';
import {RandomJokeReducer} from "./RandomJokeReducer";
import {JokeCategoriesReducer} from "./JokeCategoriesReducer";
import {FreeTextSearchingReducer} from "./FreeTextSearchingReducer";
import createSagaMiddleware from 'redux-saga'
import {rootWatcher} from "../saga";
import {PaginationPagesReducer} from "./PaginationPagesReducer";

const sagaMiddleware = createSagaMiddleware()

const rootReducer = combineReducers({
    RandomJokeReducer: RandomJokeReducer,
    JokeCategoriesReducer: JokeCategoriesReducer,
    FreeTextSearchingReducer: FreeTextSearchingReducer,
    PaginationPagesReducer: PaginationPagesReducer
})

export const store = createStore(rootReducer,  applyMiddleware(sagaMiddleware));

export type AppRootStateType = ReturnType<typeof rootReducer>

// @ts-ignore
window.store = store;

sagaMiddleware.run(rootWatcher)