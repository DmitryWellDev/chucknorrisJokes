import styled from 'styled-components'

export const ButtonNext = styled.button<{ isShowButton: boolean }>`
  display: ${({isShowButton}) => isShowButton ? 'block' : 'none'};
`
export const NewInput = styled.input<{ showError: boolean}>`
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