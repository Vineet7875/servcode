import React, { useState } from "react";
const Home = () => {
    const [showdescrption,setshowdescription]=useState(false)
    const Event=()=>{
        setshowdescription(true)
        console.log("vineet")
    }
    const Content="We offer a range of services to help businesses,startups and individuals succed online,including ads design,post design,landing page/product page,website creation,Video ads and social media management"
    return (<>
        <div id="Home" className="Home">
            <div className="intro">
                <div>
                    <p> Stand out online with professional graphics,landing pages,social media posts and much more...</p>
                </div>
                <div className="social_media">
                    {showdescrption ? <p id="content">{Content}</p>:<button onClick={Event} className="btn">Learn More</button>}
                </div>
            </div>
        </div>
    </>)
}
export default Home