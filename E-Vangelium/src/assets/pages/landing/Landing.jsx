import './Landing.css'
import Card from "../../global/com/Card.jsx";
import Excerpt from "../../global/com/Excerpt.jsx";
import { Isa52, V7 } from "../../global/data/verses/isaiah52_7.js";


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
                    </p>
                    <Excerpt
                        title={Isa52}
                        excerpt={V7}
                        inline={true}
                    />
                </div>
                <div>
                    <img
                        className="paxLogo"
                        src="./pax.png"
                        alt="Pax Evangelium"/>
                </div>
            </div>
        </div>
    )
}