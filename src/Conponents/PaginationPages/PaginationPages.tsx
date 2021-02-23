import React, {useState} from 'react';
import {PageNumbers, PaginationWrap} from "../FreeTextSearching/styled";
import {setCurrentPageAC} from "../../Redux/PaginationPagesReducer";
import {useDispatch} from "react-redux";
import {ButtonNext} from "./styled";


type PaginationPagesPropsType = {
    list: []
    getCurrentPage: (page: number) => void
    portionPagesSize: number
}

export const PaginationPages = React.memo((props: PaginationPagesPropsType) => {
    console.log('PaginationPages was rerandered')
    const dispatch = useDispatch();
    console.log(props.list)

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
        pageCount = total.length / portionPagesSize
    }

    for (let i: number = 1; i <= pageCount; i++) {
        pages.push(i)
    }

    const getCurrentPage = (page: number) => {
        dispatch(setCurrentPageAC(page))
        setPortionNumber(page)
        props.getCurrentPage(page)
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
            <div>
                {pages.filter((p) => {
                    if (p >= leftEdge && p <= rightEdge) {
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
    )
})