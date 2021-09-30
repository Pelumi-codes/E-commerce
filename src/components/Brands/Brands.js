import Spacer from "components/Spacer";
import "./Brands.css";
import ReadArrow from "Images/ReadArrow.svg";
import Line from "Images/Line.svg";
import Button from "components/Button/Button";

const Brands = () => {
  return (
    <div className="brandsWrapper container">
      <p className="paragraphPercent  paddingTop textBoldSmall ">
        See how we boosted Heroshe’s (a US-to-Nigeria shipping company) web
        traffic by 1348%
      </p>
      <div className="read-arrow ">
        <h5 className="read-percent textSmallBoldWeight flexRow">Read more</h5>
        <img src={ReadArrow} alt="Arrow sign" className="read-percent" />
      </div>
      <img src={Line} alt="line" className="Line " />
    </div>
  );
};

export default Brands;
