import { Link } from "react-scroll"
import * as S from "./style"

export default function MenuMobile({toggleMenu}) {

    return (
        <>
            <S.Container>
                <S.BtnMobile onClick={() => toggleMenu()}>
                X
                </S.BtnMobile>
                <S.Nav>
                    <S.BoxItem>
                        <S.ListItem >
                            <Link onClick={() => toggleMenu()} to="home" spy={true} smooth={true} offset={-100} duration={500}>Home</Link>
                        </S.ListItem>
                        <S.ListItem o>
                            <Link onClick={() => toggleMenu()} to="sobre" spy={true} smooth={true} offset={-40} duration={500}>Sobre</Link>
                        </S.ListItem>
                        <S.ListItem>
                            <Link onClick={() => toggleMenu()} to="portfolio" spy={true} smooth={true} offset={-70} duration={500}>Portfólio</Link>
                        </S.ListItem>
                        <S.ListItem >
                            <Link onClick={() => toggleMenu()} to="contatos" spy={true} smooth={true} offset={50} duration={500}>Contatos</Link>
                        </S.ListItem>
                    </S.BoxItem>
                </S.Nav>
            </S.Container>
        </>        
    )
} 