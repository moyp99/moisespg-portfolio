import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { SectionDiv, HugeText, Line } from "../styles";
import useScroll from './useScroll';
import {fadeIn } from "../animations";

const MySkills = () => {
  const [element, control] = useScroll()
  return (
    <SectionDiv variants={fadeIn} ref={element} animate={control} initial='hidden'>
      
      <FlexDiv>
      <HugeText>My Skills</HugeText>
        <Skills>
       
          <h2>Soft Skills</h2>
          <SkillsLine></SkillsLine>
          <ul>
            <li>Self Learning</li>
            <li>Discipline</li>
            <li>Team Work</li>
            <li>Leadership</li>
            <li>Entrepreneurship</li>
            <li>Innovation</li>
            <li>Stress Management</li>
            <li>Adaptability</li>
            <li>Problem Solving</li>
            <li>Communication</li>
            <li>Time Management</li>
            <li>Critical thinking</li>
          </ul>
        </Skills>
        <Skills>
          <h2>Hard Skills</h2>
          <SkillsLine></SkillsLine>
          <ul>
            <li>Javascript</li>
            <li>ReactJs</li>
            <li>Redux</li>
            <li>Node JS</li>
            <li>Angular</li>
            <li>Python</li>
            <li>Figma</li>
            <li>Project Management</li>
            <li>Flutter</li>
            <li>SQL DBs</li>
            <li>NoSQL DBs</li>
            <li>PHP</li>
            <li>Agile Methodologies</li>
          </ul>
        </Skills>
      </FlexDiv>
    </SectionDiv>
  );
};

const FlexDiv = styled(motion.div)`
  display: flex;
  justify-content: center;
  position: relative;
  margin-top: 6rem;
  h1{
    margin-left: 2rem;
  }
  @media (max-width: 1023px) {
    flex-wrap: wrap;
    margin-top: 4.5rem;
    h1{
      top: -20vw;
    }
  }
`;

const Skills = styled(motion.div)`
  width: 40vw;
  height: 60vh;
  margin: 4rem 4rem 6rem 4rem;
  
  @media (max-width: 1023px) {
    margin: 0rem 0rem 0rem 0rem;
    width: 92vw;
    height:auto;
    h2{
      font-size:8.5vw;
    }
  }
  /* background-color: white; */
  ul {
    padding: 0;
    list-style: none;
  }
  li {
    font-size: 1.6rem;
    margin-bottom: 8px;
    @media (max-width: 1023px) {
      font-size: 5vw;
    }
  }
  li:nth-child(even) {
    /* background-color: red; */
    margin-left: 42%;
    @media (max-width: 1023px) {
      margin-left:50%;
    }
  }
`;

const SkillsLine = styled(Line)`
  width: 80% !important;
  @media (max-width: 1023px) {
    width: 100% !important;
    }
`;

export default MySkills;
