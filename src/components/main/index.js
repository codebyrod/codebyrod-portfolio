import React, {useState} from 'react';
import Home from '../../pages/Home/home';
import About from '../../pages/about/about';
import Portfolio from '../../pages/portfolio/portfolio';
import Header from '../../components/header';
import Footer from '../../components/footer';
import MenuMobile from '../menumobile';
export default function Main() {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open)
  }
  return (
    <>
      <Header toggleMenu={toggleMenu} />
      {open === true ? <MenuMobile toggleMenu={toggleMenu} >
        </MenuMobile> : null}
      <Home />
      <About />
      <Portfolio />
      <Footer />
    </>
  )
}

