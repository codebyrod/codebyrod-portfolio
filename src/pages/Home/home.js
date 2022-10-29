import React from 'react'
import * as S from './style'
import ImgAvatar from '../../img/body3.png'

export default function Main() {
  return (
    <S.Container id='home'>
      <S.BoxTxt>
      <S.Intro>Olá, Mundo! Meu nome é</S.Intro>
      <S.Title>RoDRIGo soUsA</S.Title>
      <S.Carrer><span>Sou </span>Desenvolvedor Front-End</S.Carrer>
      <S.Paragraph>Apaixonado pela capacidade transformadora que a tecnologia tem na construção de um mundo melhor. Cada dia mais me supreendo com a quantidade de possibilidades existentes no universo da programação, nesse sentido sigo me especializando sempre.</S.Paragraph>
      </S.BoxTxt>
      <S.BoxImg>
        <img src={ImgAvatar} alt='' />
      </S.BoxImg>
    </S.Container>
  )
}