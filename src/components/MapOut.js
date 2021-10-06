import styled from "styled-components";

const Wrapper = styled.div`
  padding-top: 14.4rem;
  padding-bottom: 14.4rem;
  overflow: hidden;

  .mapCaption {
    width: 48%;
    margin: auto;
  }

  @media screen and (max-width: 768px) {
    padding-top: 4.8rem;
    padding-bottom: 4.8rem;

    .mapCaption {
      width: 100%;
    }
  }
`;

const MapOut = () => {
  return (
    <Wrapper className="container">
      <p className="textLargeBold textCenter mapCaption">
        We can help you map out a profitable healthcare marketing strategy – One
        that converts potential patients into a paying base.
      </p>
    </Wrapper>
  );
};

export default MapOut;
