import React from "react";
import Header from "../components/Header";
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
import Fintech_header from "Images/header/Fintech_header.jpg";
import Offer from "components/offer";

const FINTECH_page = () => {
  return (
    <>
      <Header
        brand
        getStartedLight
        textDark
        headerCaption={`Get front seat in a \nfiercely competitive \nfintech marketplace`}
        subText={`Imagine the possibility of tripling your user base simply because \nyou have a killer digital marketing tactic!  `}
        image={Fintech_header}
        imageRight
      />
      <Offer
        offerCaption={`There's no shortage of potential ways to market your fintech services to a teeming pool of customers looking to use your services. `}
        text={`Let’s show you how`}
      />
      <Strategy strategyText={`Strategy Process\nImplementation Results`} />
      <Proof
        mainCaption={` We can similarly help you boost your leads & convert your undecided prospects into active customers.`}
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
        brand1="ANIKE"
        brand2="MYGSTZone"
      />
      <Conclusion
        text={`It's not just about crafting a marketing strategy. It's about \nimplementing a tailored marketing strategy that helps you stay miles \nahead of your competitors in the fintech space`}
        subText="…and also convert undecided prospects to paying customers!."
      />
      <Footer />
    </>
  );
};

export default FINTECH_page;
