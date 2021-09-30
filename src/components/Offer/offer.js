import "./offer.css";
import CardTwo from "Images/CardTwo.svg";
import Spacer from "components/Spacer";
import Button from "components/Button/Button";

const offer = ({ offerCaption }) => {
  return (
    <div className="offerWrapper container section flexRow justifySpaceBetween">
      <div className="offerCaption displayExtraLargeBold">
        {offerCaption.split(`\n`).map((text) => (
          <span>
            {text}
            <br />
          </span>
        ))}
        <Spacer y={2.4} />
        <Button className="button-text" text="Get Started" big />
      </div>
      <div className="offerImage flexRow alignEnd">
        <img src={CardTwo} alt="A laptop" />
      </div>
    </div>
  );
};

export default offer;
