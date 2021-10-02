import styled from "styled-components";
import Star from "Images/Star.svg";
import LogoOne from "Images/LogoOne.svg";
import LogoTwo from "Images/LogoTwo.svg";
import LogoThree from "Images/LogoThree.svg";
import Spacer from "components/Spacer";

const Wrapper = styled.div`
  padding-top: 9.6rem;

  .reviewCaption {
    width: 60%;
  }

  .clientLogo {
    height: 4.8rem;
    margin-right: 2.4rem;
  }

  .stars {
    margin: 2.6rem 0;
    width: 12.4rem;
  }

  .contentWrapper {
    width: 60%;
    margin: auto;
  }

  @media screen and (max-width: 768px) {
    .reviewCaption {
      width: 100%;
    }

    .clientLogo {
      height: 3.6rem;
    }

    .contentWrapper {
      width: 100%;
      padding: 0 2.4rem;
    }

    .flexRow {
      flex-wrap: wrap;
    }
  }
`;

const Review = () => {
  return (
    <Wrapper>
      <p className="displaySmallBold reviewCaption container">
        Businesses and clients who trusted us to skyrocket their metrics
      </p>
      <Spacer y={12} />
      <div className="contentWrapper flexColumn">
        <div className="fiveStars flexColumn">
          <div className="logoReview flexRow alignCenter">
            <div>
              <img src={LogoOne} alt="Logo" className="clientLogo" />
            </div>
            <div className="">
              <h5 className="reviewNames textMedium">
                Opaleye, CEO at Opak Homes
              </h5>
            </div>
          </div>
          <img src={Star} alt="five stars" className="stars" />
          <p className="paragraphReview textLarge">
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
          <div className="logoReview flexRow alignCenter">
            <div>
              <img src={LogoTwo} alt="Logo" className="clientLogo" />
            </div>
            <div className="">
              <h5 className="reviewNames textMedium">
                Ragunathan, CEO at MyGSTZone
              </h5>
            </div>
          </div>
          <img src={Star} alt="five stars" className="stars" />
          <p className="paragraphReview textLarge">
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
          <div className="logoReview flexRow alignCenter">
            <div>
              <img src={LogoThree} alt="Logo" className="clientLogo" />
            </div>
            <div className="">
              <h5 className="reviewNames textMedium">
                Alexander, CEO at Weck Autos
              </h5>
            </div>
          </div>
          <img src={Star} alt="five stars" className="stars" />
          <p className="paragraphReview textLarge">
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
    </Wrapper>
  );
};

export default Review;
