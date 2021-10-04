import React from "react";
// import "./home.css";
import Button from "./Button/Button";
import DigiIcon from "../Icons/DigiIcon.svg";
import arrows from "../Icons/arrows.svg";
import CardTwo from "../Images/CardTwo.svg";
import cardthree from "../Images/cardthree.svg";
import CardFour from "../Images/CardFour.svg";
import CardFive from "../Images/CardFive.svg";
import CardSix from "../Images/CardSix.svg";
import OrnamentBlue from "../Images/OrnamentBlue.svg";
import OrnamentOrange from "../Images/OrnamentOrange.svg";
import Star from "../Images/Star.svg";
import LogoOne from "../Images/LogoOne.svg";
import LogoTwo from "../Images/LogoTwo.svg";
import LogoThree from "../Images/LogoThree.svg";
import Team from "../Images/Team.svg";
import bullet from "../Images/bullet.svg";
import markbullet from "../Images/markbullet.svg";
import BrandOne from "../Images/BrandOne.svg";
import ReadArrow from "../Images/ReadArrow.svg";
import Line from "../Images/Line.svg";
import Header from "./Header/Header";
import Offer from "./Offer/offer";
import Strategy from "./Strategy/Strategy";
import Proof from "./Proof/Proof";
import Review from "./Review/Review";
import Process from "./Process/Process";
import Figures from "./Figures/Figures";
import Feedback from "./Feedback/Feedback";
import Brands from "./Brands/Brands";
import Conclusion from "./Conclusion";
import Footer from "./Footer";

function Home() {
  return (
    <>
      <Header headerCaption={`Fuel your online\nstore with\nincreased leads`} />
      <Offer
        offerCaption={` We help E-commerce businesses\nand a number of other\nenterprises
      across many sectors\namplify their digital presence,\nget more
      profitable conversions\nand boost their business\nrevenue.`}
      />
      <Strategy strategyText={`Strategy Process\nImplementation Results`} />
      <Proof
        mainCaption={` We can similarly help you boost your leads & convert your undecided prospects into active buyers.`}
      />
      <Review />
      <Process />
      <Figures />
      <Feedback />
      <Brands />
      <Conclusion text="As an online store, making sales isn't just about producing cheaper products or offering competitive prices. What's the point if your target audience can't find them anyway? We can help boost your  brand awareness to rake in sales." />
      <Footer />
    </>
  );
}

export default Home;
