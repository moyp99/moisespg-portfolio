import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { HugeText, SectionDivColumn, Line, Button } from "../styles";
import useScroll from './useScroll';
import {fadeIn } from "../animations";

const Certifications = () => {
  const [element, control] = useScroll()
  return (
    <SectionDivColumn variants={fadeIn} ref={element} animate={control} initial='hidden'>
      <HugeText>Certifications</HugeText>
      <MiniSection>
        <h2>Coursera</h2>
        <Line></Line>
        <Certification>
          <div className="">
            <h4>Specialized Program - Project Management: Basic Principles</h4>
            <h5>University of California, Irvine, Tecnológico de Monterrey</h5>
          </div>
          <Button onClick={() => window.open('https://www.coursera.org/account/accomplishments/specialization/certificate/2US6838YTKSY', "_blank")}>Credential</Button>
        </Certification>
        <Certification>
          <div className="">
            <h4>Business Transformation with Google Cloud</h4>
            <h5>Google Cloud</h5>
          </div>
          <Button onClick={() => window.open('https://www.coursera.org/account/accomplishments/certificate/J2SPJGS6FCG5', "_blank")}>Credential</Button>
        </Certification>
        <Certification>
          <div className="">
            <h4>Digital Transformation</h4>
            <h5>BCG, University of Virginia</h5>
          </div>
          <Button onClick={() => window.open('https://www.coursera.org/account/accomplishments/certificate/4QBG7RCXPJ7Y', "_blank")}>Credential</Button>
        </Certification>
      </MiniSection>
      <MiniSection>
        <h2>Udemy</h2>
        <Line></Line>
        <Certification>
          <div className="">
            <h4>Flutter & Dart - The Complete Guide [2021 Edition]</h4>
            <h5>
              Academind by Maximilian Schwarzmüller, Maximilian Schwarzmüller
            </h5>
          </div>
          <Button onClick={() => window.open('https://www.udemy.com/certificate/UC-f9b4783c-0f62-4973-adb4-71d4bfb97f72/', "_blank")}>Credential</Button>
        </Certification>
        <Certification>
          <div className="">
            <h4>Máster en JavaScript: ECMAScript, Angular 9+, React, NodeJS</h4>
            <h5> Juan Fernando Urrego</h5>
          </div>
          <Button onClick={() => window.open('https://www.udemy.com/certificate/UC-6d878af4-a09d-4294-b2c3-ad487fd17082/', "_blank")}>Credential</Button>
        </Certification>
        <Certification>
          <div className="">
            <h4>SCRUM Práctico en Proyectos de Software </h4>
            <h5>Hector Bravo</h5>
          </div>
          <Button onClick={() => window.open('https://www.udemy.com/certificate/UC-aded5117-c63b-46de-b2b6-ca8cd57d23e3/', "_blank")}>Credential</Button>
        </Certification>
      </MiniSection>
    </SectionDivColumn>
  );
};

const MiniSection = styled(motion.div)`
  &:nth-child(even) {
    margin-top: 4rem;
  }
  &:last-child {
    margin-bottom: 5rem;
  }
  margin-top: 1.5rem;
  @media (max-width: 1023px) {
    h2{
      font-size: 8.5vw;
    }
    &:nth-child(even) {
      margin-top: 3rem;
    }
    margin-top: 0;
  }
`;

const Certification = styled(motion.div)`
  width: 88vw;
  display: flex;
  justify-content: space-between;
  h5 {
    margin-bottom: 8px;
  }
  h4{
    font-size: 2vw;
  }
  @media (max-width: 1023px) {
    /* flex-wrap: wrap; */
    justify-content: flex-start;
    margin-bottom: 1.5rem;
    h4 {
      font-size: 6vw;
    }
    h5 {
      /* text-align: center; */
      margin-bottom: 4px;
      font-size: 4vw;
    }
    button {
      /* margin-bottom: 1.5rem; */
      min-width: 120px;
      font-size: 13px;
    }
  }
`;

export default Certifications;
