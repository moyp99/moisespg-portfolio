import styled from "styled-components";
import { motion } from "framer-motion";
import { HugeText, SectionDiv, Line, Button } from "../styles";
import React from "react";
import useScroll from "./useScroll";
import { fadeIn } from "../animations";
import { Link } from "react-router-dom";

const Experience = () => {
  const [element, control] = useScroll();
  return (
    <>
      <SectionDiv
        variants={fadeIn}
        ref={element}
        animate={control}
        initial="hidden"
      >
        <HugeText>Experience</HugeText>
        <MiniSection>
          <h2>Profesional Experience</h2>
          <Line></Line>
          <Certification>
            <div className="">
              <h4>Freelancing - UX / UI Web Developer </h4>
              <h5>November 2019 - Actuality</h5>
              <p>
                I have worked in more than 7 professional projects, thanks to
                them I acquired skills not only related to development, but also
                to dealing with clients, such as defining requirements,
                proposing innovative and efficient ideas, and delivering
                projects on time and within of the budget.
              </p>
            </div>
            <Button
              onClick={() =>
                window.open("https://moises.tk/portfolio", "_blank")
              }
            >
              Portfolio
            </Button>
          </Certification>
          <Certification>
            <div className="">
              <h4>Mijo brands - Front-end Developer</h4>
              <h5>July 2021 - Actuality</h5>
              <p>
                I am in charge of developing the frontend of the web
                applications with which the agency works, we use the REACT JS
                framework.
              </p>
            </div>
            <Link to="https://mijobrands.com/nosotros/#moises-perez">
              <Button>Visit website</Button>
            </Link>
          </Certification>
          <Certification>
            <div className="">
              <h4>Posible 2020 - Selected to national camp</h4>
              <h5>My project: colmena.fund</h5>
              <p>
                Colmena.fund was a business idea, which consists of a
                crowdlending platform powered by AI and also has the
                characteristics of a social network.
              </p>
            </div>
            <Button
              onClick={() =>
                window.open(
                  "https://drive.google.com/file/d/1xW0lHbFx6dlTYHDnWe_-wFO_MvevOR-x/view?usp=sharing",
                  "_blank"
                )
              }
            >
              Credential
            </Button>
          </Certification>
          <Certification>
            <div className="">
              <h4>
                Santander business innovation award 2020 - top 10 finalist
              </h4>
              <h5>My project: colmena.fund </h5>
              <p>
                Colmena.fund was a business idea, which consists of a
                crowdlending platform powered by AI and also has the
                characteristics of a social network.
              </p>
            </div>
            <Button
              onClick={() =>
                window.open(
                  "https://drive.google.com/file/d/1YNOpBvT3FV7ED-tp1rkQWSvu19propZo/view?usp=sharing",
                  "_blank"
                )
              }
            >
              Credential
            </Button>
          </Certification>
          <Certification>
            <div className="">
              <h4>Thera Tech - Front-end Developer</h4>
              <h5>January 2021 - May 2021</h5>
              <p>
                During my internship I was working as a front-end developer. My
                main task was to define, redesign and develop a task manager
                under the React framework.
              </p>
            </div>
            <Link to="/portfolio">
              <Button>Portfolio</Button>
            </Link>
          </Certification>
          {/* <Button>Visit Colmena.fund</Button> */}
        </MiniSection>
      </SectionDiv>
      {/* <Footer/> */}
    </>
  );
};

const MiniSection = styled(motion.div)`
  &:nth-child(even) {
    margin-top: 5rem;
  }
  margin-top: 1.5rem;
  @media (max-width: 1023px) {
    h2 {
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

  p {
    font-size: 16px;
    margin-bottom: 12px;
  }
  button {
    margin-top: 10px;
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
    p {
      font-size: 3.6vw;
    }
    button {
      /* margin-bottom: 1.5rem; */
      min-width: 120px;
      font-size: 13px;
    }
  }
`;

export default Experience;
