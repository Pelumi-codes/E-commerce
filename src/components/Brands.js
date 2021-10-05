import styled from "styled-components";
import Spacer from "components/Spacer";
import arrowRight from "Images/ReadArrow.svg";
import ImpactCard from "components/ImpactCard";

const Wrapper = styled.div`
  padding-top: 9.6rem;
  padding-bottom: 9.6rem;

  .mainCaption {
    .space {
      display: none;
    }
  }

  .readMore {
    border-bottom: 1px solid;
    width: max-content;

    .arrow {
      height: 2rem;
    }
  }

  .card2 {
    margin-top: 4.8rem;
  }

  @media screen and (max-width: 768px) {
    padding-left: 0;
    padding-right: 0;

    .mainCaption {
      margin-left: 2.4rem;
      margin-right: 2.4rem;

      br {
        display: none;
      }

      .space {
        display: inline;
      }
    }

    .readMore {
      margin-left: 2.4rem;
      margin-right: 2.4rem;
    }

    .cards {
      flex-direction: column;
      justify-content: unset;
    }
  }
`;

const brandDetails = {
  MYGSTZone: {
    brandColor: "#28009B",
    circleColor: "#2A00A3",
    color: "var(--white)",
    bg: "#28009B",
    brandName: "MYGSTZone",
    description: `900% \nincrease in \nexpected \nleads`,
  },
  ANIKE: {
    circleColor: "#FFF2EB",
    color: "var(--text)",
    bg: "#FFECE2",
    brandName: "ANIKE BRAND",
    description: `600% \nincrease in \nreach and \nengagements`,
  },
  HEROSHE: {
    circleColor: "#84E0E1",
    color: "var(--text)",
    bg: "#33CCCD",
    brandName: "HEROSHE",
    description: `Exponential \nweb traffic \nincrease from 2100 to 30,414 \nvisitors in 3 \nmonths!`,
  },
};

const Brands = ({ caseStudyText, caseStudyLink, brand1, brand2 }) => {
  return (
    <Wrapper className="container">
      <p className="textLargeBold mainCaption">
        {caseStudyText?.split("\n").map((item) => (
          <span>
            {item}
            <br />
          </span>
        ))}
      </p>
      <Spacer y={1.2} />
      <a href={caseStudyLink || "/"} className="readMore flexRow alignCenter">
        <span className="read-percent textSmallBold">Read more</span>
        <Spacer x={0.6} />
        <img src={arrowRight} alt="Arrow right" className="arrow" />
      </a>
      <Spacer y={6} />
      <div className="flexRow justifySpaceBetween cards">
        {/* Brand 1 */}
        {brand1 && brandDetails[brand1] && (
          <ImpactCard
            brandColor={brandDetails[brand1].brandColor}
            circleColor={brandDetails[brand1].circleColor}
            color={brandDetails[brand1].color}
            bg={brandDetails[brand1].bg}
            brandName={brandDetails[brand1].brandName}
            description={brandDetails[brand1].description}
          />
        )}

        {/* Brand 2 */}
        {brand2 && brandDetails[brand2] && (
          <ImpactCard
            className="card2"
            brandColor={brandDetails[brand2].brandColor}
            circleColor={brandDetails[brand2].circleColor}
            color={brandDetails[brand2].color}
            bg={brandDetails[brand2].bg}
            brandName={brandDetails[brand2].brandName}
            description={brandDetails[brand2].description}
          />
        )}
      </div>
    </Wrapper>
  );
};

export default Brands;
