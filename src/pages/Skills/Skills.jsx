import './Skills.css';
import SkillIcon from "../../components/SkillIcon/SkillIcon.jsx";
import {
  SiReact,
  SiJavascript,
  SiHtml5,
//   SiCss3,
  SiPython,
  SiGit,
  SiGithub,
  SiNodedotjs,
} from "react-icons/si";

const Skills = () => {
    return (
        <section className="skills-page">
            <h1 className="skills-title">Skills</h1>

            <div className="skills-content">
                <div className="skills-category">
                    <h2>Languages</h2>
                    <div className="skills-grid">
                        {/* Language icons go here */}
                        <SkillIcon icon={SiReact} name="React" />
                        <SkillIcon icon={SiJavascript} name="JavaScript" />
                        <SkillIcon icon={SiHtml5} name="HTML5" />
                        <SkillIcon icon={SiPython} name="CSS3" />
                    </div>
                </div>

                <div className="skills-category">
                    <h2>Frameworks</h2>
                    <div className="skills-grid">
                        {/* Framework icons go here */}
                        <SkillIcon icon={SiReact} name="React" />
                        <SkillIcon icon={SiJavascript} name="JavaScript" />
                        <SkillIcon icon={SiHtml5} name="HTML5" />
                        <SkillIcon icon={SiPython} name="CSS3" />
                    </div>
                </div>

                <div className="skills-category">
                    <h2>Databases</h2>
                    <div className="skills-grid">
                        {/* Database icons go here */}
                        <SkillIcon icon={SiReact} name="React" />
                        <SkillIcon icon={SiJavascript} name="JavaScript" />
                        <SkillIcon icon={SiHtml5} name="HTML5" />
                        <SkillIcon icon={SiPython} name="CSS3" />
                    </div>
                </div>

            </div>

            {/* <div className="skills-grid">
                <SkillIcon icon={SiReact} name="React" />
                <SkillIcon icon={SiJavascript} name="JavaScript" />
                <SkillIcon icon={SiHtml5} name="HTML5" />
                <SkillIcon icon={SiPython} name="CSS3" />
                <SkillIcon icon={SiPython} name="CSS3" />
                <SkillIcon icon={SiPython} name="CSS3" />
                <SkillIcon icon={SiPython} name="CSS3" />
                <SkillIcon icon={SiPython} name="CSS3" />
            </div> */}
        </section>
    );
}

export default Skills;