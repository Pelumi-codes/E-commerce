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
import Auto_offer from "Images/offer/Auto_offer.jpg";
import AUTO_header from "Images/header/AUTO_header.jpg";
import AUTO_header_mobile from "Images/header/AUTO_header_mobile.jpg";
import leadsGrowth from "Images/leadsGrowth.jpg";

const AUTO_mobile = () => {
  return (
    <>
      <Header
        headerCaption={`There's a teeming \nmarket of customers \nlooking to buy, sell \nand swap their cars`}
        subText={`And we can help position your automobile brand to be top-of-mind for your target customers.`}
        image={AUTO_header}
        imageMobile={AUTO_header_mobile}
        logoLight
        getStartedLight
      />
      <Offer
        offerCaption={`Get front seat in a fiercely \ncompetitive online automobile \nmarketplace with a tailored \nmarketing strategy we will \ncreate and implement to boost \nyour car sales.`}
        image={Auto_offer}
        text={`Get Started`}
      />
      <Strategy strategyText={`Strategy Process\nImplementation Results`} />
      <Proof
        mainCaption={`We can similarly help \nyou reach a wider \naudience \nin record time!`}
        description="We developed & implemented a strategy for MYGSTZONE which gave the business a whopping 900% increase in leads in just one month!"
        image={leadsGrowth}
      />
      <Review />
      <Process step="We assess where you are with your automobile business" />
      <Figures />
      <Feedback />
      <Brands
        caseStudyText={`See how we increased Anike Naturals’ initial lead expectation by \n380% and generated over 14,000 clicks in just one month`}
        caseStudyLink="/anike-natural"
        brand1="ANIKE"
        brand2="HEROSHE"
      />
      <Conclusion
        text={`It's not just about crafting a marketing strategy. It's about \nimplementing a tailored marketing strategy that resonates with your \naudience & helps your automobile business stay ahead \nmiles ahead`}
        subText="…and also convert undecided prospects to paying customers."
      />
      <Footer />
    </>
  );
};

export default AUTO_mobile;
