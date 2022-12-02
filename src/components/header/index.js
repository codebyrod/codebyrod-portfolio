import React from 'react';
import ImgLogo from '../../img/logo.png';
import * as S from './style';
import {Link} from "react-scroll";
import Hamburguer from '../../img/hamburguer.png';

export default function Header({toggleMenu}) {
  return (
    <>
    <S.Container>
      <S.Nav>
        <S.BoxLogo>
          <Link to="home" spy={true} smooth={true} offset={-100} duration={500}>
                <img src={ImgLogo} alt="Logo do site. Uma palavra R entre os símbolos matemáticos menor e maior que"/>
          </Link>
        </S.BoxLogo>
        <S.MenuMobile openMenuClick={toggleMenu}>
          <img onClick={toggleMenu} src={Hamburguer} alt=""/>
        </S.MenuMobile>
        <S.BoxItem>
          <S.ListItem>
            <Link to="home" spy={true} smooth={true} offset={-100} duration={500}>Home</Link>
          </S.ListItem>
          <S.ListItem>
            <Link to="sobre" spy={true} smooth={true} offset={-40} duration={500}>Sobre</Link>
          </S.ListItem>
          <S.ListItem>
            <Link to="portfolio" spy={true} smooth={true} offset={-70} duration={500}>Portfólio</Link>
          </S.ListItem>
          <S.ListItem>
            <Link to="contatos" spy={true} smooth={true} offset={50} duration={500}>Contatos</Link>
          </S.ListItem>
        </S.BoxItem>
      </S.Nav>
    </S.Container>
    </>
  )
}
