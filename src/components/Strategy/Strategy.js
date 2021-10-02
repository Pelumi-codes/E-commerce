import styled from "styled-components";
// import "./Strategy.css";
import arrowLeft from "Icons/arrowLeft.svg";
import arrowRight from "Icons/arrowRight.svg";
import Spacer from "components/Spacer";
import cardthree from "Images/cardThree.png";
import CardFour from "Images/CardFour.svg";
import CardFive from "Images/CardFive.svg";
import CardSix from "Images/CardSix.svg";
import OrnamentBlue from "Images/OrnamentBlue.svg";
import OrnamentOrange from "Images/OrnamentOrange.svg";
import { useState } from "react";

const Wrapper = styled.div`
  background-color: #fff;
  position: relative;
  z-index: 2;
  height: 900px;
  padding-top: 9.6rem;
  overflow: hidden;

  .subCaption {
    color: #74728d;
  }

  .navigation {
    position: absolute;
    top: 9.6rem;
    right: 7.2rem;

    &.mb {
      display: none;
    }
  }

  .nav:disabled {
    .arrow {
      filter: var(--filter_grey_4);
    }
  }

  .track {
    transition: transform 1s ease-in-out;

    &.group-1 {
      transform: translateX(0);
    }

    &.group-2 {
      transform: translateX(-100%) translateX(-7.2rem);
    }

    &.group-3 {
      transform: translateX(-200%) translateX(-14.4rem);
    }
  }

  .cardGroup {
    width: calc(100vw - 14.4rem);
    display: grid;
    grid-template-columns: repeat(4, calc(25% - 1.5rem));
    grid-gap: 2.4rem;
    margin-right: 7.2rem;
    flex-shrink: 0;

    &:last-child {
      margin-right: 0;
    }
  }

  .imgWrapper {
    height: 19.1rem;
    overflow: hidden;
    border-radius: 1.6rem;

    img {
      width: 100%;
    }
  }

  .card {
    position: relative;
    padding: 2.4rem;
    z-index: 2;
    box-shadow: 0px 0px 35px 0px #00000008;
    border-radius: 1.6rem;
    background-color: var(--white);
    transition: all 0.2s ease-out;
    height: max-content;

    .description {
      display: none;
    }

    &:hover {
      background-color: var(--primary_dark);
      color: var(--white);

      .description {
        display: block;
      }
    }
  }

  .blue-ornament {
    z-index: -1;
    position: absolute;
    height: 98rem;
    width: 110rem;
    top: 0rem;
    right: 0;
  }

  .orange-ornament {
    z-index: -1;
    position: absolute;
    left: 0;
    bottom: 0;
    height: 90rem;
    width: 98rem;
  }

  @media screen and (max-width: 768px) {
    padding-top: 4.8rem;

    .navigation {
      top: unset;
      bottom: 7.2rem;
      right: 4.8rem;

      &.mb {
        display: flex;
      }

      &.lg {
        display: none;
      }
    }

    .blue-ornament {
      display: none;
    }

    .subCaption {
      width: 25rem;
    }

    .track {
      transition: transform 0.2s ease-out;

      &.group-1 {
        transform: translateX(0);
      }

      &.group-2 {
        transform: translateX(-100%) translateX(-2.4rem);
      }

      &.group-3 {
        transform: translateX(-200%) translateX(-4.8rem);
      }

      &.group-4 {
        transform: translateX(-300%) translateX(-7.2rem);
      }

      &.group-5 {
        transform: translateX(-400%) translateX(-9.6rem);
      }

      &.group-6 {
        transform: translateX(-500%) translateX(-12rem);
      }
    }

    .cardGroup {
      display: flex;
      grid-gap: 0;
      margin-right: 2.4rem;
      width: auto;

      &:last-child {
        margin-right: 0;
      }
    }

    .card {
      flex-shrink: 0;
      width: calc(100vw - 4.8rem);
      margin-right: 2.4rem;
      background-color: var(--primary_dark);
      color: var(--white);

      .description {
        display: block;
      }

      &:last-child {
        margin-right: 0;
      }
    }

    .orange-ornament {
      bottom: -8rem;
    }
  }
`;

const Strategy = ({ strategyText }) => {
  const [group, setGroup] = useState(1);

  const navRight = (stop) => {
    let end = stop ?? 3;

    if (group === end) {
      return;
    }
    setGroup(group + 1);
  };

  const navLeft = () => {
    if (group === 1) {
      return;
    }
    setGroup(group - 1);
  };

  return (
    <Wrapper className="container section">
      {/* Desktop nav */}
      <div className="flexRow navigation lg">
        <button className="nav left" disabled={group === 1} onClick={navLeft}>
          <img src={arrowLeft} alt="Left arrow" className="arrow" />
        </button>
        <Spacer x={2.4} />
        <button className="nav left" disabled={group === 3} onClick={navRight}>
          <img src={arrowRight} alt="Right arrow" className="arrow" />
        </button>
      </div>

      {/* Moble nav */}
      <div className="flexRow navigation mb">
        <button className="nav left" disabled={group === 1} onClick={navLeft}>
          <img src={arrowLeft} alt="Left arrow" className="arrow" />
        </button>
        <Spacer x={2.4} />
        <button
          className="nav left"
          disabled={group === 6}
          onClick={() => navRight(6)}
        >
          <img src={arrowRight} alt="Right arrow" className="arrow" />
        </button>
      </div>

      <div className="strategyText displaySmallBold mainCaption">
        {strategyText.split(`\n`).map((text) => (
          <span>
            {text}
            <br />
          </span>
        ))}
      </div>
      <Spacer y={1.2} />
      <p className="textMedium subCaption">
        Digital marketing backed with real results.
      </p>
      <Spacer y={6} />
      <div className={`track group-${group} flexRow`}>
        {/* 1 */}
        <div className="cardGroup">
          <div className="card">
            <div className="imgWrapper flexRow alignCenter justifyCenter">
              <img src={cardthree} alt="A laptop" className="card-image" />
            </div>
            <Spacer y={2.4} />
            <p className="card-label textSmallBold">Marketing Strategy</p>
            <div className="description">
              <Spacer y={2.4} />
              <p className="textSmall">Lorem ipsum dolor si amet</p>
              <p className="textSmall">Lorem ipsum dolor si amet</p>
              <p className="textSmall">Lorem ipsum dolor si amet</p>
              <p className="textSmall">Lorem ipsum dolor si amet</p>
              <p className="textSmall">Lorem ipsum dolor si amet</p>
              <p className="textSmall">Lorem ipsum dolor si amet</p>
            </div>
          </div>
          <div className="card">
            <div className="imgWrapper flexRow alignCenter justifyCenter">
              <img src={cardthree} alt="A laptop" className="card-image" />
            </div>
            <Spacer y={2.4} />
            <p className="card-label textSmall">Marketing Strategy</p>
            <div className="description">
              <Spacer y={2.4} />
              <p className="textSmall">Lorem ipsum dolor si amet</p>
              <p className="textSmall">Lorem ipsum dolor si amet</p>
              <p className="textSmall">Lorem ipsum dolor si amet</p>
              <p className="textSmall">Lorem ipsum dolor si amet</p>
              <p className="textSmall">Lorem ipsum dolor si amet</p>
              <p className="textSmall">Lorem ipsum dolor si amet</p>
            </div>
          </div>
          <div className="card">
            <div className="imgWrapper flexRow alignCenter justifyCenter">
              <img src={cardthree} alt="A laptop" className="card-image" />
            </div>
            <Spacer y={2.4} />
            <p className="card-label textSmall">Marketing Strategy</p>
            <div className="description">
              <Spacer y={2.4} />
              <p className="textSmall">Lorem ipsum dolor si amet</p>
              <p className="textSmall">Lorem ipsum dolor si amet</p>
              <p className="textSmall">Lorem ipsum dolor si amet</p>
              <p className="textSmall">Lorem ipsum dolor si amet</p>
              <p className="textSmall">Lorem ipsum dolor si amet</p>
              <p className="textSmall">Lorem ipsum dolor si amet</p>
            </div>
          </div>
          <div className="card">
            <div className="imgWrapper flexRow alignCenter justifyCenter">
              <img src={cardthree} alt="A laptop" className="card-image" />
            </div>
            <Spacer y={2.4} />
            <p className="card-label textSmall">Marketing Strategy</p>
            <div className="description">
              <Spacer y={2.4} />
              <p className="textSmall">Lorem ipsum dolor si amet</p>
              <p className="textSmall">Lorem ipsum dolor si amet</p>
              <p className="textSmall">Lorem ipsum dolor si amet</p>
              <p className="textSmall">Lorem ipsum dolor si amet</p>
              <p className="textSmall">Lorem ipsum dolor si amet</p>
              <p className="textSmall">Lorem ipsum dolor si amet</p>
            </div>
          </div>
        </div>

        {/* 2 */}
        <div className="cardGroup">
          <div className="card">
            <div className="imgWrapper flexRow alignCenter justifyCenter">
              <img src={cardthree} alt="A laptop" className="card-image" />
            </div>
            <Spacer y={2.4} />
            <p className="card-label textSmall">Marketing Strategy</p>
          </div>
          <div className="card">
            <div className="imgWrapper flexRow alignCenter justifyCenter">
              <img src={cardthree} alt="A laptop" className="card-image" />
            </div>
            <Spacer y={2.4} />
            <p className="card-label textSmall">Marketing Strategy</p>
          </div>
          <div className="card">
            <div className="imgWrapper flexRow alignCenter justifyCenter">
              <img src={cardthree} alt="A laptop" className="card-image" />
            </div>
            <Spacer y={2.4} />
            <p className="card-label textSmall">Marketing Strategy</p>
          </div>
          <div className="card">
            <div className="imgWrapper flexRow alignCenter justifyCenter">
              <img src={cardthree} alt="A laptop" className="card-image" />
            </div>
            <Spacer y={2.4} />
            <p className="card-label textSmall">Marketing Strategy</p>
          </div>
        </div>

        {/* 3 */}
        <div className="cardGroup">
          <div className="card">
            <div className="imgWrapper flexRow alignCenter justifyCenter">
              <img src={cardthree} alt="A laptop" className="card-image" />
            </div>
            <Spacer y={2.4} />
            <p className="card-label textSmall">Marketing Strategy</p>
          </div>
          <div className="card">
            <div className="imgWrapper flexRow alignCenter justifyCenter">
              <img src={cardthree} alt="A laptop" className="card-image" />
            </div>
            <Spacer y={2.4} />
            <p className="card-label textSmall">Marketing Strategy</p>
          </div>
          <div className="card">
            <div className="imgWrapper flexRow alignCenter justifyCenter">
              <img src={cardthree} alt="A laptop" className="card-image" />
            </div>
            <Spacer y={2.4} />
            <p className="card-label textSmall">Marketing Strategy</p>
          </div>
          <div className="card">
            <div className="imgWrapper flexRow alignCenter justifyCenter">
              <img src={cardthree} alt="A laptop" className="card-image" />
            </div>
            <Spacer y={2.4} />
            <p className="card-label textSmall">Marketing Strategy</p>
          </div>
        </div>
      </div>
      <img src={OrnamentBlue} alt="Animation" className="blue-ornament" />
      <img src={OrnamentOrange} alt="Animation" className="orange-ornament" />
    </Wrapper>
  );
};

export default Strategy;
