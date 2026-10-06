import './Home.css'
// import GradientText from "../animations/GradientText.jsx";
import GradientText from '../Animations/GradientText';

const Home = () => {
    return (
        <div className="about-section">
            <div className="about-left">
                <h1>
                    <GradientText>
                        Reggie Fisher Jr.
                    </GradientText>
                </h1>
                <h2>Software Developer</h2>
                <p>Software Developer focused on modern web technologies, application development, and innovative solutions.</p>

                <div className="social-media-row">
                    <a
                        className="social-media-links"
                        href="https://www.tiktok.com/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img src="/tiktok.svg" alt="TikTok" />
                    </a>

                    <a
                        className="social-media-links"
                        href="https://github.com/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img src="/github.svg" alt="GitHub" />
                    </a>

                    <a
                        className="social-media-links"
                        href="https://www.linkedin.com/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img src="/linkedin-logo.svg" alt="LinkedIn" />
                    </a>

                    <a
                        className="social-media-links"
                        href="https://www.instagram.com/"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img src="/instagram.svg" alt="Instagram" />
                    </a>
                </div>
            </div>

            <div className="about-right">
                <h1>About Right</h1>
                <img src="/computer-animation.svg" alt="computer animation" />
            </div>
        </div>
    )
}

export default Home;