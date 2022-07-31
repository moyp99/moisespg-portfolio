import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import logo from "../img/mjpg-logo.png";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import close from '../img/close.svg';
import menu from '../img/menu.svg';

const Nav = () => {
  const { pathname } = useLocation();
  const [isHidden, setIsHidden] = useState(false);

  const clickToggle = () => {
    setIsHidden(!isHidden);
  };
  return (
    <>
      <StyledNav>
        <Link to="/">
          <img src={logo} alt="" />
        </Link>
        {/* if you don't need to animate it use this:  {pathname === '/' ? <NavLine/> : ''} */}
        <ul>
          <li>
            <Link to="/">
              About
              <NavLine
                transition={{ duration: 0.5, ease: "easeOut" }}
                initial={{ width: "0%" }}
                animate={{ width: pathname === "/" ? "80%" : "0px" }}
              />
            </Link>
          </li>
          <li>
            <Link to="/portfolio">
              Portfolio
              <NavLine
                transition={{ duration: 0.5, ease: "easeOut" }}
                initial={{ width: "0%" }}
                animate={{ width: pathname === "/Portfolio" ? "80%" : "0px" }}
              />
            </Link>
          </li>
          <li>
            <Link to="/contact">
              Contact
              <NavLine
                transition={{ duration: 0.5, ease: "easeOut" }}
                initial={{ width: "0%" }}
                animate={{ width: pathname === "/Contact" ? "80%" : "0%" }}
              />
            </Link>
          </li>
        </ul>
      </StyledNav>
      {isHidden && (
        <HiddenNav>
          <ul>
            <li onClick={clickToggle}>
              <Link to="/">
                About
                
              </Link>
            </li>
            <li onClick={clickToggle}>
              <Link to="/Portfolio">
                Portfolio
               
              </Link>
            </li>
            <li onClick={clickToggle}>
              <Link to="/Contact">
                Contact
                
              </Link>
            </li>
          </ul>
        </HiddenNav>
      )}
      <ToggleNav>
        <Link to="/">
          <img src={logo} alt="" />
        </Link>
        <ToggleNavBtn onClick={clickToggle}>
          {isHidden ? <img  src={close}/> : <img src={menu}/>}
          
        </ToggleNavBtn>
      </ToggleNav>
    </>
  );
};

const ToggleNav = styled(motion.nav)`
  display: none;
  @media (max-width: 1023px){
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 3.5rem;
    background-color: #010101;
    position: fixed;
    left: 0;
    top: 0;
    margin: 0rem;
    padding: 0rem;
    z-index: 10;
    
    img {
      margin-top: 0.5rem;
      margin-left: 0.5rem;
     
    }
  }
`;

const ToggleNavBtn = styled(motion.button)`
  width: 2.5rem;
  height: 2.5rem;
  margin-top: 0.5rem;
  border-radius: 4px;
  border: none;
  margin-right: 0.5rem;
  background-color: #161616;
  color: white;
  outline: none;
  position: relative;
  padding: 0;
  img{
    margin: 4px;
    width: 80%;
    height: 80%;
  }
`;

const HiddenNav = styled(motion.div)`
  position: fixed;
  top: 3.5rem;
  right: 0;
  width: 100vw;
  height: auto;
  margin: 0 0;
  z-index: 9;
  background-color: #0e0e0e;
  box-shadow: -4px 4px 12px #0a0a0a;
  ul {
    text-align: right;
    margin: 0 0;                                
    list-style: none;
    padding: 0;
    li {
      /* margin-left: 0px; */
      text-align: right;
      font-size: 24px;
      padding: 10px 10px;
      border-top: 3px solid #010101;
      a {
        text-align: center;
        text-decoration: none;
        background-color: transparent;
        color: white;
        transition: all 0.5s ease;
        /* cursor: pointer; */
      }
      a:hover {
        font-size: 1.8rem;
        background-color: transparent;
        text-shadow: 0px 6px 10px #707070;
      }
    }
  }
`;

const StyledNav = styled(motion.nav)`
  @media (max-width: 1023px) {
    display: none;
  }
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0%;
  padding: 0;
  display: flex;
  justify-content: space-between;
  z-index: 10;

  img {
    width: 48px;
    height: 48px;
    margin-left: 3rem;
    margin-top: 1rem;
  }
  ul {
    margin-top: 1.4rem;
    margin-right: 40px;
    padding: 0;
    display: flex;
    /* cursor: pointer; */

    justify-content: flex-end;
    list-style: none;
    li {
      margin-right: 80px;
      font-size: 24px;
      a {
        text-decoration: none;
        background-color: transparent;
        color: white;
        transition: all 0.5s ease;
        /* cursor: pointer; */
      }
      a:hover {
        font-size: 1.8rem;
        background-color: transparent;
        text-shadow: 0px 6px 10px #707070;
      }
    }
  }
`;

const NavLine = styled(motion.div)`
  /* width: 60%; */
  height: 3px;
  background-color: white;

`;

export default Nav;
