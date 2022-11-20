import DishCard from '../DishCard/DishCard';
import Vector from '../../../assets/vector.svg';
import './DishsCards.css';

const DishsCards = () => {
    return (
        <>
            <div className="restaurant_cards_container">
                <div className="restaurant_cards_title">popular restaurant in epicure:</div>
                <div className='restaurant_cards'>
                    <DishCard />
                    <DishCard />
                    <DishCard />
                    <DishCard />
                    <DishCard />
                    <DishCard />
                    <DishCard />
                    <DishCard />
                    <DishCard />
                    <DishCard />
                    <DishCard />
                </div>
                <div className='all_cards_button'>
                    All Restaurants<div className='all_cards_vector'><img src={Vector} /></div>
                </div>
            </div>
        </>
    );
}

export default DishsCards;