import "./Projects.css";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import OwlImage from "../../assets/owl.jpg";
import SpotifyImage from "../../assets/spotify3.png";
import TVImage from "../../assets/tv-tracker4.png";
import WebglImage from "../../assets/webgl5.png";

const Projects = () => {
    return (
        <section className="projects-page">
            <h1 className="projects-title">Projects</h1>

            <div className="projects-grid">
                <ProjectCard
                    image={OwlImage}
                    title="My First Project"
                    description="A brief description of what this project does."
                    technologies={["React", "JavaScript", "CSS"]}
                    github="https://github.com/"
                    liveDemo="https://example.com"
                />
                <ProjectCard
                    image={SpotifyImage}
                    title="Spotify Wrapped API"
                    description="A Spotify-powered web application that uses the Spotify Web API to let users explore their top tracks and artists across different time ranges."
                    technologies={["React", "JavaScript", "HTML", "CSS"]}
                    github="https://github.com/"
                    liveDemo="https://example.com"
                />
                <ProjectCard
                    image={TVImage}
                    title="TV Tracker"
                    description="A TV tracking web application that lets users discover trending shows, explore personalized recommendations, and manage their watchlists and favorites. Users can also track watched shows, explore streaming availability, and organize their viewing experience."
                    technologies={["Python", "HTML", "CSS", "Django"]}
                    github="https://github.com/"
                    liveDemo="https://example.com"
                />
                <ProjectCard
                    image={WebglImage}
                    title="WebGL 3D Projects"
                    description="7 programs that display 2D and 3D objects through the use of webgl"
                    technologies={["HTML", "CSS", "Javascript", "WebGL"]}
                    github="https://github.com/"
                    liveDemo="https://example.com"
                />
            </div>
        </section>
    );
}

export default Projects;