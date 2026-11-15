import "./SkillIcon.css";

const SkillIcon = ({ icon: Icon, name }) => {
  return (
    <div className="skill-icon-container">
      <Icon className="skill-icon" />
      <p>{name}</p>
    </div>
  );
};

export default SkillIcon;