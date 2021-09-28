import "./header.css";
import Spacer from "components/Spacer";
import DigiIcon from "Icons/DigiIcon.svg";
import { Link } from "react-router-dom";
import Button from "components/Button/Button";
import ratings from "Images/ratings.svg";
import graph from "Images/graph.svg";

const Header = ({ headerCaption }) => {
  return (
    <div className="headerWrapper container section">
      <div className="topBar flexRow alignCenter justifySpaceBetween">
        <div className="flexRow alignCenter brand">
          <img src={DigiIcon} alt="Logo" className="logo" />
          <Spacer x={1.2} xMobile={0.1} />
          <span className="textLargeBold">Digifigs</span>
        </div>
        <div>
          <Link to="/get-started" className="textLargeBold getStarted">
            Get started
          </Link>
        </div>
      </div>
      <Spacer y={7.2} yMobile={17.4} />
      <h1 className="headerCaption colorWhite">
        {headerCaption.split(`\n`).map((text) => (
          <span>
            {text}
            <br />
          </span>
        ))}
      </h1>
      <Spacer y={2.4} />
      <p className="textLarge colorWhite headerDescription">
        We can help you skyrocket your customer base with an online marketing
        strategy tailored just for your business.
      </p>
      <Button
        className="header-button"
        text="Request a free consultation"
        small
      />

      <img src={ratings} alt="Ratings" className="ratings" />
      <img src={graph} alt="Graph" className="totalSales" />

      {/* <div className="row-header-container">
    <div className="top-bar">
      <div className="brand-logo">
        <img src={DigiIcon} alt="Logo" className="logo" />
        <h1 className="brand-name"> DigiFigs</h1>
      </div>
      <h2 className="get-started">Get started</h2>
    </div>
    <div className="row-text-header">
      <div className="text-card-header">
        <h1 className="text-header">
          Fuel Your Online Store with Increased{" "}
          <strong className="leads">Leads</strong>
        </h1>
        <div className="small-text">
          We can help you skyrocket your customer base with an online
          marketing strategy tailored just for your business
        </div>
        <Button
          className="header-button"
          text="Request a free consultation"
          small
        />
      </div>
      <div className="ratings-graph">
        <div className="row-ratings">
          <img
            src={HeaderOne}
            alt="Ratings"
            width="330rem"
            height="280rem"
          />
        </div>
        <div className="row-graph">
          <img src={HeaderTwo} alt="Graph" width="300rem" height="287rem" />
        </div>
      </div>
    </div>
    </div> */}
    </div>
  );
};

export default Header;
