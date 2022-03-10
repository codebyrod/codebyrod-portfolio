import React from 'react'
import ImgLogo from '../../img/logo.png'
import * as S from './style'

export default function Header() {
  return (
    <S.Container>
      <S.Nav>
        <a href="/Home">
            <S.ImgLogo src={ImgLogo} alt="Logo do site. Uma palavra R entre os símbolos matemáticos menor e maior que"/>
        </a>
        <S.BoxItem>
          <S.ListItem>
            <a href="/">Home</a>
          </S.ListItem>
          <S.ListItem>
            <a href="/">Sobre</a>
          </S.ListItem>
          <S.ListItem>
            <a href="/">Serviços</a>
          </S.ListItem>
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
