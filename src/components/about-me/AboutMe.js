import React from "react";
import "./AboutMe.css"
import SocialContact from "./SocialContact";
import { Player } from "@lottiefiles/react-lottie-player";
import profileAnimation from "../../assets/animations/profile-animation.json";

function AboutMe() {
    return (
        <section className="about" id="about">
            <Player src={profileAnimation}
                className="player"
                id="profile-player"
                loop
                autoplay />
            <div className="profile">
                <div className="about-info">
                    <p>Hi, I am
                    <br /><span className="info-name">Linh Tran</span>
                    <br /><span className="job-title">Software Engineer</span>
                    <br />Creative, determined, highly adaptable person. Having an excellent learning attitude as well as a great passion for discovering new things. A natural problem solver who would never give up until the problem is solved.</p>
                </div>
                <a href="https://drive.google.com/file/d/1EK_sqtE5AUIuUmxmERQZ24nwU3zfBusl/view?usp=sharing"><button className="resume-button">Resume</button></a>
                <SocialContact />        
            </div>
        </section>
    );
}

export default AboutMe;