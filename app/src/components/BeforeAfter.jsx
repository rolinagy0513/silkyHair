import before1 from "../assets/before1.png";
import after1 from "../assets/after1.png";
import before2 from "../assets/before2.png";
import after2 from "../assets/after2.png";
import before3 from "../assets/before3.png";
import after3 from "../assets/after3.png";

import "./styles/BeforeAfter.css"

const BeforeAfter = () =>{

    return(
        <section id="before-after" className="before-after-section">
            <h2>Pred a Po</h2>

            <div className="before-after-row">
                <h3>Clip Top</h3>
                <div className="before-after-grid">
                    <div className="ba-image-container">
                        <div className="ba-image">
                            <img src={before1} alt="before1"/>
                        </div>
                        <p>Pred</p>
                    </div>
                    <div className="ba-image-container">
                        <div className="ba-image">
                            <img src={after1} alt="after1"/>
                        </div>
                        <p>Po</p>
                    </div>
                </div>
            </div>

            <div className="before-after-row">
                <h3>Clip Top</h3>
                <div className="before-after-grid">
                    <div className="ba-image-container">
                        <div className="ba-image">
                            <img src={before2} alt="before2"/>
                        </div>
                        <p>Pred</p>
                    </div>
                    <div className="ba-image-container">
                        <div className="ba-image">
                            <img src={after2} alt="after1"/>
                        </div>
                        <p>Po</p>
                    </div>
                </div>
            </div>


            <div className="before-after-row">
                <h3>Clip Top</h3>
                <div className="before-after-grid">
                    <div className="ba-image-container">
                        <div className="ba-image">
                            <img src={before3} alt="before3"/>
                        </div>
                        <p>Pred</p>
                    </div>
                    <div className="ba-image-container">
                        <div className="ba-image">
                            <img src={after3} alt="after1"/>
                        </div>
                        <p>Po</p>
                    </div>
                </div>
            </div>

        </section>
    )

}

export default BeforeAfter;