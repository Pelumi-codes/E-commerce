import styled from "styled-components";
import arrowLeft from "Icons/arrowLeft.svg";
import arrowRight from "Icons/arrowRight.svg";
import Spacer from "components/Spacer";
import OrnamentBlue from "Images/OrnamentBlue.svg";
import OrnamentOrange from "Images/OrnamentOrange.svg";
import { useState } from "react";

import marketingStrategy from "Images/strategy/marketingStrategy.jpg";
import accountBasedMarketing from "Images/strategy/accountBasedMarketing.jpg";
import websiteDevelopment from "Images/strategy/websiteDevelopment.jpg";
import contentMarketing from "Images/strategy/contentMarketing.jpg";
import searchEngineMarketing from "Images/strategy/searchEngineMarketing.jpg";
import displayAdvertising from "Images/strategy/displayAdvertising.jpg";
import socialMediaMarketing from "Images/strategy/socialMediaMarketing.jpg";
import leadGeneration from "Images/strategy/leadGeneration.jpg";
import emailMarketing from "Images/strategy/emailMarketing.jpg";
import programmaticAdvertising from "Images/strategy/programmaticAdvertising.jpg";
import searchEngineOptimization from "Images/strategy/searchEngineOptimization.jpg";
import marketingAnalyticsandReporting from "Images/strategy/marketingAnalyticsandReporting.jpg";

const Wrapper = styled.div`
  background-color: #fff;
  position: relative;
  z-index: 2;
  height: 900px;
  padding-top: 9.6rem;
  overflow: hidden;

  .subCaption {
    color: #74728d;
  }

  .navigation {
    position: absolute;
    top: 9.6rem;
    right: 7.2rem;

    &.mb {
      display: none;
    }
  }

  .nav:disabled {
    .arrow {
      filter: var(--filter_grey_4);
    }
  }

  .track {
    transition: transform 1s ease-in-out;

    &.group-1 {
      transform: translateX(0);
    }

    &.group-2 {
      transform: translateX(-100%) translateX(-7.2rem);
    }

    &.group-3 {
      transform: translateX(-200%) translateX(-14.4rem);
    }
  }

  .cardGroup {
    width: calc(100vw - 14.4rem);
    display: grid;
    grid-template-columns: repeat(4, calc(25% - 1.5rem));
    grid-gap: 2.4rem;
    margin-right: 7.2rem;
    flex-shrink: 0;

    &:last-child {
      margin-right: 0;
    }
  }

  .imgWrapper {
    height: 19.1rem;
    overflow: hidden;
    border-radius: 1.6rem;

    img {
      width: 100%;
    }
  }

  .card {
    position: relative;
    padding: 2.4rem;
    z-index: 2;
    box-shadow: 0px 0px 35px 0px #00000008;
    border-radius: 1.6rem;
    background-color: var(--white);
    transition: all 0.2s ease-out;
    height: max-content;

    .description {
      display: none;
    }

    &:hover {
      background-color: var(--primary_dark);
      color: var(--white);

      .description {
        display: block;
      }
    }
  }

  .cardListItem {
    margin-bottom: 0.6rem;

    &:last-child {
      margin-bottom: 0;
    }
  }

  .blue-ornament {
    z-index: -1;
    position: absolute;
    height: 98rem;
    width: 110rem;
    top: 0rem;
    right: 0;
  }

  .orange-ornament {
    z-index: -1;
    position: absolute;
    left: 0;
    bottom: 0;
    height: 90rem;
    width: 98rem;
  }

  @media screen and (max-width: 768px) {
    padding-top: 4.8rem;

    .navigation {
      top: unset;
      bottom: 4.8rem;
      right: 4.8rem;

      &.mb {
        display: flex;
      }

      &.lg {
        display: none;
      }
    }

    .blue-ornament {
      display: none;
    }

    .subCaption {
      width: 25rem;
    }

    .track {
      transition: transform 0.2s ease-out;

      &.group-1 {
        transform: translateX(0);
      }

      &.group-2 {
        transform: translateX(-100%) translateX(-2.4rem);
      }

      &.group-3 {
        transform: translateX(-200%) translateX(-4.8rem);
      }

      &.group-4 {
        transform: translateX(-300%) translateX(-7.2rem);
      }

      &.group-5 {
        transform: translateX(-400%) translateX(-9.6rem);
      }

      &.group-6 {
        transform: translateX(-500%) translateX(-12rem);
      }

      &.group-7 {
        transform: translateX(-600%) translateX(-14.4rem);
      }

      &.group-8 {
        transform: translateX(-700%) translateX(-16.8rem);
      }

      &.group-9 {
        transform: translateX(-800%) translateX(-19.2rem);
      }

      &.group-10 {
        transform: translateX(-900%) translateX(-21.6rem);
      }

      &.group-11 {
        transform: translateX(-1000%) translateX(-24rem);
      }

      &.group-12 {
        transform: translateX(-1100%) translateX(-26.4rem);
      }
    }

    .cardGroup {
      display: flex;
      grid-gap: 0;
      margin-right: 2.4rem;
      width: auto;

      &:last-child {
        margin-right: 0;
      }
    }

    .card {
      flex-shrink: 0;
      width: calc(100vw - 4.8rem);
      margin-right: 2.4rem;
      background-color: var(--primary_dark);
      color: var(--white);

      .description {
        display: block;
      }

      &:last-child {
        margin-right: 0;
      }
    }

    .orange-ornament {
      bottom: -8rem;
    }
  }
`;

const cardGroups = {
  1: [
    {
      image: marketingStrategy,
      title: "Marketing strategy",
      list: [
        "Competitive positioning and digital presence analysis",
        "Interview with Sales People & Customers",
        "Buyer Persona Analysis",
        "Social Media Audit",
        "Sales Funnel Analysis",
        "Content Plan Creation",
        "Digital Marketing Audit",
      ],
    },
    {
      image: accountBasedMarketing,
      title: "Account based marketing",
      list: [
        "Data-driven Research to Identify Targets",
        "Creation of Custom web journeys for each target",
        "Lead Generation through Personalized Content",
      ],
    },
    {
      image: websiteDevelopment,
      title: "Website development",
      list: [
        "Landing pages development",
        "Responsive Web Design",
        "WordPress Website Creation",
        "Web content development",
        "UI/UX Designs",
        "Web application development",
        "Website Maintenance",
      ],
    },
    {
      image: contentMarketing,
      title: "Content marketing",
      list: [
        "Content Creation",
        "Creative Content Campaigns",
        "Blog Writing",
        "Content Strategy",
      ],
    },
  ],
  2: [
    {
      image: searchEngineMarketing,
      title: "Search engine marketing",
      list: [
        "SEM Audit",
        "Google Search Ads",
        "Bing Ads",
        "Campaign Optimization",
        "Intensive Keyword Research",
        "Landing Pages Selection and Ideation",
        "Remarketing List for Search Ads",
      ],
    },
    {
      image: displayAdvertising,
      title: "Display advertising",
      list: [
        "Google Display Ads",
        "HTML5 Interactive Ads",
        "Interest-based Targeting",
        "Remarketing Ads",
        "iOS app advertising",
      ],
    },
    {
      image: socialMediaMarketing,
      title: "Social media marketing",
      list: [
        "Facebook Advertising",
        "Instagram Advertising",
        "Linkedin Advertising",
        "Twitter Advertising",
        "Snapchat Advertising",
        "Social Media Management",
      ],
    },
    {
      image: leadGeneration,
      title: "Lead generation",
      list: [
        "Lead Baits Creation",
        "Creative Content Creation",
        "Facebook Lead Advertising Campaigns",
        "Linkedin Lead Advertising Campaigns",
        "A/B Testing",
      ],
    },
  ],
  3: [
    {
      image: emailMarketing,
      title: "Email marketing",
      list: [
        "Email Design and copywriting",
        "Newsletter Creation and distribution",
        "Email Lead Nurturing Campaigns",
      ],
    },
    {
      image: programmaticAdvertising,
      title: "Programmatic advertising",
      list: [
        "Geolocation Advertising",
        "Custom Interactive Ads",
        "Rich Media Ads",
      ],
    },
    {
      image: searchEngineOptimization,
      title: "Search engine optimization",
      list: [
        "SEO Audit",
        "Technical Optimization",
        "Onpage Optimization",
        "Offpage Optimization",
        "Backlinks Outreach",
      ],
    },
    {
      image: marketingAnalyticsandReporting,
      title: "Marketing analytics & reporting",
      list: [
        "Conversion Tracking Setup",
        "Conversion Optimization",
        "Custom Dashboards",
        "Monthly Reports",
      ],
    },
  ],
};

const Strategy = ({ strategyText }) => {
  const [group, setGroup] = useState(1);

  const navRight = (stop) => {
    let end = stop ?? 3;

    if (group === end) {
      return;
    }
    setGroup(group + 1);
  };

  const navLeft = () => {
    if (group === 1) {
      return;
    }
    setGroup(group - 1);
  };

  return (
    <Wrapper className="container section">
      {/* Desktop nav */}
      <div className="flexRow navigation lg">
        <button className="nav left" disabled={group === 1} onClick={navLeft}>
          <img src={arrowLeft} alt="Left arrow" className="arrow" />
        </button>
        <Spacer x={2.4} />
        <button className="nav left" disabled={group === 3} onClick={navRight}>
          <img src={arrowRight} alt="Right arrow" className="arrow" />
        </button>
      </div>

      {/* Moble nav */}
      <div className="flexRow navigation mb">
        <button className="nav left" disabled={group === 1} onClick={navLeft}>
          <img src={arrowLeft} alt="Left arrow" className="arrow" />
        </button>
        <Spacer x={2.4} />
        <button
          className="nav left"
          disabled={group === 12}
          onClick={() => navRight(12)}
        >
          <img src={arrowRight} alt="Right arrow" className="arrow" />
        </button>
      </div>

      <div className="strategyText displaySmallBold mainCaption">
        {strategyText.split(`\n`).map((text) => (
          <span>
            {text}
            <br />
          </span>
        ))}
      </div>
      <Spacer y={1.2} />
      <p className="textMedium subCaption">
        Digital marketing backed with real results.
      </p>
      <Spacer y={6} />
      <div className={`track group-${group} flexRow`}>
        {/* 1 */}
        <div className="cardGroup">
          {cardGroups[1].map((card) => (
            <div className="card" key={card.title}>
              <div className="imgWrapper flexRow alignCenter justifyCenter">
                <img src={card.image} alt={card.title} className="cardImage" />
              </div>
              <Spacer y={2.4} />
              <p className="card-label textMediumBold">{card.title}</p>
              <div className="description">
                <Spacer y={2.4} />
                {card.list.map((item) => (
                  <p className="textSmall cardListItem">{item}</p>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* 2 */}
        <div className="cardGroup">
          {cardGroups[2].map((card) => (
            <div className="card" key={card.title}>
              <div className="imgWrapper flexRow alignCenter justifyCenter">
                <img src={card.image} alt={card.title} className="cardImage" />
              </div>
              <Spacer y={2.4} />
              <p className="card-label textMediumBold">{card.title}</p>
              <div className="description">
                <Spacer y={2.4} />
                {card.list.map((item) => (
                  <p className="textSmall cardListItem">{item}</p>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* 3 */}
        <div className="cardGroup">
          {cardGroups[3].map((card) => (
            <div className="card" key={card.title}>
              <div className="imgWrapper flexRow alignCenter justifyCenter">
                <img src={card.image} alt={card.title} className="cardImage" />
              </div>
              <Spacer y={2.4} />
              <p className="card-label textMediumBold">{card.title}</p>
              <div className="description">
                <Spacer y={2.4} />
                {card.list.map((item) => (
                  <p className="textSmall cardListItem">{item}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <img src={OrnamentBlue} alt="Animation" className="blue-ornament" />
      <img src={OrnamentOrange} alt="Animation" className="orange-ornament" />
    </Wrapper>
  );
};

export default Strategy;
