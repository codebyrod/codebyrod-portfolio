import React from 'react'
import * as S from './style'
import ImgAvatar from '../../img/body3.png'

export default function Main() {
  return (
    <S.Container>
      <S.BoxTxt>
      <S.Ola>Olá, Mundo</S.Ola>
      <S.Name>RODRIGO SOUSA</S.Name>
      <p>Desenvolvedor Front-End</p>
      <p>Estudante iniciante em Desenvolvimento Front End</p>
      </S.BoxTxt>
      <div>
        <img src={ImgAvatar} alt='' />
      </div>
    </S.Container>
  )
}
