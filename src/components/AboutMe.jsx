import React from "react";
import { HugeText, SectionDiv, Line } from "../styles";
import styled from "styled-components";
import { motion } from "framer-motion";
import me from "../img/me-1.jpg";
import {fadeIn } from "../animations";
import useScroll from './useScroll';

const AboutMe = () => {
  const [element, control] = useScroll()
  return (
    <SectionDiv variants={fadeIn} ref={element} animate={control} initial='hidden'>
      
      <Information>
      <HugeText>About Me</HugeText>
        <Image>
        
          <img src={me} alt="" srcset="" />
        </Image>
        <Description>
          <h2>Hi, I'm Moises</h2>
          <Line></Line>
          <p>
            I’m passionate about technology, entrepreneurship, and
            self-improvement. I studied software engineering at the Universidad
            Autónoma de Querétaro, during my time at the university I
            specialized in Frontend Development, Project Management and Agile Methodologies. I’m also a self-learner so I
            have learned many more things during my life such as Web and Mobile UX/UI
            Design, Backend Dev, Videogames dev, etc.
          </p>

          <h3>My Core Values</h3>
          <p>
            <b>Respect</b>, I have personally known this value since I was a
            child, but until a few years I finally comprehend that this value is
            the key to live a life in peace with others and myself.{" "}
          </p>
          <p>
            <b>Perseverance</b>, This is probably the first of the three that I
            started to apply in my life, since I was a child I always tried to
            achieve whatever I want, no matter how much I have to try.{" "}
          </p>
          <p>
            <b>Patience</b>, If could get back in time, I would definitelly
            implement this value as soon as I began to be conscius.
          </p>
        </Description>
      </Information>
    </SectionDiv>
  );
};

const Information = styled(motion.div)`
  display: flex;
  padding-top: 4rem;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  /* height: 100vh; */
  /* @media (max-width: 1024px) {
    padding-top: 0rem;
  } */
  @media (max-width: 1023px) {
    padding-top: 4.6rem;
    flex-wrap: wrap;
    height: auto;
    padding-bottom: 6vw;
    h1{
      top: -7vw;
    }
  }
`;

const Image = styled(motion.div)`
  margin: 0rem 4rem 0rem 3rem;
  height: 54%;
  width: 420px;
  background-color: #161616;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    height: 90%;
    width: 95%;
    object-fit: cover;
  }
  /* @media (max-width: 1024px) {
    margin: 0rem 2rem 0rem 4rem;
    height: 38%;
    width: 360px;
  } */
  @media (max-width: 1023px) {
    margin: 0rem 0.5rem 0rem 0.5rem;
    height: 20%;
    width: 160px;
    display: none;
  }
`;

const Description = styled(motion.div)`
  flex-basis: 680px;
  margin: 0rem 3rem 0rem 4rem;
  @media (max-width: 1023px) {
    flex-basis: 100%;
    margin: 0rem 0.5rem 0rem 0.5rem;
    h2{
      font-size: 7vw;
    }
    h3{
      font-size: 7vw;
    }
  }
`;

export default AboutMe;
