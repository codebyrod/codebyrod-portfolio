import styled from "styled-components";

export const Container = styled.div`
position: fixed;
width: 100vw;
height: 13vh;
padding: 1rem;
background-color: #212121;
box-shadow: 0px 1px 7px 0px rgb(0 0 0 / 65%);
font-family: 'Red Hat Display', sans-serif;
`
export const Nav = styled.nav` 
//width: 100%;
display:flex;
justify-content: space-between;
`
export const BoxLogo = styled.div` 
width: 7vw;
margin-left: 2rem;

img{
    width: 100%;
}
`

export const BoxItem = styled.ul`
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