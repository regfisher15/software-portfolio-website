import "./ProjectCard.css";

const ProjectCard = ({ image, title, description, technologies, github, liveDemo }) => {
    return (
        <div className="project-card">
            <div className="project-image">
                <img src={image} alt={`${title} preview`} />
            </div>

            <div className="project-info">
                <h2>{title}</h2>
                <p>{description}</p>

                <div className="project-technologies">
                    {technologies.map((technology, index) => (
                        <span key={index}>{technology}</span>
                    ))}
                </div>

                <div className="project-links">
                    {github && (
                        <a href={github} target="_blank" rel="noreferrer">
                        GitHub
                        </a>
                    )}

                    {liveDemo && (
                        <a href={liveDemo} target="_blank" rel="noreferrer">
                        Live Demo
                        </a>
                    )}
                </div>
            </div>
        </div>
    )
}

export default ProjectCard;