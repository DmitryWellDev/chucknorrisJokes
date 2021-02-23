import React, {useCallback, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../Redux/store";
import {setFreeEnteredAsyncTextAC} from "../../Redux/FreeTextSearchingReducer";
import {r} from "../../api/api";
import {
    NewInput,
    Main,
    TextJokesWrap,
    TextJoke,
    InputButtonWrap,
    Wrap,
    NewButton,
    MovingArrow,
    MovingArrowWrap
} from "./styled";
import arrow from "../../essets/img/arrowLeft.gif";
import {PaginationPages} from "../PaginationPages/PaginationPages";


export const FreeTextSearching = React.memo(() => {

    const dispatch = useDispatch();

    const list = useSelector<AppRootStateType, any>(state => state.FreeTextSearchingReducer.jokesList)

    let [freeText, setFreeText] = useState<string>('')
    let [showError, setShowError] = useState<boolean>(false)

    let amountOfItems: number = 5
    let portionPagesSize: number = 10

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

    const setErrorOff = () => {
        setShowError(showError = false)
    }

    const getCurrentPage = useCallback((page: number) => {
        setPageNum(page)
    }, [])

    //edges of jokes portions
    let [pageNum, setPageNum] = useState(1)
    let leftEdgeJokePortion = (pageNum - 1) * amountOfItems + 1
    let rightEdgeJokePortion = pageNum * amountOfItems

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
                    <PaginationPages list={list}
                                     getCurrentPage={getCurrentPage}
                                     portionPagesSize={portionPagesSize}/>
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