import React, {ChangeEvent, useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../Redux/store";
import {
    setAsyncCategoryAC,
    setAsyncJokeCategoriesAC,
} from "../../Redux/JokeCategoriesReducer";
import styled from "styled-components"
import arrow from "../../essets/img/arrowLeft.gif";


const Main = styled.div`
display: flex;
width:1200px;
height: 300px;
margin: 0 auto;
background-color: darkslateblue;
border: 1px solid darkslateblue;
box-shadow: 1px 6px 36px 7px;
`
const SelectButton = styled.div`
width: 200px;
height: 300px;
position: relative;
`
const SelectButtonWrap = styled.div`
width: 200px;
height: 66px;
position: absolute;
left: 0;
right: 0;
top: 0;
bottom: 0;
margin: auto;
`
const TextJokeWrap = styled.div`
width: 1000px;
position: relative;
`
const TextJoke = styled.div`
width: 900px;
height: 20px;
text-align: center;
position: absolute;
left: 0;
right: 0;
top: 0;
bottom: 0;
margin: auto;
color: aliceblue;
`
const NewSelect = styled.select`
display: block;
width: 100px;
height: 30px;
font-size: 17px;
margin: 0 auto;
background-color: aliceblue;
border-radius: 10px;
:active, 
:focus {
    outline: none;
`
const NewButton = styled.button`
border-radius: 10px;
background-color: chocolate;
color: aliceblue;
:active, 
:focus {
    outline: none;
}
`

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
        if (currentCat == '') {
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
                <TextJoke>{jokeAccordingToCat ? jokeAccordingToCat : <><img src={arrow}/>
                    <div>Choose the category</div>
                </>}</TextJoke>
            </TextJokeWrap>
        </Main>
    );
}

