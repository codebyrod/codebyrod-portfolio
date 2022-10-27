import React from 'react'
import * as S from './style'
import Perfil from '../../img/about/perfil.png'
import Paraquedas from '../../img/about/paraquedas.png'
import Correndo from '../../img/about/correndo.png'
import Estudando from '../../img/about/estudando.png'
import SemiCircle from '../../img/about/semicircle.png'


export default function About() {
  return (
    <S.Container>
        <S.BoxTitle>
            <h2>Quem sou eu?</h2>
        </S.BoxTitle>
        <S.Box>
            <S.BoxImg>
                <S.Perfil src={Perfil} alt='Perfil' />
                <S.Paraquedas src={Paraquedas} alt='Paraquedas' />
                <S.Correndo src={Correndo} alt='Correndo' />
                <S.Estudando src={Estudando} alt='Estudando' />
               <S.SemiCircle src={SemiCircle} alt='' />
            </S.BoxImg>
            <S.BoxText>
                <h3>Sobre mim</h3>
                <S.BoxParagraph>
                <p>Mussum Ipsum, cacilds vidis litro abertis. Admodum accumsan disputationi eu sit. Vide electram sadipscing et per. Per aumento de cachacis, eu reclamis. Paisis, filhis, espiritis santis. Cevadis im ampola pa arma uma pindureta.</p>
                <p>Mussum Ipsum, cacilds vidis litro abertis. Admodum accumsan disputationi eu sit. Vide electram sadipscing et per. Per aumento de cachacis, eu reclamis. Paisis, filhis, espiritis santis. Cevadis im ampola pa arma uma pindureta.</p>
                <p>Mussum Ipsum, cacilds vidis litro abertis. Admodum accumsan disputationi eu sit. Vide electram sadipscing et per. Per aumento de cachacis, eu reclamis. Paisis, filhis, espiritis santis. Cevadis im ampola pa arma uma pindureta.</p>
                <p>Mussum Ipsum, cacilds vidis litro abertis. Admodum accumsan disputationi eu sit. Vide electram sadipscing et per. Per aumento de cachacis, eu reclamis. Paisis, filhis, espiritis santis. Cevadis im ampola pa arma uma pindureta.</p>
                </S.BoxParagraph>
                <S.BoxBtn>
                <S.Btn>Download CV</S.Btn>
                </S.BoxBtn>
            </S.BoxText>
        </S.Box>
    </S.Container>
  )
}
