import React from "react";
import styled from "styled-components";

const Wrapper = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  // box-shadow: 0px 4px 4px rgba(0, 45, 255, 0.04);
  border-radius: 0.4rem;
  align-items: center;
  border: none;
  padding: 1.4rem 1.2rem;
  outline: none;
  height: ${(props) =>
    props.small ? "4.8rem" : props.big ? "5.6rem" : "4.8rem"};
  width: ${(props) => (props.fullWidth ? "100%" : "max-content")};
  background-color: ${(props) =>
    props.white ? "var(--white)" : "var(--primary)"};
  color: ${(props) =>
    props.color
      ? props.color
      : props.white
      ? "var(--primary)"
      : "var(--white)"};

  .text {
    font-size: 1.6rem;
    font-weight: bold;
    line-height: 2rem;
    white-space: no-wrap;
    text-align: center;
  }
`;

const Button = ({ text, ...props }) => {
  return (
    <Wrapper {...props}>
      <span className="text">{text}</span>
    </Wrapper>
  );
};

export default Button;
