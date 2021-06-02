import {useState} from 'react';
import Button from './Button';
import './Card.scss';

const Card = ({details}) => {

    let [upvotes, setUpvotes] = useState(details.upvotes);    

    const clickHandler = (value) => {        
        setUpvotes(++upvotes);
    }

    return (
        <div className="card">
            <h2 className="card__title">
                {details.title}
            </h2>
            <div className="card__img">                
                    <img src={details.image} />                
            </div>
            <p className="card__details">
                {details.description}
            </p>
            <div className="card__interaction">
                <a className="btn btn--primary" href={details.link} target="_blank">
                    Visit
                </a>
                <Button clickHandler={clickHandler}>
                    {upvotes}
                </Button>
            </div>
        </div>
    )
}

export default Card;