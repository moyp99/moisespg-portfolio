import React from "react";
import { portfolioData } from "../portfolioData";
import styled from "styled-components";
import { motion } from "framer-motion";
import { HugeText, Landscape } from "../styles";
import Footer from "../components/Footer";
import { sliderContainer, slider, pageAnimation } from "../animations";
import ScrollTop from "../components/ScrollTop";

const Portfolio = () => {
  const portfolio = portfolioData;
  return (
    <>
      <motion.div
        variants={sliderContainer}
        initial="hidden"
        animate="show"
        exit="exit"
        
      >
        <Frame1 variants={slider}></Frame1>
        <Frame2 variants={slider}></Frame2>
        <Frame3 variants={slider}></Frame3>
        <Frame4 variants={slider}></Frame4>
      </motion.div>
      <StyledPortfolio
        variants={pageAnimation}
        initial="hidden"
        animate="show"
        exit="exit"
      >
        {portfolio.map((section) => (
          <Section id={section.section}>
            <HugeText>{section.section}</HugeText>
            <Cards>
              {section.data.map((data) => (
                <Card
                  id={data.title}
                  onClick={() => window.open(data.link, "_blank")}
                >
                  <img src={data.img}></img>
                  <h4>Project name: {data.title}</h4>
                  <p>Technologies: {data.technologies}</p>
                  <p>Date: {data.date}</p>
                  {/* <a href={data.link}>{data.link}</a> */}
                </Card>
              ))}
            </Cards>
          </Section>
        ))}
        <div className="separator"></div>
      </StyledPortfolio>
    
      <PFFooter>
        <Footer></Footer>
      </PFFooter>
      <ScrollTop/>
    </>
  );
};

const StyledPortfolio = styled(motion.div)`
  position: relative;
  /* height: 90vh; */
  margin-top: 10rem;
  width: 100%;
  /* background-color: white; */
  .separator {
    height: 4rem;
  }
  @media (max-width: 1023px)  {
   
    margin-top: 2rem;
  }
`;

const PFFooter = styled(motion.div)`
  position: relative;
  
`;

const Section = styled(motion.div)`
  position: relative;
  height: auto;
  width: 100%;
  margin-top: 3rem;
  display: flex;
  align-content: flex-start;
  justify-content: center;
  h1 {
    padding-top: 1rem;
  }
  @media (max-width: 1023px) {
    margin-top: 0rem;
    h1 {
      padding-top: 4rem;
    }
  }
`;

const Cards = styled(motion.div)`
  display: flex;
  width: 100%;
  justify-content: flex-start;
  flex-wrap: wrap;
  align-items: center;
  height: auto;
  padding: 2rem 0rem 8rem;

  margin-top: 0.8rem;
  @media (max-width: 1023px) {
    padding-top: 7rem;
    justify-content: center;
    padding-bottom: 3rem;
  }
`;

const Card = styled(motion.div)`
  width: 300px;
  height: 340px;
  background-color: #161616;
  border-radius: 4px;
  box-shadow: 4px 4px 12px #121212;
  margin: 1rem;
  padding: 1rem;
  cursor: pointer;
  /* flex-basis:320px; */
  img {
    width: 100%;
    object-fit: cover;
    z-index: 0;
  }
  h4 {
    margin-top: 1rem;
    font-size: 19px;
    font-weight: 400;
  }
  p {
    margin-top: 0.5rem;
    font-size: 1rem;
  }
`;

//Frame animation
const Frame1 = styled(motion.div)`
  position: fixed;
  left: 0;
  top: 10%;
  width: 100%;
  height: 100vh;
  background: #ebebe8;
  z-index: 2;
`;
const Frame2 = styled(Frame1)`
  background: #aaaaaa;
`;

const Frame3 = styled(Frame1)`
  background: #515252;
`;

const Frame4 = styled(Frame1)`
  background: #242424;
`;

export default Portfolio;
