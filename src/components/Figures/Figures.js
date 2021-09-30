import Spacer from "components/Spacer";
import "./Figures.css";


const Figures = () => {
    return (
        <div className="figureWrapper container">
            <div className="textFig gridColumn ">
                <div className="text-center-fig ">
                    <h1 className="figures-sign textExtraBold">189,000+</h1>
                    <h4 className="text-figure textSmallFontMedium" >connections</h4>
                </div>
                <div className="text-center-fig">
                    <h1 className="figures-sign textExtraBold">11,323,000+</h1>
                    <h4 className="text-figure textSmallFontMedium">connections</h4>
                </div>
                <div className="text-center-fig">
                    <h1 className="figures-sign textExtraBold">5+</h1>
                    <h4 className="text-figure textSmallFontMedium">connections</h4>
                </div>
            </div>
            <Spacer y={13.6} />
            <div className="textFig gridColumn ">
                <div className="text-center-fig ">
                    <h1 className="figures-sign textExtraBold">112,000+</h1>
                    <h4 className="text-figure textSmallFontMedium">Manhours</h4>
                </div>
                <div className="text-center-fig">
                    <h1 className="figures-sign textExtraBold">1,817,400+</h1>
                    <h4 className="text-figure textSmallFontMedium">connections</h4>
                </div>
                <div className="text-center-fig">
                    <h1 className="figures-sign textExtraBold">22+</h1>
                    <h4 className="text-figure textSmallFontMedium">connections</h4>
                </div>
            </div> 
            
        </div>
    );
}



export default Figures;