import './DishCard.css';

const DishCard = () => {
    return (
        <>
        <div className='dish_card_container'>
            <div className='dish_card_image'>Image</div>
            <div className='dish_card_details'>
                <div className='dish_card_details_top'>Clare</div>
                <div className='dish_card_details_down'>Shrimps, Glass Noodles, Kemiri Nuts, Shallots, Lemon Grass, Magic Chili Brown Coconut</div>
            </div>
        </div>
        </>
    );
}

export default DishCard;