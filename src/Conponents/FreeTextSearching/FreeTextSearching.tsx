import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../Redux/store";
import {setFreeEnteredAsyncTextAC} from "../../Redux/FreeTextSearchingReducer";
import {r} from "../../api/api";
import {
    ButtonNext,
    NewInput,
    Main,
    TextJokesWrap,
    TextJoke,
    InputButtonWrap,
    Wrap,
    NewButton,
    PageNumbers,
    MovingArrow,
    MovingArrowWrap,
    PaginationWrap
} from "./styled";
import arrow from "../../essets/img/arrowLeft.gif";


export const FreeTextSearching = React.memo(() => {

    const dispatch = useDispatch();

    const list = useSelector<AppRootStateType, any>(state => state.FreeTextSearchingReducer.jokesList)

    let [freeText, setFreeText] = useState<string>('')
    let [showError, setShowError] = useState<boolean>(false)

    let total: any = []
    let pageCount: number = 0
    let pages = []
    let portionSize: number = 10
    let leftEdge: number
    let rightEdge: number
    let jokeAmount: number = 5
    let isShowButton = true

    for (let i: number = 0; i <= list.length; i++) {
        total.push(i)
        pageCount = total.length / portionSize
    }

    for (let i: number = 1; i <= pageCount; i++) {
        pages.push(i)
    }

    const FreeTextHandler = (value: string) => {
        setFreeText(value)
    }

    const submitHandler = () => {
        if (freeText === '') {
            setShowError(showError = true)
        } else {
            dispatch(setFreeEnteredAsyncTextAC(freeText))
            setShowError(showError = false)
        }
    }

    const getCurrentPage = (page: number) => {
        setPortionNumber(page)
        setPageNum(page)
    }

    const setErrorOff = () => {
        setShowError(showError = false)
    }

    // edges of pagination portions
    let [portionNumber, setPortionNumber] = useState(1)
    leftEdge = (portionNumber - 1) * portionSize + 1
    rightEdge = portionNumber * portionSize

    //edges of jokes portions
    let [pageNum, setPageNum] = useState(1)
    let leftEdgeJokePortion = (pageNum - 1) * jokeAmount + 1
    let rightEdgeJokePortion = pageNum * jokeAmount

    //hide button (next) in last page portion
    if (pageCount >= leftEdge && pageCount <= rightEdge) {
        isShowButton = false
    }

    return (
        <Main className="App">
            {/*input-button block*/}
            <InputButtonWrap>
                <Wrap>
                    <NewInput
                        onFocus={setErrorOff}
                        placeholder={showError ? 'Please write something' : ''}
                        showError={showError}
                        onChange={(e) => FreeTextHandler(e.currentTarget.value)} type="text"/>
                    <NewButton onClick={submitHandler}>Enter some Text</NewButton>
                </Wrap>
            </InputButtonWrap>
            {/*-----------------------------------------------------------------------------------------------------------------*/}
            {/*pagination block*/}
            {list.length !== 0 ? <TextJokesWrap>
                    <PaginationWrap>
                        {portionNumber > 1 && <button onClick={() => {
                            setPortionNumber(portionNumber - 1)
                        }}> {`prev`} </button>}
                        <div>
                            {pages.filter((p) => {
                                if (p >= leftEdge && p <= rightEdge) {
                                    console.log(p)
                                    return p
                                }
                            }).map(p => <PageNumbers
                                onClick={() => {
                                    getCurrentPage(p)
                                }}>{p}</PageNumbers>)}
                        </div>
                        <ButtonNext
                            onClick={() => {
                                setPortionNumber(portionNumber + 1)
                            }}
                            isShowButton={isShowButton}
                        >
                            {`next`}
                        </ButtonNext>
                    </PaginationWrap>
                    {/*-------------------------------------------------------------------------------------------------------------------------*/}
                    {/*text-jokes block*/}
                    {list.filter((el: r, index: number) => {
                        if (index >= leftEdgeJokePortion && index <= rightEdgeJokePortion) {
                            return el
                        }
                    }).map((el: r, index: number) => {
                        return <TextJoke>
                            <div key={index}>{el.value}</div>
                            <div>----------------------------------</div>
                        </TextJoke>
                    })}
                </TextJokesWrap>
                : <MovingArrowWrap>
                    <MovingArrow>
                        <img src={arrow}/>
                        <div>Enter some text</div>
                    </MovingArrow>
                </MovingArrowWrap>}
        </Main>
    );
})