// import "./Proof.css";
import styled from "styled-components";
import Button from "components/Button/Button";
import Spacer from "components/Spacer";

const Wrapper = styled.div`
  background: transparent;
  position: relative;

  .contentLeft {
    width: 45%;
    height: 100%;
    position: relative;
    flex-shrink: 0;
    padding-top: 9.6rem;
    padding-right: 0;
    background: transparent;

    &::before {
      content: "";
      height: 100%;
      width: 120%;
      background-color: #fffaf2;
      position: absolute;
      top: 0;
      left: 0;
      z-index: -1;
    }
  }

  .contentRight {
    padding-right: 7.2rem;
  }

  .mainCaption {
    font-family: var(--font_extra_bold);
    font-size: 56px;
    line-height: 72px;
    width: 66.8rem;
    color: var(--primary_dark);
  }

  .miniCard {
    height: 36.1rem;
    width: 36rem;
    margin-top: 3rem;
    background-color: #ffffff;
  }

  .proofWrapper .textLarge {
    margin-bottom: 15.5rem;
    width: 70%;
  }

  .boostText {
    margin-top: 22.2rem;
    color: #000066;
    text-align: right;
    position: absolute;
  }

  @media screen and (max-width: 768px) {
    flex-direction: column;
    justify-content: unset;
    height: auto;

    .miniCard {
      width: 100%;
    }

    .contentRight,
    .contentLeft {
      padding: 9.6rem 2.4rem;
      width: 100%;
    }

    .mainCaption {
      font-size: 32px;
      line-height: 48px;
      width: 100%;
    }
  }
`;

const Proof = ({ mainCaption }) => {
  return (
    <Wrapper className="flexRow alignCenter justifySpaceBetween sectionLarge">
      <div className="contentLeft container">
        <h2 className="displaySmallBold">
          Proof of
          <br />
          what we do
        </h2>
        <Spacer y={4.8} />
        <div className="miniCard"></div>
        <Spacer y={7.2} />
        <p className="textLarge">
          MyGSTZone could barely generate more than
          <br />
          60 profitable leads monthly.
        </p>
      </div>
      <div className="flexColumn alignEnd contentRight">
        <p className="mainCaption textRight">{mainCaption}</p>
        <Spacer y={4.8} />
        <Button className="btn" text="Yes please, I want in!" />
      </div>
    </Wrapper>
  );
};

export default Proof;
