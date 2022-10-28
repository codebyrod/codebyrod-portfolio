import React from 'react'
import ImgLogo from '../../img/logo.png'
import { Portfolio } from '../../pages/portfolio'
import * as S from './style'

export default function Header() {
  return (
    <S.Container>
      <S.Nav>
        <S.BoxLogo>
          <a href="/Home">
              <img src={ImgLogo} alt="Logo do site. Uma palavra R entre os símbolos matemáticos menor e maior que"/>
          </a>
        </S.BoxLogo>
        <S.BoxItem>
          <S.ListItem>
            <a href="/">Home</a>
          </S.ListItem>
          <S.ListItem>
            <a href="/">Sobre</a>
          </S.ListItem>
          {/* <S.ListItem>
            <a href="/">Serviços</a>
          </S.ListItem> */}
          <S.ListItem>
            <a href="/">Portfólio</a>
          </S.ListItem>
          <S.ListItem>
            <a href="/">Contatos</a>
          </S.ListItem>
        </S.BoxItem>
      </S.Nav>
    </S.Container>
  )
}
