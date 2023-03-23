import React from "react";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import "./ContactMe.css";
import { Player } from "@lottiefiles/react-lottie-player";
import contactAnimation from "../../assets/animations/contact-animation.json";
import mailAnimation from "../../assets/animations/mail-animation.json";
import Feedback from "./Feedback";
import nameIcon from "../../assets/images/name.svg";
import emailIcon from "../../assets/images/email.svg";
import phoneIcon from "../../assets/images/phone.svg";
import messageIcon from "../../assets/images/message.svg";

function ContactMe() {

    const [showFb, setShowFb] = useState(false);

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm("service_406ex3n", "template_jn3sjca", form.current, "AwPjRfvwuG3Nvz2Cu")
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset();
        setShowFb(true);
    };

    return (
        <section className="contact-me" id="contact">
            <h2 className="section-title">Contact Me</h2>
            <div className="contact-container">
                <div className="animation-container">
                    <Player src={mailAnimation}
                        className="player"
                        id="mail-player"
                        loop
                        autoplay />
                    <Player src={contactAnimation}
                        className="player"
                        id="contact-player"
                        loop
                        autoplay 
                        speed={0.8} />
                </div>
                <form ref={form} onSubmit={sendEmail}>
                    <p><label htmlFor="name-input">
                        <img src={nameIcon} alt="NameIcon" className="form-icon" />Name
                        <input className="text-input"
                        id="name-input" 
                        name="name"
                        type="text"
                        placeholder="Your name"
                        onInvalid={e => e.target.setCustomValidity("Please enter your name here")}
                        onInput={e => e.target.setCustomValidity("")}
                        required />
                    </label></p>
                    <p><label htmlFor="email-input">
                        <img src={emailIcon} alt="EmailIcon" className="form-icon" />Email
                        <input className="text-input"
                        id="email-input" 
                        name="email"
                        type="email"
                        pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                        placeholder="email@domain.name"
                        onInvalid={e => e.target.setCustomValidity("Please enter valid email address, ie. email@domain.name")}
                        onInput={e => e.target.setCustomValidity("")}
                        required />
                    </label></p>
                    <p><label htmlFor="phone-input">
                        <img src={phoneIcon} alt="PhoneIcon" className="form-icon" />Phone (optional)
                        <input className="text-input"
                        id="phone-input" 
                        name="phone"
                        type="tel"
                        pattern="[0-9]+"
                        onInvalid={e => e.target.setCustomValidity("Please enter numbers only, ie. 0123456789")}
                        onInput={e => e.target.setCustomValidity("")}
                        placeholder="0123456789" />
                    </label></p>
                    <p><label>
                        <img src={messageIcon} alt="MessageIcon" className="form-icon" />Message
                        <textarea className="message-box"
                        name="message"
                        id="message-area"
                        placeholder="Anything you would like to discuss with me?"
                        onInvalid={e => e.target.setCustomValidity("Please type your message here")}
                        onInput={e => e.target.setCustomValidity("")}
                        required />
                    </label></p>
                    <p><input type="submit" value="Send" /></p>
                </form>
            </div>
            { showFb && <Feedback setShowFb={setShowFb} /> }
        </section>
    );
}

export default ContactMe;