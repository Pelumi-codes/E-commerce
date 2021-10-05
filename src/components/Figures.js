import styled from "styled-components";
import Spacer from "components/Spacer";
import background from "Images/metricsBackground.svg";

const Wrapper = styled.div`
  padding-top: 9.6rem;
  padding-bottom: 9.6rem;
  position: relative;
  overflow: hidden;

  .background {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    z-index: -1;
  }

  .metricValue {
    color: var(--primary_dark);
    font-size: 64px;
    line-height: 64px;
    margin-bottom: 0.8rem;
    text-align: center;
  }

  .metricDescription {
    color: var(--primary);
  }

  @media screen and (max-width: 768px) {
    .background {
      width: auto;
      height: 100%;
    }

    .metricGroup {
      flex-direction: column;

      > div {
        margin-bottom: 3.2rem;

        &:last-child {
          margin-bottom: 0;
        }
      }
    }

    .metricValue {
      font-size: 48px;
      line-height: 48px;
    }
  }
`;

const Figures = () => {
  return (
    <Wrapper className="container">
      <img src={background} alt="background pattern" className="background" />
      <div className="flexRow alignCenter justifySpaceBetween metricGroup">
        <div>
          <h1 className="metricValue">189,000+</h1>
          <h4 className="textLarge textCenter metricDescription">
            Conversions
          </h4>
        </div>
        <div>
          <h1 className="metricValue">11,323,000+</h1>
          <h4 className="textLarge textCenter metricDescription">
            Impressions
          </h4>
        </div>
        <div>
          <h1 className="metricValue">5+</h1>
          <h4 className="textLarge textCenter metricDescription">Continents</h4>
        </div>
      </div>
      <Spacer y={12.8} yMobile={3.2} />
      <div className="flexRow alignCenter justifySpaceBetween metricGroup">
        <div>
          <h1 className="metricValue">112,000+</h1>
          <h4 className="textLarge textCenter metricDescription">Manhours</h4>
        </div>
        <div>
          <h1 className="metricValue">1,817,400+</h1>
          <h4 className="textLarge textCenter metricDescription">
            Website visits
          </h4>
        </div>
        <div>
          <h1 className="metricValue">22+</h1>
          <h4 className="textLarge textCenter metricDescription">Industries</h4>
        </div>
      </div>
    </Wrapper>
  );
};

export default Figures;
