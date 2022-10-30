import React from 'react';
import * as S from "./style";
import logoInsta from "../../img/logo-instagram.png";
import logoGit from "../../img/logo-github.png";
import logoIn from "../../img/logo-linkedin.png";
import hadouken from "../../img/heartdouken.png";

export default function Footer() {
  return (
    <S.Container id='contatos'>
      <S.BoxTitle>
          <h2>Contatos</h2>
      </S.BoxTitle>
      <S.Box>
        <S.Nav>
          <ul>
            <S.Item to="home" spy={true} smooth={true} offset={-100} duration={500}>Home</S.Item>
            <S.Item to="sobre" spy={true} smooth={true} offset={-40} duration={500}>Sobre</S.Item>
            <S.Item to="portfolio" spy={true} smooth={true} offset={-70} duration={500}>Portfólio</S.Item>
          </ul>
        </S.Nav>
        <S.BoxLogo>
          <a href="https://github.com/codebyrod" target="__blank">
            <img src={logoGit} alt='github' />
          </a>
          <a href="https://www.linkedin.com/in/codebyrod/" target="__blank">
            <img src={logoIn} alt='linkedin' />
          </a>
          <a href="https://www.instagram.com/codebyrod/" target="__blank">
            <img src={logoInsta} alt='instagram' />
          </a>
        </S.BoxLogo>
        <div>
          <img src={hadouken} alt='personangem soltando mágia do amor' />
        </div>
      </S.Box>
      <div>
        <p>feito com amor por @codebyrod</p>
      </div>
    </S.Container>
  )
}
