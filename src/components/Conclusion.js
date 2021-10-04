import styled from "styled-components";
import Button from "./Button/Button";
import Spacer from "./Spacer";

const Wrapper = styled.div`
  padding-top: 9.6rem;
  padding-bottom: 9.6rem;
  background-color: #000066;

  .conclusionText {
    width: 60%;
    color: var(--white);
  }

  @media screen and (max-width: 768px) {
    .conclusionText {
      width: 100%;
    }
  }
`;

const Conclusion = ({ text }) => {
  return (
    <Wrapper className="flexColumn alignCenter container">
      <p className="textLargeBold textCenter conclusionText">{text}</p>
      <Spacer y={4.8} />
      <Button
        as="a"
        href="/"
        className="btn"
        text="Contact us"
        color="#1a1a1a"
        big
        white
      />
    </Wrapper>
  );
};

export default Conclusion;
