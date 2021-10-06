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
import lawFirm_header from "Images/header/lawFirm_header.jpg";
import signUpGrowth_proof from "Images/signUpGrowth_proof.jpg";
import lawFirm_offer from "Images/offer/lawFirm_offer.jpg";
import lawFirm_header_mobile from "Images/header/lawFirm_header_mobile.jpg";

const LAW_firms = () => {
  return (
    <>
      <Header
        headerCaption={`Remain competitive in \nyour law niche with a \nstellar digital \nmarketing strategy!`}
        subText={`Your top law firm competitors show up on \nGoogle's first listing, and you can too!`}
        image={lawFirm_header}
        imageMobile={lawFirm_header_mobile}
        logoLight
        getStartedLight
      />
      <Offer
        offerCaption={`We help E-commerce businesses\nand a number of other \nenterprises across many sectors \namplify their digital presence,\nget more profitable conversions \nand boost their business\nrevenue.`}
        subText="This alone, can skyrocket the number of high-quality clients you can convert into paying clients! "
        image={lawFirm_offer}
      />
      <Strategy strategyText={`Strategy Process\nImplementation Results`} />
      <Proof
        mainCaption={`As a result, their total \nsignups increased by \n3000% between \nFebruary 1st and March \n31st 2020.`}
        description="A tailored marketing strategy we developed and implemented for Heroshe accelerated their web reach and increased their web traffic by 1348%. 
        "
        image={signUpGrowth_proof}
      />
      <Review />
      <Process step="We assess where you are with your law firm business " />
      <Figures />
      <Feedback />
      <Brands
        caseStudyText={`See how we increased MyGSTZone’s lead rates \nby 900% in just one month`}
        caseStudyLink="/mygstzone"
        brand1="ANIKE"
        brand2="HEROSHE"
      />
      <Conclusion
        text={`It's not just about crafting a marketing strategy. It's about \nimplementing a tailored marketing strategy that helps your law firm \nconvert high quality prospects to paying clients.`}
      />
      <Footer />
    </>
  );
};

export default LAW_firms;
