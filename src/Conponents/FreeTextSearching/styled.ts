import styled from 'styled-components'

export const NewInput = styled.input<{ showError: boolean }>`
  width: 170px;
  height: 30px;
  border-radius: 10px;
  border: ${({showError}) => showError ? '4px solid red' : '1px solid aliceblue'};
  background-color: ${({showError}) => showError ? 'mistyrose' : 'aliceblue'};
  :active,
  :focus {
    outline: none;
  }
  ::placeholder {
    color: red;
    font-size: 14px;
    font-weight: bold;
    opacity: 0.5;
  }
`
export const Main = styled.div`
  display: flex;
  width: 1200px;
  min-height: 100%;
  margin: 0 auto;
  background-color: darkslateblue;
  border: 1px solid darkslateblue;
  box-shadow: 1px 6px 36px 7px;
`
export const TextJokesWrap = styled.div`
  width: 1000px;
  color: aliceblue;
  margin-top: 40px;
`
export const TextJoke = styled.div`
  width: 900px;
  text-align: center;
  padding: 10px;
`
export const InputButtonWrap = styled.div`
  width: 200px;
  height: 100%;
  position: relative;
`
export const Wrap = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 117px;
  bottom: 0;
  margin: auto;
`
export const NewButton = styled.button`
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

export const PageNumbers = styled.span<{isNumberClicked: boolean, isFirstPortion: boolean}>`
  color: ${({isNumberClicked}) => isNumberClicked ? 'chocolate' : 'white'};;
  margin-right: ${({isFirstPortion}) => isFirstPortion ? '5px' : '13px'};;
  cursor: pointer;
`
export const PaginationWrap = styled.div`
  display: flex;
  position: relative;
`
export const PageNumbersWrap = styled.div`
  width: 223px;
  height: 20px;
  position: absolute;
  left: 42px;
`
export const MovingArrowWrap = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`
export const MovingArrow = styled.div`
  width: 150px;
  height: 100px;
  color: aliceblue;
  left: 0;
  right: 0;
  top: 117px;
  bottom: 0;
  margin: 0 auto;
  position: absolute;
`
export const JokesWrap = styled.div`
  height: 100%;
  margin-top: 64px;
`