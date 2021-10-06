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
import leadsGrowth from "Images/leadsGrowth.jpg";
import B2C_offer from "Images/offer/B2C_offer.jpg";
import B2C_header from "Images/header/B2C_header.jpg";
import B2C_header_mobile from "Images/header/B2C_header_mobile.jpg";

function B2B_page() {
  return (
    <>
      <Header
        headerCaption={`To generate higher-quality prospects, \nmore than 49% of B2B companies are \nemploying more sophisticated content \ncreation & marketing tactics.`}
        subText={` …and we can help you do just that!`}
        image={B2C_header}
        imageMobile={B2C_header_mobile}
        logoLight
        getStartedLight
      />
      <Offer
        offerCaption={`Imagine the possibility of \ntripling your revenue growth \nsimply because you have a \nkiller digital marketing \nstrategy!`}
        image={B2C_offer}
        text={`Get Started`}
      />
      <Strategy strategyText={`Strategy Process\nImplementation Results`} />
      <Proof
        mainCaption={` We can similarly help \nyou boost your leads & \nconvert your undecided \nprospects into active \nclients.`}
        description="We developed & implemented a strategy for MYGSTZONE which gave the business a whopping 900% increase in leads in just one month!"
        image={leadsGrowth}
      />
      <Review />
      <Process step="We assess where you are with your business" />
      <Figures />
      <Feedback />
      <Brands
        caseStudyText={`See how we increased Anike Naturals’ initial lead expectation by \n380% and generated over 14,000 clicks in just one month`}
        caseStudyLink="/anike-natural"
        brand1="ANIKE"
        brand2="HEROSHE"
      />
      <Conclusion
        text={`It's not just about crafting a marketing strategy. It's about \nimplementing a tailored marketing strategy that helps your business \nstay miles ahead`}
        subText="…and also convert undecided prospects to paying customers."
      />
      <Footer />
    </>
  );
}

export default B2B_page;
