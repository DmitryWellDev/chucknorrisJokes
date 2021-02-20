import React, {useEffect, useState} from 'react';
import './RandomJoke';
import {useDispatch, useSelector} from 'react-redux';
import {AppRootStateType} from "../../Redux/store";
import {setAsyncMainImageAC, setAsyncRandomJokeAC} from "../../Redux/RandomJokeReducer";
import styled from "styled-components"
import arrow from "../../essets/img/arrowLeft (1) (1) (1).gif"

const Main = styled.div`
display: flex;
width: 1200px;
height: 200px;
border: 1px solid darkslateblue;
background-color: darkslateblue;
text-align: center;
box-shadow: 1px 6px 36px 7px;
`
const MainImage = styled.div`
width: 50px;
height: 50px;
display: block;
margin: 0 auto;
`
const RandomJokeButton = styled.button`
text-align: center;
background-color: chocolate;
border-radius: 7px;
:active, 
:focus {
    outline: none;
}
color: aliceblue;
`
const ContentWrap = styled.div`
width: 150px;
height: 200px;
position: relative;
`
const TextJokeWrap = styled.div`
width: 1050px;
height: 200px;
position: relative;
`
const TextJoke = styled.div`
width: 1000px;
height: 20px;
display: table;
position: absolute;
left: 0;
right: 0;
top: 0;
bottom: 0;
margin: auto;
color: aliceblue;
`
const ImageButtonWrap = styled.div`
width: 150px;
height: 75px;
position: absolute;
left: 0;
right: 0;
top: 0;
bottom: 0;
margin: auto;
`


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

