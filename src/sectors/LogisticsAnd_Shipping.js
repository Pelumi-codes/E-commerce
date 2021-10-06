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
import signUpGrowth_proof from "Images/signUpGrowth_proof.jpg";
import Logistics_offer from "Images/offer/Logistics_offer.jpg";

const LogisticsAnd_Shipping = () => {
  return (
    <>
      <Header
        brand
        getStartedLight
        textDark
        headerCaption={`65% of people looking \nto ship parcels will use a \nshipping company that \nturns up on Google's \nfirst page search.`}
        subText={`The question is, can prospective customers find \nyour business when they search for you? `}
        image={Logistics_offer}
        imageRight
      />
      <Strategy strategyText={`Strategy Process\nImplementation Results`} />
      <Proof
        mainCaption={`As a result, their total \nsignups increased by \n3000% between \nFebruary 1st and March \n31st 2020.`}
        description="A tailored marketing strategy we developed and implemented for Heroshe accelerated their web reach and increased their web traffic by 1348%. 
            "
        image={signUpGrowth_proof}
      />
      <Review />
      <Process step="We assess where you are with your logistics business " />
      <Figures />
      <Feedback />
      <Brands
        caseStudyText={`See how we achieved a cumulative reach of up to 706,812 people for \nHeroshe, a US-to-Nigeria shipping company.`}
        caseStudyLink="/mygstzone"
        brand1="ANIKE"
        brand2="MYGSTZone"
      />
      <Conclusion
        text={`It's not just about crafting a marketing strategy. It's about \nimplementing a tailored marketing strategy that helps your shipping \ncompany stay ahead of competitors and also convert undecided \ncustomers to paying customers.`}
      />
      <Footer />
    </>
  );
};

export default LogisticsAnd_Shipping;
