import React from "react";

const Team = () => {
    const Event = () => {
        alert("Page under maintenance")
    }
    return (<>
        <div id="ski" className="Team1">
            <h1 id="Team">Our Team</h1>
            <div className="Team2" >

                <div className="card" data-aos="fade-up">
                    <div className="img"></div>
                    <h3>Harsh kumar</h3>
                    <span>Founder,CEO</span>
                    <a href="https://www.linkedin.com/in/harsh-kumar-13496925a/"><img className="link" src="linkdin.png" /></a>
                </div>
                <div className="card" data-aos="fade-up">
                    <div className="img"></div>
                    <h3>Vineet Jadhav</h3>
                    <span>CTO</span>
                    <a href="https://www.linkedin.com/in/vineet-jadhav-577a531b4/"><img className="link" src="linkdin.png" /></a>
                </div>
                <div className="card" data-aos="fade-up">
                    <div className="img"></div>
                    <h3>Kamal Jeet</h3>
                    <span>COO</span>
                    <a href=""><img className="link" src="linkdin.png" /></a>
                </div>
            </div>
            <div><button id="btnabo" onClick={Event} className="btn1">About us</button>
                </div>
        </div>
    </>)
}
export default Team