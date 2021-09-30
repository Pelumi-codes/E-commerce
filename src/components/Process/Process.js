import Star from "Images/Star.svg";
import Team from "Images/Team.svg";
import bullet from "Images/bullet.svg";
import markbullet from "Images/markbullet.svg"
import Button from "components/Button/Button";
import Spacer from "components/Spacer";
import "./Process.css";


const Process = () => {
    return (
    <div className="processWrapper container ">
        <h1 className="teamProcess displayLargeExtraBold ">Our Process</h1>
        <div className="serviceProcess flexRow justifySpaceBetween ">
          <div className="team-work-img flexRow justifyCenter">
            <img src={Team} alt="Team work" className="team" />
          </div>
          {/* <div className="team-work-mark">
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
          </div> */}
          
          <div className="teamWork">
            <div className="team-work-list flexRow">
              <div>
                <img src={bullet} alt="Logo" width="20rem" height="20rem" />
              </div>
              <div className="">
                <p className="bullet-list displayTextSmallBold">
                  You get on a totally free consultation call with us
                </p>
              </div>
            </div>
            <div className=" team-work-list flexRow">
              <div>
                <img src={bullet} alt="Logo" width="20rem" height="20rem" />
              </div>
              <div className="">
                <p className="bullet-list displayTextSmallBold">
                  We provide general recommendations 
                </p>
              </div>
            </div>
            <div className="team-work-list flexRow">
              <div>
                <img src={bullet} alt="Logo" width="20rem" height="20rem" />
              </div>
              <div className="">
                <p className="bullet-list displayTextSmallBold">
                  We assess where you are with your business 
                </p>
              </div>
            </div>
            <div className="team-work-list flexRow">
              <div>
                <img src={bullet} alt="Logo" width="20rem" height="20rem" />
              </div>
              <div className="">
                <p className="bullet-list displayTextSmallBold">
                  We further collaborate to design and map out a bespoke marketing strategy to skyrocket your ROI.
                </p>
              </div>
            </div>
            <div className="team-work-list flexRow">
              <div>
                <img src={bullet} alt="Logo" width="20rem" height="20rem" />
              </div>
              <div className="">
                <p className="bullet-list displayTextSmallBold">
                  We implement our strategy
                </p>
              </div>
            </div>
            <div className="team-work-list flexRow">
              <div>
                <img src={bullet} alt="Logo" width="20rem" height="20rem" />
              </div>
              <div className="">
                <p className="bullet-list displayTextSmallBold">
                  We test our strategy 
                </p>
              </div>
            </div>
            <div className="team-work-list flexRow">
              <div>
                <img src={bullet} alt="Logo" width="20rem" height="20rem" />
              </div>
              <div className="">
                <p className="bullet-list displayTextSmallBold">
                    We continuously iterate & further improve on what works. 
                </p>
              </div>
            </div>
            <div className="team-work-list flexRow">
              <div>
                <img src={bullet} alt="Logo" width="20rem" height="20rem" />
              </div>
              <div className="">
                <p className="bullet-list displayTextSmallBold">
                  We deliver you monthly/weekly reports (or whatever frequency you prefer)
                </p>
              </div>
            </div>
            <div className="team-work-list flexRow">
              <div>
                <img src={bullet} alt="Logo" width="20rem" height="20rem" />
              </div>
              <div className="">
                <p className="bullet-list displayTextSmallBold">
                  We monitor all results
                </p>
              </div>
            </div>
            <Spacer y={5.2} />
            <Button className="button-bullet" text="Get Started" big white />
          </div>
        </div>
    </div>
    );
}


export default Process;