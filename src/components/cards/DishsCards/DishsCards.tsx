import Card from '../Card/Card';
import { Vector } from '../../../assets/AllLogo';

import { CardsContainerStyle, CardsTitleStyle, CardsHorizontalStyle, AllCardsButtonStyle, AllCardsVectorStyle, CardSmallSize } from '../Style'
import DishCardDetails from '../../../interfaces/DishCardDetails';
import { useRef } from 'react';
import { getRestaurantDishes } from '../../../api/EpicureAPI';

const DishsCards = () => {
    const dishes = useRef<DishCardDetails[]>(getRestaurantDishes(1));
    const imgSize = CardSmallSize;

    return (
        <>
            <CardsContainerStyle>
                <CardsTitleStyle>Signature Dish Of:</CardsTitleStyle>
                <CardsHorizontalStyle>
                    {dishes.current.map((dish) => <Card key={dish.id} cardDetails={dish} imgSize={imgSize} />)}
                </CardsHorizontalStyle>
                <AllCardsButtonStyle to="/homePage_restaurants_all">
                    All Restaurants<AllCardsVectorStyle><img src={Vector} /></AllCardsVectorStyle>
                </AllCardsButtonStyle>
            </CardsContainerStyle>
        </>
    );
}

export default DishsCards;