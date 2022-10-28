import React from 'react';
import * as S from './style';
import cardAfrica from '../../img/card-africa.png'
import cardHarry from '../../img/card-harry potter.png'
import cardHomeverse from '../../img/card-homeverse.png'
import cardShoppingCar from '../../img/card-shoppingcar.png'
import cardToDoHooks from '../../img/card-todohooks.png'

export const Portfolio = () => {
  return (
    <S.Container>
        <S.BoxTitle>
          <h2>Portfólio</h2>
        </S.BoxTitle>
        <S.BoxText>
          <p>Aqui estão alguns dos meus projetos.</p>
        </S.BoxText>
        <S.BoxImg>
          <img src= {cardAfrica} alt=""/>
          <img src= {cardHarry} alt=""/>
          <img src= {cardShoppingCar} alt=""/>
          <img src= {cardHomeverse} alt=""/>
          <img src= {cardToDoHooks} alt=""/>
        </S.BoxImg>
    </S.Container>
  )
}
            
