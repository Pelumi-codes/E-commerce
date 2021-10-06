import React from "react";
import Header from "../components/Header";
import Offer from "../components/offer";
import Strategy from "../components/Strategy";
import Proof from "../components/Proof";
import Review from "../components/Review";
import Process from "../components/Process";
import Figures from "../components/Figures";
import Feedback from "../components/Feedback";
import Brands from "../components/Brands";
import Conclusion from "../components/Conclusion";
import Footer from "../components/Footer";
import percentage from "Images/percentage.svg";
import B2C_offer from "Images/offer/B2C_offer.jpg";
import B2C_header from "Images/header/B2C_header.jpg";
import B2C_header_mobile from "Images/header/B2C_header_mobile.jpg";

function B2C_general() {
  return (
    <>
      <Header
        headerCaption={`49% of customers say they \nuse google to find a new \nproduct or service`}
        subText={`The question is, will your customers find you when they do a search? Let’s Get You Seen`}
        image={B2C_header}
        imageMobile={B2C_header_mobile}
        logoLight
        getStartedLight
      />
      <Offer
        offerCaption={`Increasing your \nmarketing budget isn't \nall you need to appear \non Google's first page`}
        subText="It's how your marketing strategy is implemented and monitored that gets you results."
        image={B2C_offer}
        text={`Request a free consultation`}
      />
      <Strategy strategyText={`Strategy Process\nImplementation Results`} />
      <Proof
        mainCaption={`We can similarly help \nyou reach a wider \naudience \nin record time!`}
        description="A tailored marketing strategy we developed & implemented for Anike Naturals boosted their online reach as we helped them supersede their initial expected leads by 380%."
        image={percentage}
      />
      <Review />
      <Process step="We assess where you are with your business" />
      <Figures />
      <Feedback />
      <Brands
        caseStudyText={`See how we increased Anike Naturals’ initial lead expectation by \n380% and generated over 14,000 clicks in just one month`}
        caseStudyLink="/anike-natural"
        brand1="MYGSTZone"
        brand2="HEROSHE"
      />
      <Conclusion
        text={`We can also help you drive more\n conversions to boost your business sales.`}
        subText="Let's get to work"
      />
      <Footer />
    </>
  );
}

export default B2C_general;
