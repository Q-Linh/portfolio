import React from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import sendAnimation from "../../assets/animations/send-animation.json";
import closeButton from "../../assets/images/close-button.svg";

function Feedback({ setShowFb }) {
    return (
        <div className="darkBG" onClick={() => setShowFb(false)}>
            <div className="feedback-container">
                <div className="close-button">
                    <img src={closeButton} alt="CloseButton" className="close-img" onClick={() => setShowFb(false)}/>
                </div>
                <Player src={sendAnimation}
                    className="player"
                    id="send-player"
                    loop
                    autoplay />
                <p className="feedback">Your message has been sent. I will be in contact with you soon. Thanks!</p>
            </div>
        </div>
    );
}

export default Feedback;