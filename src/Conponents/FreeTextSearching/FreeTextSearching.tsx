import React, {useState} from 'react';
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
    MovingArrowWrap,
    JokesWrap
} from "./styled";
import arrow from "../../essets/img/arrowLeft.gif";
import {PaginationPages} from "../PaginationPages/PaginationPages";

export const FreeTextSearching = React.memo(() => {

    const dispatch = useDispatch();

    const list = useSelector<AppRootStateType, any>(state => state.FreeTextSearchingReducer.jokesList)
    const pageNumber = useSelector<AppRootStateType, any>(state => state.PaginationPagesReducer.currentPage)

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

    //edges of jokes portions
    let [pageNum, setPageNum] = useState(1)
    let leftEdgeJokePortion = (pageNum - 1) * amountOfItems + 1
    let rightEdgeJokePortion = pageNum * amountOfItems

    const getPage = () => {
        setPageNum(pageNumber)
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
                    <NewButton onClick={submitHandler}>{`Enter some Text`}</NewButton>
                </Wrap>
            </InputButtonWrap>
            {/*-----------------------------------------------------------------------------------------------------------------*/}
            {/*pagination block*/}
            {list.length !== 0 ? <TextJokesWrap>
                    <PaginationPages list={list}
                                     getPage={getPage}
                                     portionPagesSize={portionPagesSize}/>
                    {/*-------------------------------------------------------------------------------------------------------------------------*/}
                    {/*text-jokes block*/}
                    <JokesWrap>
                        {list.filter((el: r, index: number) => {
                            if (index >= leftEdgeJokePortion && index <= rightEdgeJokePortion) {
                                return el
                            }
                        }).map((el: r, index: number) => {
                            return <TextJoke key={index}>
                                <div>{el.value}</div>
                                <div>----------------------------------</div>
                            </TextJoke>
                        })}
                    </JokesWrap>
                </TextJokesWrap>
                : <MovingArrowWrap>
                    <MovingArrow>
                        <img alt={'arrow'} src={arrow}/>
                        <div>Enter some text</div>
                    </MovingArrow>
                </MovingArrowWrap>}
        </Main>
    );
}
)