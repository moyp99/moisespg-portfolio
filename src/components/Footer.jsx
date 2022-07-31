import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import logo from "../img/mjpg-logo.png";

const Footer = () => {
  return (
    <FooterDiv>
      <p>E-mail me: moypg1999@gmail.com</p>

      <p>Made With ❤️ By Moises J. Perez </p>
      <img src={logo} alt="" />
    </FooterDiv>
  );
};

const FooterDiv = styled(motion.div)`
@media (max-width: 920px) and (orientation: landscape){
    display: none;
  }
  position: absolute;
  /* overflow-y: hidden; */
  bottom: 1rem;
  z-index: 10;
  width: 100vw;
  margin: 0rem 0rem -1rem -3rem;
  /* padding: 0rem 6rem; */
  min-height: 4rem;
  background-color: #0e0e0e;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  img {
    width: 48px;
    height: 48px;
    margin-left: 0rem;
    margin-top: -0.4rem;
    order: 2;
  }
  p {
    margin-left: 4rem;
  }
  p:nth-child(even) {
    padding-right: 4rem;
    /* background-color: red; */
    order: 3;
  }
  /* @media (max-width: 1024px) {
    margin: 0rem 0rem -1rem -1rem;
  } */

  @media (max-width: 1023px) {
    padding: 1rem 0rem 1rem 0rem;
    margin: 10rem 0rem 0rem -1rem;
    bottom: 0;
    height: 40px;
    justify-content: center;
    img {
    display: none;
  }
  p {
    margin-left: 0rem;
    text-align: center;
    font-size: 5vw;
  }
  p:nth-child(even) {
    padding-right: 0rem;
    /* background-color: red; */
    order: 3;
  }
  }
`;

export default Footer;
