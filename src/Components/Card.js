import './Card.css';

const Card = () => {
    return (
        <div className="card">
            <h2 className="card__title">
                Card Title
            </h2>
            <div className="card__img">
                <a href="#">
                    <img src="https://wallpaperaccess.com/full/1493647.jpg" />
                </a>
            </div>
            <p className="card__details">
                Card Description
            </p>
            <div className="card__interaction">
                <button className="btn">
                    Upvote
                </button>
                <span className="votes">0</span>
            </div>
        </div>
    )
}

export default Card;