import styled from 'styled-components'

export const Main = styled.div`
display: flex;
width:1200px;
height: 300px;
margin: 0 auto;
background-color: darkslateblue;
border: 1px solid darkslateblue;
box-shadow: 1px 6px 36px 7px;
`
export const SelectButton = styled.div`
width: 200px;
height: 300px;
position: relative;
`
export const SelectButtonWrap = styled.div`
width: 200px;
height: 66px;
position: absolute;
left: 0;
right: 0;
top: 0;
bottom: 0;
margin: auto;
`
export const TextJokeWrap = styled.div`
width: 1000px;
position: relative;
`
export const TextJoke = styled.div`
width: 900px;
height: 20px;
text-align: center;
position: absolute;
left: 0;
right: 0;
top: 0;
bottom: 0;
margin: auto;
color: aliceblue;
`
export const NewSelect = styled.select`
display: block;
width: 100px;
height: 30px;
font-size: 17px;
margin: 0 auto;
background-color: aliceblue;
border-radius: 10px;
:active, 
:focus {
    outline: none;
`
export const NewButton = styled.button`
border-radius: 10px;
background-color: chocolate;
color: aliceblue;
:active, 
:focus {
    outline: none;
}
`