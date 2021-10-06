import React from "react";
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
import Health_offer from "Images/offer/Health_offer.jpg";
import MapOut from "../components/MapOut";
const HEALTH_sector = () => {
  return (
    <>
      <Offer
        offerCaption={`84% of patients use \nonline sources for \nhospital research & 44% \n of these later schedule a \nhospital appointment.`}
        subText="The question is, can prospective patients find you whenever when they search for you? "
        image={Health_offer}
      />
      <MapOut />
      <Strategy strategyText={`Strategy Process\nImplementation Results`} />
      <Proof
        mainCaption={` We can similarly help you boost your leads & convert your undecided prospects into active patients.`}
        description="MyGSTZone could barely generate more than 60 profitable leads monthly."
        image={leadsGrowth}
      />
      <Review />
      <Process step="We assess where you are with your healthcare business " />
      <Figures />
      <Feedback />
      <Brands
        caseStudyText={`See how we boosted Heroshe’s (a US-to-Nigeria shipping company) \nweb traffic by 1348%`}
        caseStudyLink="/heroshe"
        brand1="ANIKE"
        brand2="MYGSTZone"
      />
      <Conclusion
        text={`It's not just about crafting a marketing strategy. It's about \nimplementing a tailored marketing strategy that helps your healthcare \nbusiness stay miles ahead of the pack.`}
      />
      <Footer />
    </>
  );
};

export default HEALTH_sector;
