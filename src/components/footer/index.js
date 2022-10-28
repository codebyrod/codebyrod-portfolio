import React from 'react';
import * as S from "./style";
import logoInsta from "../../img/logo-instagram.png";
import logoGit from "../../img/logo-github.png";
import logoIn from "../../img/logo-linkedin.png";
import hadouken from "../../img/heartdouken.png";

export default function Footer() {
  return (
    <S.Container>
      <S.BoxTitle>
          <h2>Meus Contatos</h2>
      </S.BoxTitle>
      <S.Box>
        <S.Nav>
          <ul>
            <li>Home</li>
            <li>Sobre</li>
            <li>Portifólio</li>
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
        <p>feito por amor por @codebyrod</p>
      </div>
    </S.Container>
  )
}
