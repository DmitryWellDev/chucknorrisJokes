import {randomJokesAPI} from "../api/api";
import {put, call, takeEvery} from "redux-saga/effects"
import {SET_FREE_ENTERED_ASYNC_TEXT, setFreeEnteredTextAC} from '../Redux/FreeTextSearchingReducer'


type WorkerActionType = {
    type: string
    value: string
}

function* FreeTextSearchingSagaWorker(action: WorkerActionType) {

    const { value } = action;
    const data = yield call(()=> randomJokesAPI.searchFreeText(value))

    yield put(setFreeEnteredTextAC(data.data.result))
}

export function* FreeTextSearchingSagaWatcher() {
    yield takeEvery(SET_FREE_ENTERED_ASYNC_TEXT, FreeTextSearchingSagaWorker)
}
