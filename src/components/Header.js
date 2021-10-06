import styled from "styled-components";
import Spacer from "components/Spacer";
import DigiIcon from "Icons/DigiIcon.svg";
import { Link } from "react-router-dom";
import Button from "components/Button";
import ratings from "Images/ratings.svg";
import graph from "Images/graph.svg";

const Wrapper = styled.div`
  position: relative;
  background: transparent;
  overflow: hidden;

  .coverImage {
    position: absolute;
    z-index: -1;
    height: 100%;
    left: 50%;
    transform: translateX(-50%);

    &.right {
      transform: unset;
      left: unset;
      right: 0;
    }

    &.mobile {
      display: none;
    }
  }

  .topBar {
    height: 9.6rem;

    &.light {
      color: var(--white);
    }
  }

  .logo {
    height: 4.8rem;
  }

  .headerCaption {
    font-family: var(--font_extra_bold);
    font-size: 56px;
    font-style: normal;
    font-weight: 800;
    line-height: 67px;
    letter-spacing: 0px;
  }

  .ratings {
    position: absolute;
    top: 13.7rem;
    right: 41.2rem;
    height: 21.9rem;
  }

  .totalSales {
    position: absolute;
    bottom: 4.41rem;
    right: 55.4rem;
    height: 18.6rem;
  }

  .btn {
    margin-top: 4.8rem;
  }

  @media screen and (max-width: 768px) {
    .logo {
      height: 2.4rem;
    }

    .brand span,
    .getStarted {
      font-size: 1.6rem;
    }

    .headerCaption {
      font-size: 3.6rem;
      line-height: 4.8rem;
      text-align: center;

      br {
        display: none;
      }
    }

    .headerDescription {
      max-width: 100%;
      text-align: center;

      br {
        display: none;
      }
    }

    .coverImage {
      display: none;

      &.mobile {
        display: block;
      }

      &.right {
        display: none;
      }
    }

    .ratings,
    .totalSales {
      display: none;
    }

    .btn {
      margin: auto;
      margin-top: 4.8rem;
    }
  }
`;

const Header = ({
  headerCaption,
  subText,
  image,
  imageMobile,
  chartCards,
  logoLight,
  getStartedLight,
  textDark,
  imageRight,
}) => {
  return (
    <Wrapper className="container section">
      <img
        src={image}
        alt="Cover"
        className={`coverImage${imageRight ? " right" : ""}`}
      />
      <img
        src={imageMobile || image}
        alt="Cover"
        className={`coverImage mobile${imageRight ? " right" : ""}`}
      />
      <div className={`topBar flexRow alignCenter justifySpaceBetween`}>
        <div className="flexRow alignCenter brand">
          <img src={DigiIcon} alt="Logo" className="logo" />
          <Spacer x={1.2} xMobile={0.8} />
          <span
            className={`textLargeBold logoText${
              logoLight ? " colorWhite" : ""
            }`}
          >
            Digifigs
          </span>
        </div>
        <div>
          <Link
            to="/get-started"
            className={`textLargeBold getStarted${
              getStartedLight ? " colorWhite" : ""
            }`}
          >
            Get Started
          </Link>
        </div>
      </div>
      <Spacer y={7.2} yMobile={12} />
      <h1 className={`headerCaption${textDark ? "" : " colorWhite"}`}>
        {headerCaption?.split(`\n`).map((text, index) => (
          <span key={index}>
            {text}
            <br />
          </span>
        ))}
      </h1>
      <Spacer y={2.4} />
      <p
        className={`textLarge${
          textDark ? "" : " colorWhite"
        } headerDescription`}
      >
        {subText?.split(`\n`).map((text, index) => (
          <span key={index}>
            {text}
            <br />
          </span>
        ))}
      </p>
      <Button className="btn" text="Request a free consultation" small />

      {chartCards && <img src={ratings} alt="Ratings" className="ratings" />}
      {chartCards && <img src={graph} alt="Graph" className="totalSales" />}
    </Wrapper>
  );
};

export default Header;
