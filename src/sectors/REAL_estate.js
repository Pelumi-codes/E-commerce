import React from "react";
import Offer from "../components/offer";
import Strategy from "../components/Strategy";
import Proof from "../components/Proof";
import Review from "../components/Review";
import Process from "../components/Process";
import Figures from "../components/Figures";
import Feedback from "../components/Feedback";
import Footer from "../components/Footer";
import Conclusion from "../components/Conclusion";
import Header from "../components/Header";
import leadsGrowth from "Images/leadsGrowth.jpg";
import realEstate_offer from "Images/offer/realEstate_offer.jpg";
import realEstate_header from "Images/header/realEstate_header.jpg";
import realEstate_header_mobile from "Images/header/realEstate_header_mobile.jpg";
import Brands from "../components/Brands";
const REAL_estate = () => {
  return (
    <>
      <Header
        headerCaption={`Be honest, as a realtor looking \nto close more deals, how much \ntime do you have to develop a \nreal estate marketing strategy \nthat works?`}
        subText={` What if you could get a well-tailored real estate marketing strategy that generates higher quality clients, increased sales, increased brand awareness, increased customer retention?`}
        image={realEstate_header}
        imageMobile={realEstate_header_mobile}
        logoLight
        getStartedLight
      />
      <Offer
        offerCaption={`Your digital marketing \napproach can go ahead of you \nto speak for what your business \ndoes even before your clients \never decide to contact you!`}
        image={realEstate_offer}
        text={`Let’s get you seen`}
      />
      <Strategy strategyText={`Strategy Process\nImplementation Results`} />
      <Proof
        mainCaption={` Whether you're seeking to \nhelp people buy or sell \nproperties, we can help you \nskyrocket your leads & \nconvert undecided clients into paying clients.`}
        description="MyGSTZone could barely generate more than 60 profitable leads monthly."
        image={leadsGrowth}
      />
      <Review />
      <Process step="We assess where you are with your real estate business" />
      <Figures />
      <Feedback />
      <Brands
        caseStudyText={`See how we increased MyGSTZone’s lead rates by \n900% in one month`}
        caseStudyLink="/mygstzone"
        brand1="ANIKE"
        brand2="HEROSHE"
      />
      <Conclusion
        text={`It's not just about crafting a marketing strategy. It's about \nimplementing a tailored marketing strategy that helps convert high \nquality clients. `}
        subText="It's about closing property sales faster!"
      />
      <Footer />
    </>
  );
};

export default REAL_estate;
