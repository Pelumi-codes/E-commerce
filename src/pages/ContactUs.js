import Spacer from "components/Spacer";
import styled from "styled-components";
import logoWhite from "Icons/logoWhite.svg";
import Button from "components/Button";
import Footer from "components/Footer";

import buildings from "Images/consultation/buildings.svg";
import microEnterprise from "Images/consultation/microEnterprise.svg";
import smallBusiness from "Images/consultation/smallBusiness.svg";
import mediumEnterprise from "Images/consultation/mediumEnterprise.svg";
import largeEnterprise from "Images/consultation/largeEnterprise.svg";
import agency from "Images/consultation/agency.svg";

import law from "Images/consultation/law.svg";
import logistics from "Images/consultation/logistics.svg";
import finance from "Images/consultation/finance.svg";
import healthCare from "Images/consultation/healthCare.svg";
import ecommerce from "Images/consultation/ecommerce.svg";
import technology from "Images/consultation/technology.svg";
import fashion from "Images/consultation/fashion.svg";
import pharm from "Images/consultation/pharm.svg";
import agriculture from "Images/consultation/agriculture.svg";
import realEstate from "Images/consultation/realEstate.svg";
import media from "Images/consultation/media.svg";
import entertainment from "Images/consultation/entertainment.svg";
import education from "Images/consultation/education.svg";
import food from "Images/consultation/food.svg";
import travel from "Images/consultation/travel.svg";
import hospitality from "Images/consultation/hospitality.svg";
import other from "Images/consultation/other.svg";

import emailMarketing from "Images/consultation/emailMarketing.svg";
import appCreation from "Images/consultation/appCreation.svg";
import videoContentCreation from "Images/consultation/videoContentCreation.svg";
import onSiteSearch from "Images/consultation/onSiteSearch.svg";
import socialMediaMarketing from "Images/consultation/socialMediaMarketing.svg";
import influencerMarketing from "Images/consultation/influencerMarketing.svg";

import webCopies from "Images/consultation/webCopies.svg";
import landingPages from "Images/consultation/landingPages.svg";
import newsLetters from "Images/consultation/newsLetters.svg";
import ebook from "Images/consultation/ebook.svg";
import infoGraphics from "Images/consultation/infoGraphics.svg";
import websiteDesign from "Images/consultation/websiteDesign.svg";
import cta from "Images/consultation/cta.svg";
import bespokeIllustrations from "Images/consultation/bespokeIllustrations.svg";
import searchEngineAds from "Images/consultation/searchEngineAds.svg";
import payPerClick from "Images/consultation/payPerClick.svg";

import websiteRedesign from "Images/consultation/websiteRedesign.svg";
import websiteCreation from "Images/consultation/websiteCreation.svg";
import comprehensiveMarketing from "Images/consultation/comprehensiveMarketing.svg";
import seoMarketing from "Images/consultation/seoMarketing.svg";
import salesGeneration from "Images/consultation/salesGeneration.svg";
import qualityLeads from "Images/consultation/qualityLeads.svg";
import ContactForm from "components/consultation/ContactForm";
import { useState } from "react";
import { Link, Redirect, Route } from "react-router-dom";

const Wrapper = styled.div`
  overflow: hidden;

  .imgWrapper {
    width: 40%;

    img {
      width: 100%;
    }
  }

  .optionGroup {
    flex-shrink: 0;
    width: 100vw;
    padding: 0 7.2rem;
    height: max-content;
  }

  .companySize {
    .contentRight {
      width: 50%;
    }

    .options {
      justify-content: space-around;
    }

    .option {
      margin-left: 4.8rem;
      margin-bottom: 4.8rem;

      &:nth-child(1) {
        margin-left: 0;
      }
    }
  }

  .industry {
    .option {
      margin: 4.8rem;

      &:nth-child(1) {
        margin-left: 0;
      }
    }
  }

  .technologies,
  .overallNeed {
    .options {
      width: 80%;
      margin: auto;
    }

    .option {
      margin: 4.8rem;

      &:nth-child(1) {
        margin-left: 0;
      }
    }
  }

  .strategy {
    .options {
      justify-content: unset;
      margin-bottom: 9.6rem;

      &:last-child {
        margin-bottom: 0;
      }
    }

    .option {
      margin-right: 4.8rem;

      &:last-child {
        margin-right: 0;
      }
    }
  }

  .options {
    flex-wrap: wrap;
    justify-content: center;
  }

  .contactForm {
    width: 36rem;
    margin: auto;
  }

  .nextBtn {
    display: block;
    width: 24rem;
    padding: 1.6rem 2.4rem;
    border-radius: 0.8rem;
    background-color: var(--primary);
    color: var(--white);
    text-align: center;
  }

  .backBtn {
    display: block;
    width: 24rem;
    padding: 1.6rem 2.4rem;
    border-radius: 0.8rem;
    background-color: var(--white);
    color: var(--primary);
    text-align: center;
  }

  @media screen and (max-width: 768px) {
    .optionGroup {
      flex-direction: column;
      padding: 0 2.4rem;
    }

    .imgWrapper {
      width: 100%;
      margin-bottom: 9.6rem;
    }

    .companySize {
      .contentRight {
        width: 100%;
      }

      .option {
        margin-left: 0;
      }
    }

    .industry {
      .option {
        margin: 0;
        margin-bottom: 4.8rem;
      }
    }

    .technologies,
    .overallNeed {
      .title {
        br {
          display: none;
        }
      }

      .options {
        width: 100%;
        margin: auto;
      }

      .option {
        margin: 0;
        margin-bottom: 4.8rem;
      }
    }

    .strategy {
      .title {
        br {
          display: none;
        }
      }

      .subTitle {
        text-align: center;
      }

      .option {
        margin: 0;
        margin-bottom: 4.8rem;
      }
    }

    .contact {
      .title {
        br {
          display: none;
        }
      }
    }

    .options {
      flex-direction: column;
      align-items: center;
    }

    .contactForm {
      width: 100%;
    }

    .backBtn,
    .nextBtn {
      width: 12rem;
      padding: 1.2rem 2.4rem;
    }
  }
`;

const Header = styled.div`
  background-color: var(--primary_dark);
  padding: 0 7.2rem;

  .logo {
    img {
      height: 4.8rem;
    }
  }

  @media screen and (max-width: 768px) {
    padding: 0 2.4rem;

    .logo {
      img {
        height: 2.4rem;
      }
    }

    .btn {
      span {
        font-size: 14px;
      }
    }
  }
`;

const Option = styled.button`
  flex-shrink: 0;
  transition: all 0.2s ease-out;
  position: relative;
  width: max-content;

  img {
    height: 9.6rem;
  }

  .text {
    width: 14.8rem;
    margin-top: 1.2rem;
  }

  &:hover {
    transform: scale(1.2);
  }

  &.selected {
    transform: scale(1.2);

    &::after {
      content: "";
      position: absolute;
      height: 2rem;
      width: 2rem;
      background-color: var(--primary);
      border-radius: 50%;
      margin: auto;
      top: 0;
      right: 0;
    }
  }
`;

const options = {
  companySize: [
    {
      image: microEnterprise,
      text: "Micro enterprise (1-9)",
    },
    {
      image: smallBusiness,
      text: "Small business (10-49)",
    },
    {
      image: mediumEnterprise,
      text: "Medium-sized enterprise (50-249)",
    },
    {
      image: largeEnterprise,
      text: "Large enterprise (250+)",
    },
    {
      image: agency,
      text: "Agency (500+)",
    },
  ],
  industry: [
    {
      image: law,
      text: "Law",
    },
    {
      image: logistics,
      text: "Logistics",
    },
    {
      image: finance,
      text: "Finance",
    },
    {
      image: healthCare,
      text: "Healthcare",
    },
    {
      image: ecommerce,
      text: "E-commerce",
    },
    {
      image: technology,
      text: "Technology",
    },
    {
      image: fashion,
      text: "Fashion",
    },
    {
      image: pharm,
      text: "Pharmaceuticals",
    },
    {
      image: agriculture,
      text: "Agriculture",
    },
    {
      image: realEstate,
      text: "Real Estate",
    },
    {
      image: media,
      text: "Media",
    },
    {
      image: entertainment,
      text: "Entertainment",
    },
    {
      image: education,
      text: "Education",
    },
    {
      image: food,
      text: "Food",
    },
    {
      image: travel,
      text: "Travel",
    },
    {
      image: hospitality,
      text: "Hospitality",
    },
    {
      image: other,
      text: "Other",
    },
  ],
  technologies: [
    {
      image: emailMarketing,
      text: "Email Marketing",
    },
    {
      image: appCreation,
      text: "Mobile App Creation",
    },
    {
      image: videoContentCreation,
      text: "Video Content Creation",
    },
    {
      image: onSiteSearch,
      text: "On-site Search",
    },
    {
      image: socialMediaMarketing,
      text: "Social Media Marketing",
    },
    {
      image: influencerMarketing,
      text: "Influencer Marketing",
    },
  ],
  writing: [
    {
      image: webCopies,
      text: "Web-copies",
    },
    {
      image: landingPages,
      text: "Landing Pages",
    },
    {
      image: newsLetters,
      text: "Newsletters",
    },
    {
      image: socialMediaMarketing,
      text: "Social Media Copies",
    },
    {
      image: ebook,
      text: "Ebooks",
    },
    {
      image: other,
      text: "Other",
    },
  ],
  designNeeds: [
    {
      image: infoGraphics,
      text: "Infographics",
    },
    {
      image: landingPages,
      text: "Landing Pages",
    },
    {
      image: websiteDesign,
      text: "Website Designs",
    },
    {
      image: cta,
      text: "CTA",
    },
    {
      image: bespokeIllustrations,
      text: "Bespoke Illustrations",
    },
    {
      image: other,
      text: "Other",
    },
  ],
  promotionTactics: [
    {
      image: socialMediaMarketing,
      text: "Social Media Ads",
    },
    {
      image: searchEngineAds,
      text: "Search Engine Ads",
    },
    {
      image: payPerClick,
      text: "Pay Per Click",
    },
    {
      image: other,
      text: "Other",
    },
  ],
  overallNeed: [
    {
      image: websiteRedesign,
      text: "Website Redesign",
    },
    {
      image: websiteCreation,
      text: "Website Creation",
    },
    {
      image: comprehensiveMarketing,
      text: "Comprehensive Marketing",
    },
    {
      image: seoMarketing,
      text: "SEO Marketing",
    },
    {
      image: salesGeneration,
      text: "Sales Generation",
    },
    {
      image: qualityLeads,
      text: "Quality Leads",
    },
    {
      image: other,
      text: "Other",
    },
  ],
};

const ContactUs = () => {
  const [copmanySize, setCompanySize] = useState("N/A");
  const [industry, setIndustry] = useState("N/A");
  const [technologies, setTechnologies] = useState("N/A");
  const [writingStrategy, setWritingStrategy] = useState("N/A");
  const [designStrategy, setDesignStrategy] = useState("N/A");
  const [promotionStrategy, setPromotionStrategy] = useState("N/A");
  const [overallNeed, setOverallNeed] = useState("N/A");

  return (
    <Wrapper>
      <Header>
        <Spacer y={2.4} />
        <div className="flexRow alignCenter justifySpaceBetween topBar">
          <div className="flexRow alignCenter logo">
            <img src={logoWhite} alt="D" />
            <Spacer x={1.2} xMobile={0.8} />
            <span className="colorWhite textLargeBold">Digifigs</span>
          </div>
          <Button
            as="a"
            href="/consultation"
            className="btn"
            text="Get a free consultation"
            big
            white
          />
        </div>
        <Spacer y={9.6} />
        <h1 className="caption displayLargeBold textCenter colorWhite textUpperCase">
          Contact us
        </h1>
        <Spacer y={9.6} />
      </Header>
      <Spacer y={9.6} />

      <Route
        exact
        path="/consultation/contact-us"
        component={() => (
          <Redirect to="/consultation/contact-us/company-size" />
        )}
      />

      {/* Group 1 */}
      <Route exact path="/consultation/contact-us/company-size">
        <div className="optionGroup companySize flexRow alignCenter justifySpaceBetween">
          <div className="imgWrapper">
            <img src={buildings} alt="buildings" />
          </div>
          <div className="contentRight">
            <p className="displaySmallBold title">Size of your company</p>
            <Spacer y={4.8} />
            <div className="options flexRow">
              {options.companySize.map((option) => (
                <Option
                  key={option.text}
                  className={`flexColumn alignCenter option${
                    copmanySize === option.text ? " selected" : ""
                  }`}
                  onClick={() => setCompanySize(option.text)}
                >
                  <img src={option.image} alt="Option" />
                  <p className="textCenter textMedium text">{option.text}</p>
                </Option>
              ))}
            </div>
          </div>
        </div>
        <Spacer y={4.8} />
        <div className="flexRow justifyCenter">
          <Link
            to="/consultation/contact-us/industry"
            className="nextBtn textMedium"
            text="Next"
          >
            Next
          </Link>
        </div>
      </Route>

      {/* Group 2 */}
      <Route exact path="/consultation/contact-us/industry">
        <div className="optionGroup industry">
          <p className="displaySmallBold textCenter title">
            What industry does your <br />
            business belong to?
          </p>
          <Spacer y={4.8} />
          <div className="options flexRow">
            {options.industry.map((option) => (
              <Option
                key={option.text}
                className={`flexColumn alignCenter option${
                  industry === option.text ? " selected" : ""
                }`}
                onClick={() => setIndustry(option.text)}
              >
                <img src={option.image} alt="Option" />
                <p className="textCenter textMedium text">{option.text}</p>
              </Option>
            ))}
          </div>
        </div>
        <Spacer y={4.8} />
        <div className="flexRow justifyCenter">
          <Link
            to="/consultation/contact-us/company-size"
            className="backBtn textMedium"
            text="Next"
          >
            Back
          </Link>
          <Spacer x={2.4} />
          <Link
            to="/consultation/contact-us/technologies"
            className="nextBtn textMedium"
            text="Next"
          >
            Next
          </Link>
        </div>
      </Route>

      {/* Group 3 */}
      <Route exact path="/consultation/contact-us/technologies">
        <div className="optionGroup technologies">
          <p className="displaySmallBold textCenter title">
            In what technologies have you <br />
            invested in the last 12 months?
          </p>
          <Spacer y={4.8} />
          <div className="options flexRow">
            {options.technologies.map((option) => (
              <Option
                key={option.text}
                className={`flexColumn alignCenter option${
                  technologies === option.text ? " selected" : ""
                }`}
                onClick={() => setTechnologies(option.text)}
              >
                <img src={option.image} alt="Option" />
                <p className="textCenter textMedium text">{option.text}</p>
              </Option>
            ))}
          </div>
        </div>
        <Spacer y={4.8} />
        <div className="flexRow justifyCenter">
          <Link
            to="/consultation/contact-us/industry"
            className="backBtn textMedium"
            text="Next"
          >
            Back
          </Link>
          <Spacer x={2.4} />
          <Link
            to="/consultation/contact-us/strategy"
            className="nextBtn textMedium"
            text="Next"
          >
            Next
          </Link>
        </div>
      </Route>

      {/* Group 4 */}
      <Route exact path="/consultation/contact-us/strategy">
        <div className="optionGroup strategy">
          <p className="displaySmallBold textCenter title">
            What is most important to you in your <br />
            content strategy?
          </p>
          <Spacer y={4.8} yMobile={9.6} />
          <p className="textLargeBold subTitle">Writing</p>
          <Spacer y={2.4} />
          <div className="options flexRow">
            {options.writing.map((option) => (
              <Option
                key={option.text}
                className={`flexColumn alignCenter option${
                  writingStrategy === option.text ? " selected" : ""
                }`}
                onClick={() => setWritingStrategy(option.text)}
              >
                <img src={option.image} alt="Option" />
                <p className="textCenter textMedium text">{option.text}</p>
              </Option>
            ))}
          </div>

          <p className="textLargeBold subTitle">Design needs</p>
          <Spacer y={2.4} />
          <div className="options flexRow">
            {options.designNeeds.map((option) => (
              <Option
                key={option.text}
                className={`flexColumn alignCenter option${
                  designStrategy === option.text ? " selected" : ""
                }`}
                onClick={() => setDesignStrategy(option.text)}
              >
                <img src={option.image} alt="Option" />
                <p className="textCenter textMedium text">{option.text}</p>
              </Option>
            ))}
          </div>

          <p className="textLargeBold subTitle">Promotion tactics</p>
          <Spacer y={2.4} />
          <div className="options flexRow">
            {options.promotionTactics.map((option) => (
              <Option
                key={option.text}
                className={`flexColumn alignCenter option${
                  promotionStrategy === option.text ? " selected" : ""
                }`}
                onClick={() => setPromotionStrategy(option.text)}
              >
                <img src={option.image} alt="Option" />
                <p className="textCenter textMedium text">{option.text}</p>
              </Option>
            ))}
          </div>
        </div>
        <Spacer y={4.8} />
        <div className="flexRow justifyCenter">
          <Link
            to="/consultation/contact-us/technologies"
            className="backBtn textMedium"
            text="Next"
          >
            Back
          </Link>
          <Spacer x={2.4} />
          <Link
            to="/consultation/contact-us/overall-pressing-need"
            className="nextBtn textMedium"
            text="Next"
          >
            Next
          </Link>
        </div>
      </Route>

      {/* Group 5 */}
      <Route exact path="/consultation/contact-us/overall-pressing-need">
        <div className="optionGroup overallNeed">
          <p className="displaySmallBold textCenter title">
            Your overall pressing need is?
          </p>
          <Spacer y={4.8} />
          <div className="options flexRow">
            {options.overallNeed.map((option) => (
              <Option
                key={option.text}
                className={`flexColumn alignCenter option${
                  overallNeed === option.text ? " selected" : ""
                }`}
                onClick={() => setOverallNeed(option.text)}
              >
                <img src={option.image} alt="Option" />
                <p className="textCenter textMedium text">{option.text}</p>
              </Option>
            ))}
          </div>
        </div>
        <Spacer y={4.8} />
        <div className="flexRow justifyCenter">
          <Link
            to="/consultation/contact-us/strategy"
            className="backBtn textMedium"
            text="Next"
          >
            Back
          </Link>
          <Spacer x={2.4} />
          <Link
            to="/consultation/contact-us/your-info"
            className="nextBtn textMedium"
            text="Next"
          >
            Next
          </Link>
        </div>
      </Route>

      {/* Group 6 */}
      <Route exact path="/consultation/contact-us/your-info">
        <div className="optionGroup contact">
          <p className="displaySmallBold textCenter title">
            One Last thing! <br />
            We need your information to create a <br />
            proposal for you!
          </p>
          <Spacer y={4.8} />
          <ContactForm
            className="contactForm"
            extraFields={[
              {
                name: "Company_Size",
                value: copmanySize,
              },
              {
                name: "Industry",
                value: industry,
              },
              {
                name: "Tech_Invested_In_Last_12_Months",
                value: technologies,
              },
              {
                name: "Writing_Content_Strategy",
                value: writingStrategy,
              },
              {
                name: "design_Content_Strategy",
                value: designStrategy,
              },
              {
                name: "promotion_Content_Strategy",
                value: promotionStrategy,
              },
              {
                name: "Overall_pressing_need",
                value: overallNeed,
              },
            ]}
            noTitle
          />
        </div>
        <Spacer y={4.8} />
        <div className="flexRow justifyCenter">
          <Link
            to="/consultation/contact-us/overall-pressing-need"
            className="backBtn textMedium"
            text="Next"
          >
            Back
          </Link>
        </div>
      </Route>

      <Spacer y={9.6} />
      <Footer />
    </Wrapper>
  );
};

export default ContactUs;
