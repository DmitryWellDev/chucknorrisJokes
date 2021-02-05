import axios from "axios";
import {type} from "os";

const instance = axios.create({
    baseURL: 'https://api.chucknorris.io/jokes/',
    withCredentials: true
});


export const randomJokesAPI = {
    getRandomJoke() {
        return instance.get<RandomJokeResponseType>(`random`)
            .then((res) => {
                return res.data.value
            })
    },
    getJokeCategories() {
        return instance.get<CategoriesResponseType>(`categories`)
            .then((res) => {
                return res.data
            })
    },
    getJokeCategory(category: string) {
        return instance.get<getJokeCategorieResponseType>(`random?category=${category}`)
            .then((res) => {
                return res.data.value
            })
    },
    searchFreeText(text: string) {
        const promise = instance.get<r[]>(`search?query=${text}`)
        return promise
    }
};


type RandomJokeResponseType = {
    "categories": [],
    "created_at": string,
    "icon_url": string,
    "id": string,
    "updated_at": string,
    "url": string,
    "value": string
}

type CategoriesResponseType = {}

type getJokeCategorieResponseType = {
    value: string
}

type freeTextSearchingResponseType = {
    config: {}
    data: freeSearchingDataType
    headers: {}
    request: any
    status: number
    statusText: string
}


type freeSearchingDataType = {
    result: []
    total: number
}

export type r = {
    created_at: string
    icon_url: string
    id: string
    updated_at: string
    url: string
    value: string
}