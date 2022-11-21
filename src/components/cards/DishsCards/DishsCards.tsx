import DishCard from '../DishCard/DishCard';
import Vector from '../../../assets/vector.svg';

import { RestaurantCardsContainerStyle, RestaurantCardsTitleStyle, RestaurantCardsStyle, AllCardsButtonStyle, AllCardsVectorStyle } from './Style'

const DishsCards = () => {
    return (
        <>
            <RestaurantCardsContainerStyle>
                <RestaurantCardsTitleStyle>popular restaurant in epicure:</RestaurantCardsTitleStyle>
                <RestaurantCardsStyle>
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
                </RestaurantCardsStyle>
                <AllCardsButtonStyle>
                    All Restaurants<AllCardsVectorStyle><img src={Vector} /></AllCardsVectorStyle>
                </AllCardsButtonStyle>
            </RestaurantCardsContainerStyle>
        </>
    );
}

export default DishsCards;