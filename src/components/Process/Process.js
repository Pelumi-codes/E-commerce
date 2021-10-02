import styled from "styled-components";
import Star from "Images/Star.svg";
import Team from "Images/Team.svg";
import bullet from "Images/bullet.svg";
import markbullet from "Images/markbullet.svg";
import Button from "components/Button/Button";
import Spacer from "components/Spacer";

const Wrapper = styled.div`
  background-color: #3bb7fc;
  padding: 9.6rem 7.2rem;

  .title {
    color: var(--white);
  }

  .captionImgWrapper {
    width: 70%;
    padding-right: 7.2rem;
  }

  .captionImg {
    width: 100%;
  }

  .bullet {
    height: 2rem;
  }

  .process {
    width: 42.4rem;
    margin-bottom: 2.8rem;

    &:last-child {
      margin-bottom: 0;
    }

    .description {
      font-size: 20px;
      font-weight: 700;
      line-height: 24px;
      color: var(--white);
    }
  }

  @media screen and (max-width: 768px) {
    padding: 9.6rem 2.4rem;

    .contentWrapper {
      flex-direction: column;
    }

    .captionImgWrapper {
      width: 100%;
      padding-right: 0;
    }

    .listWrapper {
      margin-top: 4.8rem;
    }

    .process {
      width: 100%;
    }
  }
`;

const Process = () => {
  return (
    <Wrapper className="container">
      <h1 className="title displaySmall">Our Process</h1>
      <div className="flexRow contentWrapper">
        <div className="captionImgWrapper">
          <Spacer y={9.6} yMobile={4.8} />
          <img src={Team} alt="Team work" className="captionImg" />
        </div>

        <div className="listWrapper">
          <div className="process flexRow alignCenter">
            <div>
              <img src={bullet} alt="Logo" className="bullet" />
            </div>
            <Spacer x={0.8} />
            <div className="">
              <p className="description">
                You get on a totally free consultation call with us
              </p>
            </div>
          </div>
          <div className="process flexRow alignCenter">
            <div>
              <img src={bullet} alt="Logo" className="bullet" />
            </div>
            <Spacer x={0.8} />
            <div className="">
              <p className="description">We provide general recommendations</p>
            </div>
          </div>
          <div className="process flexRow alignCenter">
            <div>
              <img src={bullet} alt="Logo" className="bullet" />
            </div>
            <Spacer x={0.8} />
            <div className="">
              <p className="description">
                We assess where you are with your business
              </p>
            </div>
          </div>
          <div className="process flexRow alignCenter">
            <div>
              <img src={bullet} alt="Logo" className="bullet" />
            </div>
            <Spacer x={0.8} />
            <div className="">
              <p className="description">
                We further collaborate to design and map out a bespoke marketing
                strategy to skyrocket your ROI.
              </p>
            </div>
          </div>
          <div className="process flexRow alignCenter">
            <div>
              <img src={bullet} alt="Logo" className="bullet" />
            </div>
            <Spacer x={0.8} />
            <div className="">
              <p className="description">We implement our strategy</p>
            </div>
          </div>
          <div className="process flexRow alignCenter">
            <div>
              <img src={bullet} alt="Logo" className="bullet" />
            </div>
            <Spacer x={0.8} />
            <div className="">
              <p className="description">We test our strategy</p>
            </div>
          </div>
          <div className="process flexRow alignCenter">
            <div>
              <img src={bullet} alt="Logo" className="bullet" />
            </div>
            <Spacer x={0.8} />
            <div className="">
              <p className="description">
                We continuously iterate & further improve on what works.
              </p>
            </div>
          </div>
          <div className="process flexRow alignCenter">
            <div>
              <img src={bullet} alt="Logo" className="bullet" />
            </div>
            <Spacer x={0.8} />
            <div className="">
              <p className="description">
                We deliver you monthly/weekly reports (or whatever frequency you
                prefer)
              </p>
            </div>
          </div>
          <div className="process flexRow alignCenter">
            <div>
              <img src={bullet} alt="Logo" className="bullet" />
            </div>
            <Spacer x={0.8} />
            <div className="">
              <p className="description">We monitor all results</p>
            </div>
          </div>
          <Spacer y={5.2} />
          <Button className="button-bullet" text="Get Started" big white />
        </div>
      </div>
    </Wrapper>
  );
};

export default Process;
