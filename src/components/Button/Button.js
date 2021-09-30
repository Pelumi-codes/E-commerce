import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Wrapper = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-shadow: 0px 4px 4px rgba(0, 45, 255, 0.04);
  border-radius: 0.4rem;
  align-items: center;
  border: none;
  padding: 1.4rem 1.2rem;
  outline: none;
  height: ${(props) =>
    props.small ? "4.8rem" : props.big ? "5.6rem" : "4.8rem"};
  width: ${(props) =>
    props.small ? "33rem" : props.big ? "11.4rem" : "18.4rem"};
  background-color: ${(props) =>
    props.white ? "var(--white)" : "var(--primary)"};
  color: ${(props) => (props.white ? "var(--primary)" : "var(--white)")};

  .text {
    font-size: 1.6rem;
    font-weight: bold;
    line-height: 2rem;
    white-space: no-wrap;
    text-align: center;
    padding: 18px 12px 18px 12px;
  }
`;

const Button = ({
  className,
  height,
  text,
  small,
  big,
  white,
  type,
  color,
  background,
}) => {
  const styleProps = {
    className,
    text,
    white,
    small,
    big,
    height,
    color,
    background,
    type,
  };

  return (
    <Wrapper {...styleProps}>
      <span className="text">{text}</span>
    </Wrapper>
  );
};
Button.propTypes = {
  color: PropTypes.string,
  text: PropTypes.string.isRequired,
  className: PropTypes.string,
  height: PropTypes.string,
  type: PropTypes.string,
  enable: PropTypes.string,
};

export default Button;
