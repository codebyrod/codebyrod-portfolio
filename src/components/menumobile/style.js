import styled from "styled-components";

export const Container = styled.div`
position: fixed;
width: 100vw;
height: 113vh;
top: 0;
left: 0;
z-index: 11;
display: flex;
justify-content: center;
align-items: center;

background: rgb(73,2,83);
background: linear-gradient(180deg, rgba(73,2,83,0.8) 0%, rgba(169,41,194,1) 100%);
backdrop-filter: blur(5px);
`

export const Nav = styled.nav`
display: flex;
justify-content: center;
align-items: flex-start;
width: 100%;
height: 80%;
`
export const BoxLogo = styled.div` 
width: 7vw;
margin-left: 2rem;

img{
    width: 100%;
}

img:hover{
    cursor: pointer;
}
`

export const BoxItem = styled.ul`
display: flex;
flex-direction: column;
width: 60vw;
height: 80vh;
gap: .5rem ;
align-items: center;
justify-content: space-around;
`

export const ListItem = styled.li` 
    display: block;
    text-align: center;
    letter-spacing: 1.5px;
    font-size: 2.2rem;
    border: 3px solid white;
    padding: 1rem 2rem;
    font-family: 'Red Hat Display', sans-serif;
    font-weight: 700;

    &:hover{
    background: --webkit-linear-gradient(left, #70018B 0%, #01718D 100%);
    background: linear-gradient(to right, #70018B 0%, #01718D 100%);
    background-clip: border-box;
    color: transparent;
    font-size: 1.1rem;
    font-weight: bold;
    transition: 400ms;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    cursor: pointer;
    }
`

export const BtnMobile = styled.button`
outline: none;
border: none;
background: transparent;
border: solid 3px white;
width: 4rem;
height: 4rem;
color: white;
position: absolute;
top: 35px;
right: 35px;
font-size: 2rem;
z-index: 10;
`