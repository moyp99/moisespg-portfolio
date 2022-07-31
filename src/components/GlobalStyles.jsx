import { createGlobalStyle } from "styled-components";
import { motion } from "framer-motion";

const GlobalStyles = createGlobalStyle`
    html{
        overflow-x: hidden;
        margin: 0;
        padding: 0;
    &::-webkit-scrollbar{
            width:0.5rem
        }
        &::-webkit-scrollbar-thumb{
            background-color: #ffffff;
        }
        &::-webkit-scrollbar-track{
            background: #161616
            ;
        }
    }
    body{
        padding: 0rem 3rem 0rem 3rem;
        box-sizing: border-box;
        background-color: #010101;
        color: #CDCDCD;
        /* overflow: hidden; */
        margin: 0;
        font-family: 'Ubuntu', sans-serif;
        @media (max-width:1024px){
            overflow: hidden;
            padding: 0rem 1rem 0rem 1rem;
            margin: 0;
        }
    }
    h2{
        font-size: 40px;
        margin: 0px;
        font-weight: 400;
        letter-spacing: 10px;
        
    }
    h3{
        font-size: 32px;
        margin: 0px;
        font-weight: 300;
        letter-spacing: 6px;
        
    }
    h4{
        font-size: 28px;
        margin: 0px;
        font-weight: 300;
    
    }
    h5{
        font-size: 20px;
        margin: 0px;
        font-weight: 400;
    }
    p{
        font-size: 20px;
        margin: 0px 0px 10px 0px;
    }

`;

export default GlobalStyles;
