//Paleta de Cores
// #CA01D2, #70018B, #510373, #01718D, #04BFBF

import styled from "styled-components";
import { Link } from "react-scroll";

export const Container = styled.div` 
background-color: #2e2e2e;
height: 90vh;
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

export const Box = styled.div`
width: 80vw;
height: 30vw;
display: flex;
justify-content: space-between;
align-items: center;
`

export const Nav = styled.nav`

ul{
    height: 20vw;
    width: 10vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
}
`

export const Item = styled(Link)`
transition: 200ms;

&:hover{
    font-weight: 700;
    cursor: pointer;
}
`

export const BoxLogo = styled.div`
display: flex;
flex-direction: column;
height: 20vw;
justify-content: space-around;

a{
    width: 5vw;
    height: 5vw;
    /* background-color: red; */
    display: flex;
    justify-content: center;
    align-items: center;
    transition: ease-in-out 200ms;
}

a:hover{
    padding: 1rem;
    border: 2px solid #fff;
}

img{
    width: 3vw;
}
`

