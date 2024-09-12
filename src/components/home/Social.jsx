import React from "react";
import { FiTwitter, FiGithub, FiLinkedin} from "react-icons/fi";

const Social = () => {
    return (
        <div className="home__social">
            <a href="https://twitter.com/Chephyty_Soumya" className="home__social-icon" target="_blank" rel="noreferrer">
                <FiTwitter />
            </a>
            <a href="https://www.github.com/CHEPHYTY" className="home__social-icon" target="_blank" rel="noreferrer">
                <FiGithub />
            </a>
            <a href="https://www.linkedin.com/in/soumya-ranjan-hembram-87797a22b/" className="home__social-icon" target="_blank" rel="noreferrer">
                <FiLinkedin />
            </a>
        </div> 
    ); 
}

export default Social;