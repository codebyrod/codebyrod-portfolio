import styled from "styled-components";

export const Container = styled.div`
position: fixed;
top: 0;
z-index: 9;
width: 100vw;
height: 13vh;
padding: 1rem;
background-color: #212121;
box-shadow: 0px 1px 7px 0px rgb(0 0 0 / 65%);
font-family: 'Red Hat Display', sans-serif;


@media (max-width: 768px) {
    display: flex;
    align-items: center;
    height: 15vh;
}
`

export const Nav = styled.nav` 
display:flex;
justify-content: space-between;
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

@media (max-width: 768px) {
    width: 12vw;
}
`

export const MenuMobile = styled.div`
display: none;

img {
    display: none;
    cursor: pointer;
}

@media (max-width: 768px) {
    display: block;
    position: relative;
    align-items: center;
    position: fixed;
    left: 20%;
    width: 75vw;
    height: 3rem;
    display: flex;
    justify-content: flex-end;

    img{
        width: 70px;
        height: inherit;
        padding: .2rem;
        display: flex;
        justify-content: center;
        align-items: center;
    }
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
cursor: pointer;
}

@media (max-width: 768px){
    background-color:  red;
    display: none;
    overflow: hidden;
    position: fixed;
    z-index: 4;
    background-color: red;
    top: 40px;
    height: 100%;
    width: 100%;
    padding: 0;

    li{
        width: 100%;
    }

    li:hover{
        cursor: pointer;
        background-color: orange;
        a{
            color: blue;
    }
}}
`

export const Teste = styled.div`
width: 100%;
height: 100vh;
position: absolute;
top: 0;
background-color: pink;

`