import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import BG from "../img/bg.jpg";
import { Button } from "../styles";
import { secondary, Landscape } from "../styles";
import AboutMe from "../components/AboutMe";
import MySkills from "../components/MySkills";
import Certifications from "../components/Certifications";
import Experience from "../components/Experience";
import Footer from "../components/Footer";
import ScrollTop from "../components/ScrollTop";
import {pageAnimation, titleAnim } from "../animations";
import { Link } from "react-router-dom";
// import {}

const About = () => {
  return (
    <>
      <StyledAbout variants={pageAnimation}
        initial="hidden"
        animate="show"
        exit="exit">
        <img src={BG} alt="" srcset="" />
        <TitleDiv>
          <motion.h3 variants={titleAnim}>Moisés J. Pérez Gutiérrez</motion.h3>
          <motion.h1  className="HeadLines">
            Software Engineer
          </motion.h1>
          <Buttons >
            <Link to='/portfolio'><Button >My portfolio</Button></Link>

            <Link to='/contact'><Button  theme={secondary}>Get in touch</Button></Link>
            
          </Buttons>
        </TitleDiv>
      </StyledAbout>
      <AboutMe />
      <MySkills></MySkills>
      <Certifications></Certifications>
      <Experience></Experience>
      <FContainer>
        <Footer />
      </FContainer>
      
      <ScrollTop/>
      {/* <Footer></Footer> */}
    </>
  );
};

const StyledAbout = styled(motion.div)`
  position: relative;
  overflow-x: hidden;
  margin-bottom: 4vw;
  img {
    top: 0;
    left: -3rem;
    height: 100vh;
    width: 100vw;
    object-fit: cover;
    position: absolute;
    z-index: -1;
    /* @media (max-width: 1024px) {
      object-fit: scale-down;
    } */
    @media (max-width: 1023px) {
      display: none;
    }
  }
`;

const FContainer = styled(motion.div)`
  position: relative;
  height: 4rem;
`;

const TitleDiv = styled(motion.div)`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;

  h1 {
    font-size: 5.6rem;
    font-weight: bold;
    width: 812px;
    margin: 0px 0px 24px 0px;
    @media (max-width: 1023px) {
      width: 100%;
      font-size: 10vw;
      text-align: center;
  }
  }

  h3 {
    margin: 6px 0px -8px 0px;
    font-size: 1.5rem;
    font-weight: lighter;
    letter-spacing: 0.4rem;
    @media (max-width: 1023px) {
      text-align: center;
      width: 100%;
      font-size: 4vw;
      margin: 6px 0px -4px 0px;
  }
  }
`;

const Buttons = styled(motion.div)`
  button {
    margin-right: 4rem;
  }
  @media (max-width: 1023px) {
      text-align: center;
      button {
    margin: 0 1rem 1rem 1rem;
  }
      
    }
  
`;

export default About;
