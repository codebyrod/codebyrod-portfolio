import styled from "styled-components";

export const Container = styled.div`
background-color: #2e2e2e;
height: 100vh;
font-family: 'Red Hat Display',sans-serif;
display: flex;
flex-direction: column;
align-items: center;
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
    width: 8vw;
    height: 1vh;
    border-radius: 2rem;
    background: linear-gradient(to right, #04BFBF 0%, #CA01D2 100%);
    transition: width 700ms;
}

&:hover&::after{
    width: 20vw;
    }
`

export const BoxText = styled.div`
/* background-color: blue; */
width: 83vw;
height: 8vw;
display: flex;
align-items: center;

`

export const BoxImg = styled.div`
display: flex;
justify-content: space-around;
align-items: center;
/* background-color: red; */
width: 85vw;

img{
    width: 13vw;
    /* border-radius: 5%; */
    transition: ease-in-out 200ms;
    
}

img:hover{
    border: 3px solid #ffff;
    cursor: pointer;
}
`