import styled from "styled-components";

export const Container = styled.div`
height: 13vh;
background-color: #212121;
padding: 1rem;
//font-family: 'Red Hat Display', sans-serif;
`
export const Nav = styled.nav` 
//width: 100%;
display:flex;
justify-content: space-between;
`

export const ImgLogo = styled.img` 
width: 7vw;
`
export const BoxItem = styled.ul`
font-family: 'Red Hat Display', sans-serif;
display: flex;
width: 60vw;
gap: .5rem ;
align-items: center;
justify-content: center;
`

export const ListItem = styled.li` 

a {
    display: block;
    width: 100px;
    text-align: center;
    letter-spacing: 1.5px;
    font-size:1rem;

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
    }
}

`