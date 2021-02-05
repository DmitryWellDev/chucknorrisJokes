import React, {ChangeEvent, useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../Redux/store";
import {setCategoryTC, setJokeCategoriesTC} from "../../Redux/JokeCategoriesReducer";


export function JokeCategories() {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setJokeCategoriesTC())
    }, [dispatch])

    let [currentCat, setCurrentCat] = useState('')

    const jokeCategories = useSelector<AppRootStateType, any>(state =>
        state.JokeCategoriesReducer.categories)

    const jokeAccordingToCat = useSelector<AppRootStateType, any>((state) =>
        state.JokeCategoriesReducer.value)

    const getCurrentCategory = (c: ChangeEvent<HTMLSelectElement>) => {
           dispatch(setCategoryTC(c.target.value))
        setCurrentCat(c.target.value)
    }

    const changeJokeOfCategory = () => {
        dispatch(setCategoryTC(currentCat))
    }

    return (
        <div className="App">
            <select onChange={getCurrentCategory}>
            {jokeCategories.map((c: any, index: number) => { return <option value={c} key={index}>{c}</option>})}
            </select>
            <button onClick={changeJokeOfCategory}>Enjoy by other jokes of this category</button>
            <div>{jokeAccordingToCat}</div>
        </div>
    );
}

