import Card from './Card';
import './Cards.scss';

const Cards = ({data}) => {
    
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