import styled from "styled-components";
import future_net from "Images/logos/future_net.svg";
import heroshe from "Images/logos/heroshe.svg";
import hospitality_hub from "Images/logos/hospitality_hub.svg";
import industry_search from "Images/logos/industry_search.svg";
import johnsona_furniture from "Images/logos/johnsona_furniture.svg";
import pro_seduction from "Images/logos/pro_seduction.svg";
import ts_elimination from "Images/logos/ts_elimination.svg";
import Spacer from "components/Spacer";

const Wrapper = styled.div`
  padding-top: 9.6rem;
  padding-bottom: 9.6rem;
  overflow: hidden;

  .mainCaption {
    width: 60%;
    margin: auto;
  }

  .logos {
    animation: slideshow 15s linear infinite;

    @keyframes slideshow {
      0% {
        transform: translateX(0);
      }

      100% {
        transform: translateX(-120%);
      }
    }
  }

  .logo {
    height: 4.8rem;
  }

  .col {
    flex-shrink: 0;
    margin-right: 4.8rem;
  }

  @media screen and (max-width: 768px) {
    padding-top: 4.8rem;
    padding-bottom: 4.8rem;

    .logos {
      animation: unset;
      flex-wrap: wrap;
      justify-content: space-around;
    }

    .logo {
      height: 2.4rem;
    }

    .col {
      margin: 1.2rem;
    }

    .mainCaption {
      width: 100%;
    }
  }
`;

const Feedback = () => {
  return (
    <Wrapper className="container">
      <p className="textLargeBold textCenter mainCaption">
        We've scored amazing marketing results for a number of brands across
        different industries in 4 different continents
      </p>
      <Spacer y={4.8} />
      <div className="logos flexRow alignCenter">
        {/* slide 1 */}
        <div className="col">
          <img src={ts_elimination} alt="TS ELIMINATION" className="logo" />
        </div>
        <div className="col">
          <img
            src={johnsona_furniture}
            alt="JOHNSONA FURNITURE"
            className="logo"
          />
        </div>
        <div className="col">
          <img src={hospitality_hub} alt="HOSPITALITY HUB" className="logo" />
        </div>
        <div className="col">
          <img src={heroshe} alt="HEROSHE" className="logo" />
        </div>
        <div className="col">
          <img src={industry_search} alt="INDUSTRY SEARCH" className="logo" />
        </div>
        <div className="col">
          <img src={future_net} alt="FUTURE NET" className="logo" />
        </div>
        <div className="col">
          <img
            src={pro_seduction}
            alt="PROFESSIONAL SEDUCTION"
            className="logo"
          />
        </div>
        <div className="col">
          <img src={ts_elimination} alt="TS ELIMINATION" className="logo" />
        </div>

        {/* slide 2 */}
        <div className="col">
          <img
            src={johnsona_furniture}
            alt="JOHNSONA FURNITURE"
            className="logo"
          />
        </div>
        <div className="col">
          <img src={hospitality_hub} alt="HOSPITALITY HUB" className="logo" />
        </div>
        <div className="col">
          <img src={heroshe} alt="HEROSHE" className="logo" />
        </div>
        <div className="col">
          <img src={industry_search} alt="INDUSTRY SEARCH" className="logo" />
        </div>
        <div className="col">
          <img src={future_net} alt="FUTURE NET" className="logo" />
        </div>
        <div className="col">
          <img
            src={pro_seduction}
            alt="PROFESSIONAL SEDUCTION"
            className="logo"
          />
        </div>
      </div>
    </Wrapper>
  );
};

export default Feedback;
