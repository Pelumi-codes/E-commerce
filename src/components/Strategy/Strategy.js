import "./Strategy.css";
import arrows from "Icons/arrows.svg";
import Spacer from "components/Spacer";
import cardthree from "Images/cardthree.svg";
import CardFour from "Images/CardFour.svg";
import CardFive from "Images/CardFive.svg";
import CardSix from "Images/CardSix.svg";
import OrnamentBlue from "Images/OrnamentBlue.svg";
import OrnamentOrange from "Images/OrnamentOrange.svg";

const Strategy = ({ strategyText }) => {
  return (
    <div className="strategyWrapper container paddingTop section ">
      <div className="flexRow justifySpaceBetween">
        <div className="strategyText displayLargeExtraBold ">
          {strategyText.split(`\n`).map((text) => (
            <span>
              {text}
              <br />
            </span>
          ))}
        </div>
        <div className="justifyEnd">
          <img src={arrows} alt="Arrows" ClassName="arrows" />
        </div>
      </div>
      <Spacer y={1.2} />
      <p className="textMedium">Digital marketing backed with real results.</p>
      <div className="flexRow justify justifySpaceBetween">
        <div className="card-holder">
          <img src={cardthree} alt="A laptop" className="img-card" />
          <p className="card-label textXSmall">Marketing Strategy</p>
        </div>
        <div className="card-holder">
          <img src={CardFour} alt="A laptop" className="img-card" />
          <p className="card-label textXSmall">Account Based Marketing</p>
        </div>
        <div className="card-holder">
          <img src={CardFive} alt="A laptop" className="img-card" />
          <p className="card-label textXSmall">Website Development</p>
        </div>
        <div className="card-holder">
          <img src={CardFour} alt="A laptop" className="img-card" />
          <p className="card-label textXSmall">Content Marketing</p>
        </div>
      </div>
      <img src={OrnamentBlue} alt="Animation" className="blue-ornament" />
      <img src={OrnamentOrange} alt="Animation" className="orange-ornament" />
    </div>
  );
};

export default Strategy;
