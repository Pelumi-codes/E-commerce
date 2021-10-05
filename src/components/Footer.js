import styled from "styled-components";

const Wrapper = styled.div`
  padding-top: 3.6rem;
  padding-bottom: 3.6rem;

  .footerLink {
    margin-right: 2.4rem;

    &:last-child {
      margin-right: 0;
    }
  }

  @media screen and (max-width: 768px) {
    flex-direction: column-reverse;
    align-items: flex-start;

    .socials {
      align-items: flex-start;
      flex-direction: column;
      margin-bottom: 3.6rem;
    }

    .copyright {
      font-size: 14px;
    }

    .footerLink {
      font-size: 16px;
      line-height: 24px;
      margin-bottom: 1.2rem;
      margin-right: 0;
    }
  }
`;

const socials = [
  {
    text: "Facebook",
    href: "https://m.facebook.com/digifigs/",
  },
  {
    text: "Instagram",
    href: "https://www.instagram.com/digifigs/",
  },
  {
    text: "Twitter",
    href: "https://twitter.com/DigifigsInc",
  },
  {
    text: "Linkedin",
    href: "https://www.linkedin.com/company/digifigs",
  },
];

const Footer = () => {
  return (
    <Wrapper className="flexRow alignCenter justifySpaceBetween container">
      <p className="textSmall copyright">
        © 2021 - Digifigs Limited | All Rights Reserved
      </p>
      <div className="socials flexRow alignCenter">
        {socials.map((item) => (
          <a
            key={item.text}
            href={item.href}
            target="_blank"
            rel="noreferrer noopener"
            className="textSmall footerLink"
          >
            {item.text}
          </a>
        ))}
      </div>
    </Wrapper>
  );
};

export default Footer;
