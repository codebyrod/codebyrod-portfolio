import styled from "styled-components";

export const Container = styled.div` 
height: 100vh ;
background-color: #2e2e2e;
display: flex;
justify-content: space-between;
align-items: center;
padding: 0 3rem;
`
export const BoxTxt = styled.div`
font-family: 'Red Hat Display',sans-serif;
height: 67vh;
width: 37vw;
display: flex;
justify-content: space-between;
flex-direction: column;
padding: 2rem 2rem;
//align-items: center ;
`

export const Intro = styled.p`
width: 28vw;
height: 6vh;
text-transform: uppercase;
font-family: 'Red Hat Display', sans-serif;
display: flex;
align-items: center;
`

export const Title = styled.h1` 
//font-family: 'Saira', sans-serif;
font-family: 'Major Mono Display', monospace;
font-size: 4rem;
height: 22vh;
width: 28vw;
`

export const Carrer = styled.p` 
//font-family: 'Saira', sans-serif;
font-family: 'Red Hat Display', sans-serif;
font-weight: 700;
color: #01718D;
font-size: 1.2rem;
width: 28vw;
display: flex;
align-items: center ;
height: 6vh;
letter-spacing: 2px;

span{
    font-size: 1rem;
    font-weight: 400;
    height: 3.2vh;
    width: 2.2rem;
    letter-spacing: 0px;
}
`

export const Paragraph = styled.p` 
font-family: 'Red Hat Display', sans-serif;
width: 28vw;
letter-spacing: 1px;
`

export const BoxImg = styled.div` 
width: 40vw;
display: flex;
justify-content: center;

img{
    width: 75%;
}
`
