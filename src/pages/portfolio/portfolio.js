import React from 'react';
import * as S from './style';
import cardAfrica from '../../img/card-africa.png'
import cardHarry from '../../img/card-harry potter.png'
import cardHomeverse from '../../img/card-homeverse.png'
import cardShoppingCar from '../../img/card-shoppingcar.png'
import cardToDoHooks from '../../img/card-todohooks.png'
import cardStar from '../../img/card-starwars.png'

const Portfolio = () => {
  return (
    <S.Container id='portfolio'>
        <S.BoxTitle >
          <h2 >Portfólio</h2>
        </S.BoxTitle>
        <S.BoxText>
          <p>Aqui estão alguns dos meus projetos.</p>
        </S.BoxText>
        <S.BoxImg>
          <a href='https://github.com/codebyrod/memory-game' target="_blank" rel="noreferrer">
            <img src= {cardAfrica} alt=""/>
          </a>
          <a href='https://github.com/codebyrod/Star-Wars' target="_blank" rel="noreferrer">
            <img src= {cardHarry} alt=""/>
          </a>
          <a href='https://github.com/codebyrod/Harry-Potter' target="_blank" rel="noreferrer">
            <img src= {cardStar} alt=""/>
          </a>
          <a href='https://github.com/codebyrod/shopping-car' target="_blank" rel="noreferrer">
            <img src= {cardShoppingCar} alt=""/>
          </a>
          <a href='https://github.com/codebyrod/Homeverse' target="_blank" rel="noreferrer">
            <img src= {cardHomeverse} alt=""/>
          </a>
          <a href='https://github.com/codebyrod/ToDoHooks' target="_blank" rel="noreferrer">
            <img src= {cardToDoHooks} alt=""/>
          </a>
        </S.BoxImg>
    </S.Container>
  )
}

export default Portfolio
