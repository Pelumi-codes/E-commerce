import styled from "styled-components";
import Spacer from "components/Spacer";
import Button from "components/Button";

const Wrapper = styled.div`
  background-color: #fffaf2;
  padding-right: 0;

  .offerCaption {
    height: max-content;
    width: 58.4rem;
  }

  .offerImage {
    height: 65rem;
    width: 56rem;
    overflow: hidden;
    flex-shrink: 0;
  }

  &.noImage {
    justify-content: center;
    background-color: var(--white);

    .offerCaption {
      width: 60%;
      text-align: center;

      br {
        display: none;
      }

      .btn {
        margin: auto;
      }
    }
  }

  @media screen and (max-width: 768px) {
    padding-right: 2.4rem;
    flex-direction: column;
    justify-content: center;
    height: 100vh;

    &.noImage {
      background-color: #fffaf2;

      .offerCaption {
        width: 100%;
        text-align: center;
      }
    }

    .offerImage {
      display: none;
    }

    .offerCaption {
      max-width: 100%;
    }

    .offerCaption h2 {
      font-size: 24px;
      line-height: 36px;
      text-align: center;

      br {
        display: none;
      }
    }

    .subText {
      text-align: center;
    }

    .offerCaption .btn {
      margin: auto;
    }
  }
`;

const offer = ({ offerCaption, subText, image, text }) => {
  return (
    <Wrapper
      className={`container section flexRow alignCenter justifySpaceBetween${
        image ? "" : " noImage"
      }`}
    >
      <div className="offerCaption">
        <h2 className="displaySmallBold">
          {offerCaption?.split("\n").map((item, index) => (
            <span key={index}>
              {item}
              <br />
            </span>
          ))}
        </h2>
        <Spacer y={2.4} />
        {subText && <p className="textMedium subText">{subText}</p>}
        <Spacer y={2.4} />
        <Button className="btn" text={text} big />
      </div>
      {image && (
        <div className="offerImage">
          <img src={image} alt="A laptop" />
        </div>
      )}
    </Wrapper>
  );
};

export default offer;
