import React, { useEffect, useState } from "react";
import {
  Nav,
  NavBarContainer,
  NavLogo,
  NavIcon,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavItemBtn,
  NavBtnLink,
} from "./NavBar.elements";
import { FaTimes, FaBars } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { Button } from "../../GlobalStyles";
const NavBar = () => {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true)

  const handleClick = () => setClick(!click);
/* CONDICION PARA AUMENTAR O DISMINUIR LA FUENTE */
  const showButton = () => {
    if (window.innerWidth<=960) {
        setButton(false)
    } else {
        setButton(true)
    }
  }

  useEffect(() => {
    showButton()
  },[])

  window.addEventListener('resize',showButton)
  /* CONDICION PARA AUMENTAR O DISMINUIR LA FUENTE */
  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <Nav>
          <NavBarContainer>
            <NavLogo to="/">
              <NavIcon />
              ULTRA
            </NavLogo>
            <MobileIcon onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </MobileIcon>
            <NavMenu onClick={handleClick} click={click}>
              <NavItem>
                <NavLinks href="#home" >Home</NavLinks>
              </NavItem>
              <NavItem>
              <NavLinks href="#pricing">Pricing</NavLinks>
              </NavItem>
              <NavItem>
              <NavLinks href="#products">Porducts</NavLinks>
              </NavItem>

              
              <NavItemBtn>

                {/* CONDICION PARA AUMENTAR O DISMINUIR LA FUENTE */}
                {button ? (
                    <NavBtnLink to='/sign-up'>
                        <Button primary >SIGN UP</Button>
                    </NavBtnLink>
                ) : (
                    <NavBtnLink to='/sign-up'>
                        <Button fontBig primary>
                            SIGN UP
                        </Button>
                    </NavBtnLink>
                )}
              </NavItemBtn>
            </NavMenu>
          </NavBarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default NavBar;
