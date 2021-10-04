import Button from "components/Button/Button";
import Spacer from "components/Spacer";
import styled from "styled-components";

const Wrapper = styled.div`
  background-color: ${(props) => props.bg ?? "var(--primary)"};
  color: ${(props) => props.color ?? "inherit"};
  padding: 4.8rem;
  width: 55rem;
  height: max-content;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    bottom: 20rem;
    right: 16rem;
    background-color: ${(props) => props.circleColor ?? "#ffffff10"};
    border-radius: 50%;
    height: 100rem;
    aspect-ratio: 1/1;
    z-index: 0;
  }

  .brandName {
    padding: 1.2rem;
    background-color: var(--white);
    width: max-content;
    color: ${(props) => props.brandColor ?? "var(--text)"};
  }

  .description {
    font-size: 56px;
    line-height: 72px;
    font-weight: 700;
    width: 80%;
  }

  .layer1 {
    position: relative;
    z-index: 1;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    padding: 4.8rem 2.4rem;

    &::before {
      right: 0;
      bottom: 10rem;
    }

    .description {
      font-size: 48px;
      line-height: 60px;
      width: 100%;
    }
  }
`;

const ImpactCard = ({ brandName, description, target = "/", ...props }) => {
  return (
    <Wrapper {...props}>
      <div className="flexRow justifyCenter alignCenter brandName layer1">
        <span className="textLargeBold">{brandName}</span>
      </div>
      <Spacer y={4.8} />
      <p className="description layer1">{description}</p>
      <Spacer y={14.4} yMobile={9.6} />
      <Button
        as="a"
        href={target}
        className="btn layer1"
        text="Read more"
        big
        white
      />
      <Spacer y={4.8} />
    </Wrapper>
  );
};

export default ImpactCard;
