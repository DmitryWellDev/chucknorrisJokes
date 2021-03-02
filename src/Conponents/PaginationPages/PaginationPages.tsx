import React, {useState} from 'react';
import {PageNumbers, PaginationWrap, PageNumbersWrap} from "../FreeTextSearching/styled";
import {setCurrentPageAC} from "../../Redux/PaginationPagesReducer";
import {useDispatch, useSelector} from "react-redux";
import {ButtonNext} from "./styled";
import {AppRootStateType} from "../../Redux/store";


type PaginationPagesPropsType = {
    list: []
    getPage: () => void
    portionPagesSize: number
}

export const PaginationPages = React.memo((props: PaginationPagesPropsType) => {
    const dispatch = useDispatch();

    const pageNumber = useSelector<AppRootStateType, any>(state => state.PaginationPagesReducer.currentPage)

    let pages = []
    let total: any = []
    let portionPagesSize = props.portionPagesSize
    let pageCount: number = 0
    let isShowButton = true

    // edges of pagination portions
    let [portionNumber, setPortionNumber] = useState(1)
    let leftEdge = (portionNumber - 1) * portionPagesSize + 1
    let rightEdge = portionNumber * portionPagesSize

    for (let i: number = 0; i <= props.list.length; i++) {
        total.push(i)
        pageCount = Math.ceil(total.length / portionPagesSize)
    }

    for (let i: number = 1; i <= pageCount; i++) {
        pages.push(i)
    }

    const getCurrentPage = (page: number) => {
        dispatch(setCurrentPageAC(page))
    }

    //hide button (next) in last page portion
    if (pageCount >= leftEdge && pageCount <= rightEdge) {
        isShowButton = false
    }

    return (
        <PaginationWrap>
            {portionNumber > 1 && <button onClick={() => {
                setPortionNumber(portionNumber - 1)
            }}> {`prev`} </button>}
            <PageNumbersWrap>
                {pages.filter((p) => {
                    if (p >= leftEdge && p <= rightEdge) {
                        return p
                    }
                }).map((p, index) => {
                    return <PageNumbers
                        key={index}
                        onClick={() => {
                            getCurrentPage(p)
                            props.getPage()
                        }}
                        isNumberClicked={pageNumber == p}
                        isFirstPortion={portionNumber > 1}
                    >{p}</PageNumbers>
                })}
            </PageNumbersWrap>
            <ButtonNext
                onClick={() => {
                    setPortionNumber(portionNumber + 1)
                }}
                isShowButton={isShowButton}
            >
                {`next`}
            </ButtonNext>
            <div>dfdfdf</div>
        </PaginationWrap>
    )
})