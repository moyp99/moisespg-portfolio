import React, { useState, useEffect } from "react";
import Footer from "../components/Footer";
import { SectionDiv, Button, Landscape } from "../styles";
import styled from "styled-components";
import { motion } from "framer-motion";
import ScrollTop from "../components/ScrollTop";
import { pageAnimation } from "../animations";
import Axios from "axios";
import { theme, disabledBtn } from "../styles";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [disabled, setDisabled] = useState(true);
  const [emailSent, setEmailSent] = useState(false);
  const API_PATH = 'https://mjpg-portfolio-api.herokuapp.com/api/email/';

  const sendMail = (event) => {
    event.preventDefault();
    console.log('attempting to send an email... wait for response')
    Axios.post(API_PATH, 
      {name, email, subject, message}
    ).then(res => {
      console.log('email sent!')
      setEmailSent(true);
    });
  };

  useEffect(() => {
    if(name !== '' && email !=='' && message !== '' ){
      setDisabled(false);
    }else{
      setDisabled(true)
    }
    
  }, [message,name,email,subject])

  return (
    <>
      <SectionContact
        variants={pageAnimation}
        initial="hidden"
        animate="show"
        exit="exit"
      >
        <ContactDiv>
          <h1>Get in touch</h1>
          <form onSubmit={event=> sendMail(event)}>
            <div className="inputDivs">
              <InputDiv>
                <h4>Your Name:</h4>{" "}
                <input
                  name="name"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                  type="text"
                  required
                  placeholder="Jack Sparrow"
                ></input>
              </InputDiv>
              <InputDiv>
                <h4>Your E-mail:</h4>{" "}
                <input
                  name="email"
                  value={email}
                  onChange={(event) => {setEmail(event.target.value);
                  setDisabled(false)} }
                  type="text"
                  required
                  placeholder="jack@mail.com"
                  
                ></input>
              </InputDiv>
              <InputDiv>
                <h4>Subject:</h4>{" "}
                <input
                  name="subject"
                  value={subject}
                  onChange={(event) => setSubject(event.target.value)}
                  type="text"
                  placeholder="(Optional)"
                ></input>
              </InputDiv>
              <InputDiv>
                <h4>Message:</h4>{" "}
                <textarea
                  name="message"
                  value={message}
                  onChange={(event) => setMessage(event.target.value)}
                  required
                  placeholder="Message Example"
                ></textarea>
              </InputDiv>
            </div>
            <Button disabled={disabled} theme={!disabled ? theme : disabledBtn } type="submit">
              Send
            </Button>
            {emailSent === true && <p className="d-inline success-msg">Email Sent!</p>}
            
          </form>
        </ContactDiv>
       
      </SectionContact>
      <ScrollTop />
    </>
  );
};

const SectionContact = styled(SectionDiv)`
  height: auto;
  @media (max-width: 1023px) {
    height: auto;
    margin: 0;
    /* overflow-y: auto; */
  }
`;

const ContactDiv = styled(motion.div)`
  /* margin-top: 4rem; */
  /* position:relative; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  overflow-y: hidden;
  /* background-color: white; */
  h1 {
    font-size: 6rem;
    /* margin-top: -3rem; */
  }
  form {
    button {
      /* position: relative; */
      margin-top: 2rem;
      margin-bottom: 0;
      margin-left: 50%;
      transform: translateX(-50%);
    }
    p{
      font-size: 2rem;
      padding-top: 1rem;
      padding-bottom: 4rem;
      text-align: center;
      margin-left: 50%;
      transform: translateX(-50%);
    }
  }
  @media (max-width: 1023px) {
    padding-top: 3rem;
    height: auto;
    padding-bottom: 3rem;
    h1 {
      font-size: 10vw;
    }
    form {
      button {
        /* position: relative; */

        margin-bottom: 4rem;
      }
    }
  }
`;

const InputDiv = styled(motion.div)`
  display: flex;
  justify-content: flex-end;
  width: 568px;
  margin-left: 50%;
  transform: translateX(-290px);
  margin-bottom: 20px;
  height: auto;
  h4 {
    margin-right: 1rem;
    font-size: 2rem;
    letter-spacing: 2px;
  }
  input {
    border: none;
    outline: none;
    background-color: #0e0e0e;
    width: 300px;
    border-radius: 2px;
    height: 2.5rem;
    color: #fff;
    font-size: 1.2rem;
    font-family: "Ubuntu", sans-serif;
    padding-left: 0.5rem;
    @media (max-width: 1023px) {
      width: 100%;
    }
  }
  textarea {
    border: none;
    outline: none;
    background-color: #0e0e0e;
    width: 300px;
    border-radius: 2px;
    height: 10rem;
    color: #fff;
    font-size: 1.2rem;
    font-family: "Ubuntu", sans-serif;
    padding-left: 0.5rem;
    @media (max-width: 1023px) {
      width: 100%;
    }
  }
  @media (max-width: 1023px) {
    width: 100%;
    justify-content: center;
    flex-wrap: wrap;
    margin-left: 0;
    transform: translateX(0);
  }
`;

export default Contact;
