import React from "react";
import "./Works.css"
const Works = () => {
    // var mail="vineet.jadhav7875@gmail.com"
    return (<>
        <div id="work" className="Works1">
            <h1 id="Work">Our Works</h1>
            <div className="Works2">
                <div id="html" className="cardwo" data-aos="fade-up">

                </div>
                <div id="css" className="cardwo" data-aos="fade-up">

                </div>
                <div id="javascript" className="cardwo" data-aos="fade-up">

                </div>
                <div id="react" className="cardwo" data-aos="fade-up">

                </div>
                <div id="php" className="cardwo" data-aos="fade-up">

                </div>
                <div id="python" className="cardwo" data-aos="fade-up">

                </div>
                <div id="sql" className="cardwo" data-aos="fade-up">

                </div>
            </div>
            <div id="Contact">
                <div className="dis" data-aos="fade-up">
                    <span>Ready to work with us?</span>
                    <span>Contact us today to learn more about how we can help you succed online</span>
                </div>
                <div className="buttons" data-aos="fade-up">
                <button className="btn" onClick={() => window.location.href='https://wa.me/918805636883?text=Hello%20there!'}>WhatsApp</button>
                    <a href=""><button className="btn">Linkdin</button></a>
                    <button className="btn" onClick={() => window.location.href='mailto:vineet.jadhav7875@gmail.com'}>Mail</button>
                </div>
            </div>
        </div>
    </>)
}
export default Works