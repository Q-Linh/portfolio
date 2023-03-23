import React from "react";

function SocialContact() {
    const data = require("./SocialData.json");
    return (
        <div className="social-contact">
            {
                data.map((platform) => {
                    return (
                        <div className="icon-container" key={platform.name}>
                            <a href={platform.url}><img src={platform.icon} alt={platform.name} className="social-icon"/></a>
                        </div>
                    );
                })
            }
        </div>
    );
}

export default SocialContact;