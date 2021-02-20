import {randomJokesAPI} from "../api/api";
import {put, call, takeEvery} from "redux-saga/effects"
import {SET_ASYNC_MAIN_IMAGE, SET_ASYNC_RANDOM_JOKE, setMainImageAC, setRandomJokeAC} from "../Redux/RandomJokeReducer";

function* randomJokeWorker() {
   const data = yield call(randomJokesAPI.getRandomJoke)
    yield put(setRandomJokeAC(data))
}

export function* randomJokeWatcher() {
yield takeEvery(SET_ASYNC_RANDOM_JOKE, randomJokeWorker)
}

function* mainImageWorker() {
   const data = yield call(randomJokesAPI.getImage)
    yield put(setMainImageAC(data))
}

export function* mainImageWatcher() {
yield takeEvery(SET_ASYNC_MAIN_IMAGE, mainImageWorker)
}