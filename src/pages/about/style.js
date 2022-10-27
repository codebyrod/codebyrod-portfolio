import styled from "styled-components";

//Paleta de Cores
// #CA01D2, #70018B, #510373, #01718D, #04BFBF

export const Container = styled.div`
background-color: #2e2e2e;
font-family: 'Red Hat Display',sans-serif;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 2rem;
height: 135vh;
`

export const BoxTitle = styled.div` 
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
height: 20vh;
//background-color: crimson;

h2{
    font-size: 2.3rem  ;
}

&::after{
    content: "";
    width: 10vw;
    height: 1vh;
    border-radius: 2rem;
    background: linear-gradient(to right, #04BFBF 0%, #CA01D2 100%);
    transition: width 700ms;
}

&:hover&::after{
    width: 20vw;
    }
`

export const Box = styled.div` 
//background-color: blue;
display: flex;
justify-content: center;
gap: 2rem;
//background-color: orange;
height: 100vh;
`

export const BoxImg = styled.div` 
width: 40vw;
height: 100vh;
//background-color: blue;
position: relative;

`

export const Perfil = styled.img` 
width: 80%;
margin-bottom: 2rem;
z-index: 0;
position: absolute;
width: 80%;
top: 20%;
right: 21%;
z-index: 1;

`
export const Paraquedas = styled.img`
width: 34%;
position: absolute;
top: -3%;
right: 15%;
z-index: 1;
//background-color: red;
`
export const Correndo = styled.img`
width: 33%;
position: absolute;
bottom: 31%;
left: 45%;
z-index: 1;
`
export const Estudando = styled.img` 
width: 33%;
position: absolute;
bottom: 34%;
left: -4%;
z-index: 1;
/* background-color: coral; */
`

export const SemiCircle = styled.img` 
position: absolute;
width: 32.6vw;
bottom: 10.5%;
left: -2%;
z-index: 3;
/* background-color: coral; */
`

export const BoxText = styled.div` 
width: 34vw;
//background-color: green;

h3{
    display: flex;
    gap: 1rem;
    align-items: center;
    justify-content: start;
    width: auto;
    padding: 1rem;
    font-size: 1.5rem;
    letter-spacing: 2px ;
    ::before{
        content: '______';
        color: #01718D;
        letter-spacing: 0px ;
    }
}
`

export const BoxParagraph = styled.div` 
//background-color: orange;
display: flex;
flex-direction: column;
height: 80vh;
justify-content: space-around ;
padding: 1rem;
`

export const BoxBtn = styled.div` 
display: flex;
justify-content: center;
align-items: center;
`

export const Btn = styled.button`
width: 18vw;
height: 6vh;
border-radius: 2rem;
background: linear-gradient(to right, #04BFBF 0%, #CA01D2 100%);
border: none;
letter-spacing: 1px;
font-size: 0.9rem;
    &:hover{
        /* background: #2e2e2e;
        border: linear-gradient(to right, #04BFBF 0%, #CA01D2 100%);
        transition: width 700ms; */
        border: solid 3px transparent;
        background-image: linear-gradient(to right, #04BFBF 0%, #CA01D2 100%);
        background-origin: border-box;
        background-clip: border-box;
        box-shadow: 2px 1000px 1px #2e2e2e inset;
        cursor: pointer;
    }
`
