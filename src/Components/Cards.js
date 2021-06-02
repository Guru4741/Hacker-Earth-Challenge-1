import Card from './Card';
import data from './data';
import './Cards.scss';

const Cards = () => {
    
    const renderCards = data.map((each, i) => {
        return <Card key={i} details={each} />
    })

    return (
        <div className="container">
            {renderCards}
        </div>
    )
}

export default Cards;