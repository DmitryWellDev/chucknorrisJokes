import React, {ChangeEvent, useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../Redux/store";
import {
    setAsyncCategoryAC,
    setAsyncJokeCategoriesAC,
} from "../../Redux/JokeCategoriesReducer";
import arrow from "../../essets/img/arrowLeft.gif";
import {
    Main,
    SelectButton,
    SelectButtonWrap,
    NewButton,
    TextJokeWrap,
    TextJoke,
    NewSelect
} from "./styled";

export function JokeCategories() {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setAsyncJokeCategoriesAC())
    }, [dispatch])

    let [currentCat, setCurrentCat] = useState('')

    const jokeCategories = useSelector<AppRootStateType, any>(state =>
        state.JokeCategoriesReducer.categories)

    const jokeAccordingToCat = useSelector<AppRootStateType, any>(state => state.JokeCategoriesReducer.value)

    const getCurrentCategory = (c: ChangeEvent<HTMLSelectElement>) => {

        dispatch(setAsyncCategoryAC(c.target.value))
        setCurrentCat(c.target.value)
    }

    const changeJokeOfCategory = () => {
        if (currentCat === '') {
            dispatch(setAsyncCategoryAC(currentCat = jokeCategories[0]))
            // setCurrentCat(currentCat = jokeCategories[0])
        } else {
            dispatch(setAsyncCategoryAC(currentCat))
        }
    }

    return (
        <Main className="App">
            <SelectButton>
                <SelectButtonWrap>
                    <NewSelect onChange={getCurrentCategory}>
                        {jokeCategories.map((c: any, index: number) => {
                            return <option value={c} key={index}>{c}</option>
                        })}
                    </NewSelect>
                    <NewButton onClick={changeJokeOfCategory}>Enjoy by other jokes of this category</NewButton>
                </SelectButtonWrap>
            </SelectButton>
            <TextJokeWrap>
                <TextJoke>{jokeAccordingToCat ? jokeAccordingToCat : <><img alt={'arrow'} src={arrow}/>
                    <div>Choose the category</div>
                </>}</TextJoke>
            </TextJokeWrap>
        </Main>
    );
}

