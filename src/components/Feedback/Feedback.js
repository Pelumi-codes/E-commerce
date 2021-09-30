import BrandOne from "Images/BrandOne.svg";
import "./Feedback.css";


const Feedback = () => {
    return (
    <div className="feedbackWrapper container ">
        <p className="textFeedback paddingTop textXSmall">
          We've scored amazing marketing results for a number of brands across
          different industries in 4 different continents
        </p>

        <div className="logos ">
          <div className="col">
            <img src={BrandOne} alt="logo" />
          </div>
          <div className="col">
            <img src={BrandOne} alt="logo" />
          </div>
          <div className="col">
            <img src={BrandOne} alt="logo" />
          </div>
          <div className="col">
            <img src={BrandOne} alt="logo" />
          </div>
        </div>
    </div>
  );
};


export default Feedback;