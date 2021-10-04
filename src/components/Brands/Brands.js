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

const Brands = () => {
  return (
    <Wrapper className="container">
      <p className="textLargeBold mainCaption">
        See how we boosted Heroshe’s (a US-to-Nigeria shipping company)
        <br />
        <span>&nbsp;</span>
        web traffic by 1348%
      </p>
      <Spacer y={1.2} />
      <div className="readMore flexRow alignCenter">
        <span className="read-percent textSmallBold">Read more</span>
        <Spacer x={0.6} />
        <img src={arrowRight} alt="Arrow right" className="arrow" />
      </div>
      <Spacer y={6} />
      <div className="flexRow justifySpaceBetween cards">
        <ImpactCard
          brandColor="#28009B"
          circleColor="#2A00A3"
          color="var(--white)"
          bg="#28009B"
          brandName="MYGSTZone"
          description="900% increase in expected leads"
        />
        <ImpactCard
          className="card2"
          circleColor="#FFF2EB"
          color="var(--text)"
          bg="#FFECE2"
          brandName="ANIKE BRAND"
          description="600% increase in reach and engagements"
        />
      </div>
    </Wrapper>
  );
};

export default Brands;
