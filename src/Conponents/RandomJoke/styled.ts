import styled from 'styled-components'

export const Main = styled.div`
display: flex;
width: 1200px;
height: 200px;
border: 1px solid darkslateblue;
background-color: darkslateblue;
text-align: center;
box-shadow: 1px 6px 36px 7px;
`
export const MainImage = styled.div`
width: 50px;
height: 50px;
display: block;
margin: 0 auto;
`
export const RandomJokeButton = styled.button`
text-align: center;
background-color: chocolate;
border-radius: 7px;
:active, 
:focus {
    outline: none;
}
color: aliceblue;
`
export const ContentWrap = styled.div`
width: 150px;
height: 200px;
position: relative;
`
export const TextJokeWrap = styled.div`
width: 1050px;
height: 200px;
position: relative;
`
export const TextJoke = styled.div`
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
export const ImageButtonWrap = styled.div`
width: 150px;
height: 75px;
position: absolute;
left: 0;
right: 0;
top: 0;
bottom: 0;
margin: auto;
`