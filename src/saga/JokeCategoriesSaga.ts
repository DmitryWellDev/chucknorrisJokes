import {CategoriesResponseType, randomJokesAPI} from "../api/api";
import {put, call, takeEvery} from "redux-saga/effects"
import {
    SET_ASYNC_CATEGORY,
    SET_ASYNC_JOKE_CATEGORIES,
    setCategoryAC,
    setJokeCategoriesAC
} from "../Redux/JokeCategoriesReducer";

type SetCategoryWorkerActionType = {
    type: string
    value: string
}

function* JokeCategoriesWorker() {
    const data: CategoriesResponseType = yield call(randomJokesAPI.getJokeCategories)
    yield put(setJokeCategoriesAC(data))
}

function* SetCategoryWorker(action: SetCategoryWorkerActionType) {

const { value } = action;
    const data = yield call(()=> randomJokesAPI.getJokeCategory(value))

    yield put(setCategoryAC(data))
}

export function* JokeCategoriesWatcher() {
    yield takeEvery(SET_ASYNC_JOKE_CATEGORIES, JokeCategoriesWorker)
}

export function* SetCategoryWatcher() {
    yield takeEvery(SET_ASYNC_CATEGORY, SetCategoryWorker)
}