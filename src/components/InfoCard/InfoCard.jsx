import './InfoCard.css';

const InfoCard = ({ icon: Icon, title, value }) => {
    return (
        <div className="info-card-container">
            <div className="card-icon">
                <Icon size={28} strokeWidth={1.5} />
            </div>

            <div className="card-info">
                <h3>{title}</h3>
                <p>{value}</p>
            </div>
        </div>
    )
}

export default InfoCard;