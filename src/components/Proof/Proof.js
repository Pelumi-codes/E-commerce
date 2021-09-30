import "./Proof.css"
import Button from "components/Button/Button";
import Spacer from "components/Spacer";

const Proof = ( {boostText}) => {
    return (
        <div className="proofWrapper  flexRow justifySpaceBetween sectionLarge">
            <div className="leadText container ">
            <h2 className="displayLargeExtraBold leadProof paddingTop ">Proof of what we do</h2>
            <Spacer y={4.8} />
            <div className="miniCard"></div>
            <Spacer y={7.2} />
            <p className="textLarge">
                MyGSTZone could barely generate more than 60 profitable leads
                monthly.
            </p>
            </div>
            <div className="leadButton">
                <p className="boostText displayLargeTextBold" >
                {boostText.split(`\n`).map((text)=> (
                    <span>
                        {text}
                        <br />
                    </span>
                ))}
                </p>
                {/* <Spacer y={4.8} /> */}
                <Button className="button-lead " text="Yes please, I want in!" />
            </div>
        </div>
    );
}



export default Proof;