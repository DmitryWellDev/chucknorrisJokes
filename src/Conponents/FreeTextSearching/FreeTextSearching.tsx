import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../Redux/store";
import {setFreeEnteredTextTC} from "../../Redux/FreeTextSearchingReducer";
import {r} from "../../api/api";


type searchingResultType = {
    created_at: string
    icon_url: string
    id: string
    updated_at: string
    url: string
    value: string
}

type searchingResultArrayType = Array<searchingResultType>

export function FreeTextSearching() {


    const dispatch = useDispatch();

    const list = useSelector<AppRootStateType, any>(state => state.FreeTextSearchingReducer.jokesList)
    console.log(list);


    let [freeText, setFreeText] = useState('')

    const w = (value: string) => {
        setFreeText(value)
    }

    const submitHandler = () => {
        dispatch(setFreeEnteredTextTC(freeText))
    }

    return (
        <div className="App">
            <input onChange={(e) => w(e.currentTarget.value)} type="text"/>
            <button onClick={submitHandler}>Enter some Text</button>
            {/*{list.map((el: r) => {*/}
            {/*   return <div>{el.value}</div>*/}
            {/*})}*/}
            <div></div>
        </div>
    );
}