import "./Review.css";
import Star from "Images/Star.svg";
import LogoOne from "Images/LogoOne.svg";
import LogoTwo from "Images/LogoTwo.svg";
import LogoThree from "Images/LogoThree.svg";
import Spacer from "components/Spacer";

const Review = () => {
  return (
    <div className="reviewWrapper">
      <p className="displayLargeExtraBold ReviewCaption paddingTop container">
        Businesses and clients who trusted us to skyrocket their metrics
      </p>
      <Spacer y={12} />
      <div className="reviewsRatings flexColumn">
        <div className="fiveStars flexColumn">
          <div className="logoReview flexRow ">
            <div>
              <img src={LogoOne} alt="Logo" />
            </div>
            <div className="">
              <h5 className="reviewNames textMediumHeight">
                Opaleye, CEO at Opak Homes
              </h5>
            </div>
          </div>
          <img src={Star} alt="five stars" className="stars" />
          <p className="paragraphReview textSmallSize">
            "Digifigs delivered a full-scale and comprehensive service that set
            us on track for the Nigerian market. From brand identity development
            and logo design to a brochure which captured our brand in its
            entirety to a social media strategy that helped us grow an
            impressive community of real estate enthusiasts, we have grown from
            a new name in the industry to a resounding participant in the
            affordable housing solution sector."
          </p>
        </div>

        <div className="fiveStars flexColumn paddingTop">
          <div className="logoReview flexRow">
            <div>
              <img src={LogoTwo} alt="Logo" width="30rem" height="30rem" />
            </div>
            <div className="">
              <h5 className="reviewNames textMediumHeight">
                Ragunathan, CEO at MyGSTZone
              </h5>
            </div>
          </div>
          <img src={Star} alt="five stars" className="stars" />
          <p className="paragraphReview textSmallSize">
            "Digifigs delivered a full-scale and comprehensive service that set
            us on track for the Nigerian market. From brand identity development
            and logo design to a brochure which captured our brand in its
            entirety to a social media strategy that helped us grow an
            impressive community of real estate enthusiasts, we have grown from
            a new name in the industry to a resounding participant in the
            affordable housing solution sector."
          </p>
        </div>
        <div className="fiveStars flexColumn paddingTop">
          <div className="logoReview flexRow">
            <div>
              <img src={LogoThree} alt="Logo" width="30rem" height="30rem" />
            </div>
            <div className="">
              <h5 className="reviewNames textMediumHeight">
                Alexander, CEO at Weck Autos
              </h5>
            </div>
          </div>
          <img src={Star} alt="five stars" className="stars" />
          <p className="paragraphReview textSmallSize">
            "Digifigs delivered a full-scale and comprehensive service that set
            us on track for the Nigerian market. From brand identity development
            and logo design to a brochure which captured our brand in its
            entirety to a social media strategy that helped us grow an
            impressive community of real estate enthusiasts, we have grown from
            a new name in the industry to a resounding participant in the
            affordable housing solution sector."
          </p>
          <Spacer y={7.2} />
        </div>
      </div>
    </div>
  );
};

export default Review;
