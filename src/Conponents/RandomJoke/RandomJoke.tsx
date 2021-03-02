import React, {useEffect} from 'react';
import './RandomJoke';
import {useDispatch, useSelector} from 'react-redux';
import {AppRootStateType} from "../../Redux/store";
import {setAsyncMainImageAC, setAsyncRandomJokeAC} from "../../Redux/RandomJokeReducer";
import arrow from "../../essets/img/arrowLeft.gif"
import {
    Main,
    ContentWrap,
    ImageButtonWrap,
    MainImage,
    RandomJokeButton,
    TextJokeWrap,
    TextJoke
} from "./styled";


export function RandomJoke() {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(setAsyncMainImageAC())
    }, [dispatch])


    const setRandomJokeHandle = () => {
        dispatch(setAsyncRandomJokeAC())
    }

    const joke = useSelector<AppRootStateType, any>(state => state.RandomJokeReducer.value)
    const mainImage = useSelector<AppRootStateType, any>(state => state.RandomJokeReducer.mainImage)

    return (
        <Main>
            <ContentWrap>
                <ImageButtonWrap>
                    <MainImage as='img' src={mainImage} alt="mainImage"/>
                    <RandomJokeButton onClick={setRandomJokeHandle}>Random Joke</RandomJokeButton>
                </ImageButtonWrap>
            </ContentWrap>
            <TextJokeWrap>
                <TextJoke>{joke ? joke : <><img src={arrow}/><div>Click the button</div></>}</TextJoke>
            </TextJokeWrap>
        </Main>
    );
}

