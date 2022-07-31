import styled from "styled-components";
import { motion } from "framer-motion";

//Button sizes: lg, md, sm
//Button colors: primary - secondary

export const theme = {
  btnColor: "#fff",
  textColor: "#000",
  boxShadow: "0px 4px 12px #646464",
};

export const secondary = {
  btnColor: "#161616",
  textColor: "#fff",
  boxShadow: "0px 0px 0px #727272",
};

export const disabledBtn = {
  btnColor: "#666666",
  textColor: "#3d3d3d",
  boxShadow: "0px 0px 0px #727272",
};

export const Button = styled(motion.button)`
  border-radius: 20px;
  border-style: none;
  background-color: ${(props) => props.theme.btnColor};
  color: ${(props) => props.theme.textColor};
  font-size: 16px;
  font-family: "Ubuntu", sans-serif;
  font-weight: bold;
  padding: 10px 12px 10px 12px;
  min-width: 160px;
  height: 36px;
  box-shadow: ${(props) => props.theme.boxShadow || "0px 4px 12px #797979"};
  outline: none;
  cursor: pointer;
`;

export const HugeText = styled(motion.h1)`
  margin: 0px;
  position: absolute;
  top: -8vw;
  left: 0;
  
  font-size: 10vw;
  color: #ffffff;
  opacity: 0.2;
  font-family: "Ubuntu", sans-serif;
  font-weight: bold;
  z-index: 2;
 
  @media(max-width: 1023px){
    font-size: 14vw !important;
    padding-top: 1rem;
    margin-left: 0rem !important;
    
  }
`;

export const SectionDiv = styled(motion.div)`
  
  position: relative;
  
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 8rem;
  @media(max-width: 1023px){
    height: auto;
    margin-bottom: 2rem;
  
  }
  
`;

export const SectionDivColumn = styled(motion.div)`
  
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 8rem;
  @media(max-width: 1023px){
    height: auto;
    margin-bottom: 2rem;
    
  }

`;

export const Line = styled(motion.div)`
    width:100%;
    border: 1px solid white;
    margin-bottom: 12px;
    margin-top: 2px;
`;

export const Landscape = styled(motion.div)`
display: none;
width: 100vw;
height: 100vh;
background-color: black;
  
  justify-content: center;
  align-items: center;
  @media (max-width: 920px) and (orientation: landscape){
    display: flex;
  }

`;

