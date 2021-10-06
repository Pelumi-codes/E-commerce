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
import ecommerce_header from "Images/header/ecommerce_header.jpg";
import leadsGrowth from "Images/leadsGrowth.jpg";
import ecommerce_offer from "Images/offer/ecommerce_offer.jpg";
import ecommerce_header_mobile from "Images/header/ecommerce_header_mobile.jpg";

function E_commerce() {
  return (
    <>
      <Header
        headerCaption={`Fuel your online \nstore with \nincreased leads`}
        subText={`We can help you skyrocket your customer \nbase with an online marketing strategy \ntailored just for your business.`}
        image={ecommerce_header}
        imageMobile={ecommerce_header_mobile}
        chartCards
      />
      <Offer
        offerCaption={`We help E-commerce businesses\nand a number of other \nenterprises across many sectors \namplify their digital presence,\nget more profitable conversions \nand boost their business\nrevenue.`}
        image={ecommerce_offer}
        text={`Get Started`}
      />
      <Strategy strategyText={`Strategy Process\nImplementation Results`} />
      <Proof
        mainCaption={` We can similarly help you boost your leads & convert your undecided prospects into active buyers.`}
        description="MyGSTZone could barely generate more than 60 profitable leads monthly."
        image={leadsGrowth}
      />
      <Review />
      <Process step="We assess where you are with your business " />
      <Figures />
      <Feedback />
      <Brands
        caseStudyText={`See how we boosted Heroshe’s (a US-to-Nigeria shipping company) \nweb traffic by 1348%`}
        caseStudyLink="/heroshe"
        brand1="MYGSTZone"
        brand2="ANIKE"
      />
      <Conclusion text="As an online store, making sales isn't just about producing cheaper products or offering competitive prices. What's the point if your target audience can't find them anyway? We can help boost your  brand awareness to rake in sales." />
      <Footer />
    </>
  );
}

export default E_commerce;
