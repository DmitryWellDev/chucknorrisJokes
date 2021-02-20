import {all} from "redux-saga/effects"
import {mainImageWatcher, randomJokeWatcher} from "./RandomJokeSaga";
import {FreeTextSearchingSagaWatcher} from "./FreeTextSearchingSaga";
import {JokeCategoriesWatcher, SetCategoryWatcher} from "./JokeCategoriesSaga";

export function* rootWatcher() {
    yield all([randomJokeWatcher(),
        FreeTextSearchingSagaWatcher(),
        JokeCategoriesWatcher(),
        SetCategoryWatcher(),
        mainImageWatcher()])
}