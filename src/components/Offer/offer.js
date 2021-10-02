import "./offer.css";
import CardTwo from "Images/CardTwo.svg";
import Spacer from "components/Spacer";
import Button from "components/Button/Button";

const offer = ({ offerCaption }) => {
  return (
    <div className="offerWrapper container section flexRow alignCenter justifySpaceBetween">
      <div className="offerCaption">
        {/* {offerCaption.split(`\n`).map((text) => (
          <span>
            {text}
            <br />
          </span>
        ))} */}
        <h2 className="displaySmallBold">{offerCaption}</h2>
        <Spacer y={2.4} />
        <Button className="btn" text="Get Started" big />
      </div>
      <div className="offerImage">
        <img src={CardTwo} alt="A laptop" />
      </div>
    </div>
  );
};

export default offer;
