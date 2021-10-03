import styled from "styled-components";
import Spacer from "components/Spacer";
import arrowRight from "Images/ReadArrow.svg";

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

  .brandName {
    padding: 1.2rem 0.6rem;
    background-color: var(--white);
  }

  @media screen and (max-width: 768px) {
    .mainCaption {
      br {
        display: none;
      }

      .space {
        display: inline;
      }
    }
  }
`;

const ImpactCard = styled.div`
  background-color: ${(props) => props.bg ?? "var(--primary)"};
  color: ${(props) => props.color ?? "inherit"};
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
      <div className="flexRow">
        <ImpactCard>
          <div className="flexRow justifyCenter alignCenter brandName">
            <span className="textLargeBold">MYGSTZone</span>
          </div>
          <Spacer y={4.8} />
          <p className=""></p>
        </ImpactCard>
      </div>
    </Wrapper>
  );
};

export default Brands;
