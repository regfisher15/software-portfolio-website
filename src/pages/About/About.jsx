import './About.css';
import InfoCard from '../../components/InfoCard/InfoCard.jsx';
import {
  GraduationCap,
  School,
  Mail,
  MapPin,
} from "lucide-react";

const About = () => {
    return (
        <section className="about-page">
        <h1 className="about-title">About Me</h1>

        <div className="about-section">
            <div className="about-left">
            <div className="profile-pic">
                Testing
            </div>
            </div>

            <div className="about-right">
            <div className="right-content-container">
                <h2>Hi, I'm Reggie</h2>

                <p>
                I'm a Software Developer focused on modern
                web technologies and application development.
                I enjoy building things, solving problems, and
                learning how technology can turn ideas into
                useful experiences.
                </p>

                <div className="info-fields">
                    <InfoCard
                        icon={GraduationCap}
                        title="Degree"
                        value="Computer Science"
                    />

                    <InfoCard
                        icon={School}
                        title="University"
                        value="Your University"
                    />

                    <InfoCard
                        icon={Mail}
                        title="Email"
                        value="you@example.com"
                    />

                    <InfoCard
                        icon={MapPin}
                        title="Location"
                        value="United States"
                    />
                </div>
            </div>
            </div>
        </div>
        </section>
    );
}

export default About;