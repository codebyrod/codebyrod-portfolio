import React from 'react';
import * as S from "./style";
import logoInsta from "../../img/logo-instagram.png";
import logoGit from "../../img/logo-github.png";
import logoIn from "../../img/logo-linkedin.png";
import hadouken from "../../img/heartdouken.png";
import { Link } from 'react-scroll';

export default function Footer() {
  return (
    <S.Container id='contatos'>
      <S.BoxTitle>
          <h2>Contatos</h2>
      </S.BoxTitle>
      <S.Box>
        <S.Nav>
          <ul>
            <Link to="home" spy={true} smooth={true} offset={-100} duration={500}>Home</Link>
            <Link to="sobre" spy={true} smooth={true} offset={-40} duration={500}>Sobre</Link>
            <Link to="portfolio" spy={true} smooth={true} offset={-70} duration={500}>Portfólio</Link>
          </ul>
        </S.Nav>
        <S.BoxLogo>
          <img src={logoGit} alt='' />
          <img src={logoIn} alt='' />
          <img src={logoInsta} alt='' />
        </S.BoxLogo>
        <div>
          <img src={hadouken} alt='' />
        </div>
      </S.Box>
      <div>
        <p>feito com amor por @codebyrod</p>
      </div>
    </S.Container>
  )
}
