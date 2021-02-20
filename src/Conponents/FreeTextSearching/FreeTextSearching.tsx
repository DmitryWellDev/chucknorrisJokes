import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../Redux/store";
import {setFreeEnteredAsyncTextAC} from "../../Redux/FreeTextSearchingReducer";
import {r} from "../../api/api";
import styled from "styled-components"


const Main = styled.div`
display: flex;
width:1200px;
height: 100%;
margin: 0 auto;
background-color: darkslateblue;
border: 1px solid darkslateblue;
box-shadow: 1px 6px 36px 7px;
`
const TextJokesWrap = styled.div`
width: 1000px;
color: aliceblue;
margin-top: 40px;
`
const TextJoke = styled.div`
width: 900px;
text-align: center;
padding: 10px;
`
const InputButtonWrap = styled.div`
width: 200px;
height: 100%;
position: relative;
`
const Wrap = styled.div`
position: absolute;
left: 0;
right: 0;
top: 117px;
bottom: 0;
margin: auto;
`
const NewInput = styled.input`
height: 30px;
border-radius: 10px;
background-color: aliceblue;
:active, 
:focus {
    outline: none;
`
const NewButton = styled.button`
text-align: center;
background-color: chocolate;
border-radius: 7px;
:active, 
:focus {
    outline: none;
}
    color: aliceblue;
    margin: 0 auto;
`
const PageNumbers = styled.span`
margin-right: 5px;
cursor: pointer;
`
const PaginationWrap = styled.div`
display: flex;
`


export const FreeTextSearching = React.memo(() => {

    const dispatch = useDispatch();

    const list = useSelector<AppRootStateType, any>(state => state.FreeTextSearchingReducer.jokesList)
    console.log(list)
    let [freeText, setFreeText] = useState('')

    const FreeTextHandler = (value: string) => {
        setFreeText(value)
    }

    const submitHandler = () => {
        dispatch(setFreeEnteredAsyncTextAC(freeText))
    }
    let total: any = []
    let pageCount: number = 0
    let pages = []
    let portionSize = 10
    let leftEdge: number
    let rightEdge: number
    let jokeAmount = 5

    for (let i: number = 0; i <= list.length; i++) {
        total.push(i)
        pageCount = total.length / portionSize
    }

    for (let i: number = 1; i <= pageCount; i++) {
        pages.push(i)
    }

    const getCurrentPage = (page: number) => {
        setPortionNumber(page)
        setPageNum(page)
    }

    let [portionNumber, setPortionNumber] = useState(1)
    leftEdge = (portionNumber - 1) * portionSize + 1
    rightEdge = portionNumber * portionSize

let [pageNum, setPageNum] = useState(1)
    let leftEdgeJokePortion = (pageNum - 1) * jokeAmount + 1
    let rightEdgeJokePortion = pageNum * jokeAmount


    return (
        <Main className="App">
            <InputButtonWrap>
                <Wrap>
                    <NewInput onChange={(e) => FreeTextHandler(e.currentTarget.value)} type="text"/>
                    <NewButton onClick={submitHandler}>Enter some Text</NewButton>
                </Wrap>
            </InputButtonWrap>
            <TextJokesWrap>
                <PaginationWrap>
                    {portionNumber > 1 && <button onClick={() => {
                        setPortionNumber(portionNumber - 1)
                    }}>prev</button>}
                    <div>
                        {pages.filter((p) => {
                            if (p >= leftEdge && p <= rightEdge) {
                                return p
                            }
                        }).map(p => <PageNumbers onClick={() => {
                            getCurrentPage(p)
                        }}>{p}</PageNumbers>)}
                    </div>
                    {pageCount > portionNumber && <button onClick={() => {
                        setPortionNumber(portionNumber + 1)
                    }}>next</button>}
                </PaginationWrap>
                {list.filter((el: r, index: number) => {
                    if (index >=leftEdgeJokePortion && index <= rightEdgeJokePortion) {
                        return el
                    }
                }).map((el: r, index: number) => {
                    return <TextJoke>
                        <div key={index}>{el.value}</div>
                        <div>----------------------------------</div>
                    </TextJoke>
                })}
            </TextJokesWrap>
        </Main>
    );
})