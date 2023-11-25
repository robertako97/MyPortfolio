import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const Button = styled.button`
  display: inline-block;
  margin: 10px;
  padding: 10px 20px;
  border-radius: 25px;
  color: black;
  background: white;
  border: 2px solid gray;
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  transition: all 0.3s ease;
  &:hover {
    transform: scale(1.5);
    background: black;
    color: white;
  }
  text-decoration: none;
  transition: all 01s ease;
`;

const HelloButton = () => {
  const [buttonText, setButtonText] = useState("Hello");

  const handleMouseEnter = () => {
    setButtonText("Click to learn about me.");
  };

  const handleMouseLeave = () => {
    setButtonText("Hello and welcome to my site!");
  };

  return (
    <Container>
      <Button onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        {buttonText}
      </Button>
    </Container>
  );
};

export default HelloButton;
