import './Landing.css'
import Card from "../../global/com/Card.jsx";
import Excerpt from "./com/Excerpt.jsx";
import {Eph6, V13_17} from "../../global/data/excerpts/ephesians6.13-17.js";


export default function Landing() {
    return (
        <div className="landing">
            <div className="landingTop">
                <div className="landingTopLeft">
                    <p className="title">
                        E-Vangelium
                        <span className="subtitle">
                            Coming Soon
                        </span>
                        <br />
                        <br />
                    </p>
                    <Card
                        className="excerptContainer"
                    >
                        <Excerpt
                            title={Eph6}
                            excerpt={V13_17}
                            inline={true}
                        />
                    </Card>
                </div>
                <div>
                    <img
                        className="paxLogo"
                        src="./pax.png"
                        alt="Image"
                    />
                </div>
            </div>
        </div>
    )
}