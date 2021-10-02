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

      {/* <section className="text-section">
        <img src={OrnamentBlue} alt="Animation" className="blue-ornament" />
        <img src={OrnamentOrange} alt="Animation" className="orange-ornament" />
        <div className="text-arrow">
          <h1 className="text-body-section">
            Strategy Process Implementation Results
          </h1>
          <div className="arrow-image">
            <img src={arrows} alt="Arrows" ClassName="arrows" />
          </div>
        </div>
        <p className="digital-text">
          Digital marketing backed with real results.
        </p>
        <div className="blue-card">
          <img src={cardthree} alt="A laptop" className="img-blue-card" />
          <h2 className="blue-card-label">Marketing Strategy</h2>
          <h6 className="blue-card-text">
            Competitive positioning and digital presence analysis
          </h6>
          <h6 className="blue-card-text">
            Interview with Sales People and Customers
          </h6>
          <h6 className="blue-card-text">Buyer Persona Analysis</h6>
          <h6 className="blue-card-text">Social Media Audit</h6>
          <h6 className="blue-card-text">Digital Marketing Audit</h6>
        </div>
        <div className="arrow-images">
          <img src={arrows} alt="Arrows" ClassName="arrows" />
        </div>
        <div className="images-text">
          <div className="pic-card-text">
            <div className="box-shadow">
              <img src={cardthree} alt="A laptop" className="img-card" />
              <p className="card-label">Marketing Strategy</p>
            </div>
          </div>
          <div className="blue-card"></div>
          <div className="pic-card-text">
            <div className="box-shadow">
              <img src={CardFour} alt="A laptop" className="img-card" />
              <p className="card-label">Account Based Marketing</p>
            </div>
          </div>
          <div className="pic-card-text">
            <div className="box-shadow">
              <img src={CardFive} alt="A laptop" className="img-card" />
              <p className="card-label">Website Development</p>
            </div>
          </div>
          <div className="pic-card-text">
            <div className="box-shadow">
              <img src={CardFour} alt="A laptop" className="img-card" />
              <p className="card-label">content Marketing</p>
            </div>
          </div>
        </div>
      </section> */}
      {/* <div className="lead-text-button ">
        <div className="text-lead">
          <h2 className="text-mini">Proof of what we do</h2>
          <div className="card mini-card"></div>
          <p className="lead-paragraph">
            MyGSTZone could barely generate more than 60 profitable leads
            monthly.
          </p>
        </div>
        <div className="lead-button">
          <p className="lead-text">
            We can similarly help you boost your leads and convert your
            undecided prospects into active buyers.
          </p>
          <Button className="button-lead" text="Yes please, I want in!" />
        </div>
      </div> */}
      {/* <div className="lead-butn">
        <p className="ld-text">
          We can similarly help you boost your leads and convert your undecided
          prospects into active buyers.
        </p>
        <Button className="butn-lead" text="Yes please, I want in!" />
      </div> */}
      {/* <div className="container-reviews">
        <p className="review-paragraph">
          Businesses and clients who trusted us to skyrocket their metrics
        </p> */}
      {/* <div className="reviews-ratings">
          <div className="five-stars">
            <div className="logo-review">
              <div>
                <img src={LogoOne} alt="Logo" width="30rem" height="30rem" />
              </div>
              <div className="">
                <h5 className="review-names">Opaleye, CEO at Opak Homes</h5>
              </div>
            </div>
            <img src={Star} alt="five stars" className="stars" />
            <p className="paragraph-review">
              "Digifigs delivered a full-scale and comprehensive service that
              set us on track for the Nigerian market. From brand identity
              development and logo design to a brochure which captured our brand
              in its entirety to a social media strategy that helped us grow an
              impressive community of real estate enthusiasts, we have grown
              from a new name in the industry to a resounding participant in the
              affordable housing solution sector."
            </p>
          </div>

          <div className="five-stars">
            <div className="logo-review">
              <div>
                <img src={LogoTwo} alt="Logo" width="30rem" height="30rem" />
              </div>
              <div className="">
                <h5 className="review-names">Ragunathan, CEO at MyGSTZone</h5>
              </div>
            </div>
            <img src={Star} alt="five stars" className="stars" />
            <p className="paragraph-review">
              "Digifigs delivered a full-scale and comprehensive service that
              set us on track for the Nigerian market. From brand identity
              development and logo design to a brochure which captured our brand
              in its entirety to a social media strategy that helped us grow an
              impressive community of real estate enthusiasts, we have grown
              from a new name in the industry to a resounding participant in the
              affordable housing solution sector."
            </p>
          </div>
          <div className="five-stars">
            <div className="logo-review">
              <div>
                <img src={LogoThree} alt="Logo" width="30rem" height="30rem" />
              </div>
              <div className="">
                <h5 className="review-names">Alexander, CEO at Weck Autos</h5>
              </div>
            </div>
            <img src={Star} alt="five stars" className="stars" />
            <p className="paragraph-review">
              "Digifigs delivered a full-scale and comprehensive service that
              set us on track for the Nigerian market. From brand identity
              development and logo design to a brochure which captured our brand
              in its entirety to a social media strategy that helped us grow an
              impressive community of real estate enthusiasts, we have grown
              from a new name in the industry to a resounding participant in the
              affordable housing solution sector."
            </p>
          </div>
        </div> */}
      {/* </div> */}
      {/* <div className="team-services"> */}
      {/* <h1 className="team-process">Our Process</h1> */}
      {/* <div className="service-process">
          <div className="team-work-img">
            <img src={Team} alt="Team work" className="team" />
          </div>
          <div className="team-work-mark">
            <div className="team-work-list-mark">
              <div>
                <img src={markbullet} alt="Logo" width="20rem" height="20rem" />
              </div>
              <div className="">
                <p className="bullet-list-mark">
                  You get on a totally free consultation call with us
                </p>
              </div>
            </div>
          </div>
          <div className="team-work-list-mark">
            <div>
              <img src={markbullet} alt="Logo" width="20rem" height="20rem" />
            </div>
            <div className="">
              <p className="bullet-list-mark">
                You get on a totally free consultation call with us
              </p>
            </div>
          </div>
          <div className="team-work-list-mark">
            <div>
              <img src={markbullet} alt="Logo" width="20rem" height="20rem" />
            </div>
            <div className="">
              <p className="bullet-list-mark">
                You get on a totally free consultation call with us
              </p>
            </div>
          </div>
          <div className="team-work-list-mark">
            <div>
              <img src={markbullet} alt="Logo" width="20rem" height="20rem" />
            </div>
            <div className="">
              <p className="bullet-list-mark">
                You get on a totally free consultation call with us
              </p>
            </div>
          </div>
          <div className="team-work-list-mark">
            <div>
              <img src={markbullet} alt="Logo" width="20rem" height="20rem" />
            </div>
            <div className="">
              <p className="bullet-list-mark">
                You get on a totally free consultation call with us
              </p>
            </div>
          </div>
          <div className="button-bullet-mark">
            <Button
              className="button-bullet-mark"
              text="Get Started"
              big
              white
            />
          </div>
          <div className="team-work">
            <div className="team-work-list">
              <div>
                <img src={bullet} alt="Logo" width="20rem" height="20rem" />
              </div>
              <div className="">
                <p className="bullet-list">
                  You get on a totally free consultation call with us
                </p>
              </div>
            </div>
            <div className=" team-work-list">
              <div>
                <img src={bullet} alt="Logo" width="20rem" height="20rem" />
              </div>
              <div className="">
                <p className="bullet-list">
                  You get on a totally free consultation call with us
                </p>
              </div>
            </div>
            <div className="team-work-list">
              <div>
                <img src={bullet} alt="Logo" width="20rem" height="20rem" />
              </div>
              <div className="">
                <p className="bullet-list">
                  You get on a totally free consultation call with us
                </p>
              </div>
            </div>
            <div className="team-work-list">
              <div>
                <img src={bullet} alt="Logo" width="20rem" height="20rem" />
              </div>
              <div className="">
                <p className="bullet-list">
                  You get on a totally free consultation call with us
                </p>
              </div>
            </div>
            <div className="team-work-list">
              <div>
                <img src={bullet} alt="Logo" width="20rem" height="20rem" />
              </div>
              <div className="">
                <p className="bullet-list">
                  You get on a totally free consultation call with us
                </p>
              </div>
            </div>
            <div className="team-work-list">
              <div>
                <img src={bullet} alt="Logo" width="20rem" height="20rem" />
              </div>
              <div className="">
                <p className="bullet-list">
                  You get on a totally free consultation call with us
                </p>
              </div>
            </div>
            <div className="team-work-list">
              <div>
                <img src={bullet} alt="Logo" width="20rem" height="20rem" />
              </div>
              <div className="">
                <p className="bullet-list">
                  You get on a totally free consultation call with us
                </p>
              </div>
            </div>
            <div className="team-work-list">
              <div>
                <img src={bullet} alt="Logo" width="20rem" height="20rem" />
              </div>
              <div className="">
                <p className="bullet-list">
                  You get on a totally free consultation call with us
                </p>
              </div>
            </div>
            <Button className="button-bullet" text="Get Started" big white />
          </div>
        </div> */}
      {/* </div> */}
      {/* <div className="container-figures">
        <div className="text-fig">
          <div className="text-center-fig">
            <h1 className="figures-sign">189,000+</h1>
            <h4 className="text-figure">connections</h4>
          </div>
          <div className="text-center-fig">
            <h1 className="figures-sign">289,000+</h1>
            <h4 className="text-figure">connections</h4>
          </div>
          <div className="text-center-fig">
            <h1 className="figures-sign">5+</h1>
            <h4 className="text-figure">connections</h4>
          </div>
        </div>
        <div className="text-fig">
          <div className="text-center-fig">
            <h1 className="figures-sign">567,000+</h1>
            <h4 className="text-figure">connections</h4>
          </div>
          <div className="text-center-fig">
            <h1 className="figures-sign">289,000+</h1>
            <h4 className="text-figure">connections</h4>
          </div>
          <div className="text-center-fig">
            <h1 className="figures-sign">1700+</h1>
            <h4 className="text-figure">connections</h4>
          </div>
        </div>
      </div> */}
      {/* <div className="container-logo">
        <p className="text-pg">
          We've scored amazing marketing results for a number of brands across
          different industries in 4 different continents
        </p>

        <div className="logos">
          <div className="col">
            <img src={BrandOne} alt="logo" />
          </div>
          <div className="col">
            <img src={BrandOne} alt="logo" />
          </div>
          <div className="col">
            <img src={BrandOne} alt="logo" />
          </div>
          <div className="col">
            <img src={BrandOne} alt="logo" />
          </div>
        </div>
      </div>
      <div className="container-logo-mini">
        <p className="text-pg-mini">
          We've scored amazing marketing results for a number of brands across
          different industries in 4 different continents
        </p>
        <div className="brd-lg">
          <div className="col">
            <img src={BrandOne} alt="logo" className="brd-lg" />
          </div>
          <div className="col">
            <img src={BrandOne} alt="logo" className="brd-lg" />
          </div>
          <div className="col">
            <img src={BrandOne} alt="logo" className="brd-lg" />
          </div>
        </div>
      </div> */}
      {/* <div className="container-percentage">
        <p className="paragraph-percent">
          See how we boosted Heroshe’s (a US-to-Nigeria shipping company) web
          traffic by 1348%
        </p>
        <div className="read-arrow">
          <h5 className="read-percent">Read more</h5>
          <img src={ReadArrow} alt="Arrow sign" className="read-percent" />
        </div>
        <img src={Line} alt="line" className="Line" />
        <div className="row-blue-pink">
          <div className="card min-btn">
            <div className="mini-para-btn">
              <div className="card card-brand">
                <h2 className="brand-card">MYGSTZone</h2>
              </div>
              <p className="increase-paragraph">
                900% increase in expected leads
              </p>
              <Button className="button-bullet" text="Read More" big white />
            </div>
          </div>
          <div className="card min-btn-pink">
            <div className="mini-para-btn">
              <div className="card card-brand">
                <h2 className="brand-card">ANIKEBRAND</h2>
              </div>
              <p className="increase-paragraph-pink">
                600% increase in expected leads
              </p>
              <Button className="button-bullet" text="Read More" big white />
            </div>
          </div>
        </div>
      </div> */}
      <div className="container-row-base">
        <div className="text-center-btn">
          <p className="base-text">
            As an online store, making sales isn't just about producing cheaper
            products or offering competitive prices. What's the point if your
            target audience can't find them anyway? We can help boost your brand
            awareness to rake in sales.
          </p>
          <div class="text-center">
            <Button className="button-base" text="Contact us" white big />
          </div>
        </div>
      </div>
      <footer className="contact-handles">
        <div className="brand-handles">
          <div className="footer-handles-mini">
            <div className="col-md-">
              <h5 className="handle-mini">Facebook</h5>
            </div>
            <div className="col-md">
              <h5 className="handle-mini">instagram</h5>
            </div>
            <div className="col-md">
              <h5 className="handle-mini">twitter</h5>
            </div>
            <div className="col-md">
              <h5 className="handle-mini">LinkedIn</h5>
            </div>
          </div>
          <div className="footer-paragraph">
            © 2021 - Digifigs Limited | All Rights Reserved
          </div>
          <div className="footer-handles">
            <div className="col-md">
              <h5 className="handle">Facebook</h5>
            </div>
            <div className="col-md">
              <h5 className="handle">instagram</h5>
            </div>
            <div className="col-md">
              <h5 className="handle">twitter</h5>
            </div>
            <div className="col-md">
              <h5 className="handle">LinkedIn</h5>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Home;
