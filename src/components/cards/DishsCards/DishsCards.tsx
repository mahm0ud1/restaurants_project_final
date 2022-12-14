import Card from '../Card/Card';
import { Vector } from '../../../assets/AllLogo';

import { CardsContainerStyle, CardsTitleStyle, CardsHorizontalStyle, AllCardsButtonStyle, AllCardsVectorStyle, LinkStyle } from '../Style'
import DishCardDetails from '../../../interfaces/DishCardDetails';
import { useRef } from 'react';
import { getRestaurantDishes } from '../../../api/EpicureAPI';

const DishsCards = () => {
    const dishes = useRef<DishCardDetails[]>(getRestaurantDishes(1));
    return (
        <>
            <CardsContainerStyle>
                <CardsTitleStyle>Signature Dish Of:</CardsTitleStyle>
                <CardsHorizontalStyle>
                    <div />
                    {dishes.current.map((dish) => {
                        return (
                            <LinkStyle to={`/restaurant/1/dish/${dish.id}`}>
                                <Card key={dish.id} cardDetails={dish} className="small" />
                            </LinkStyle>
                        )
                    })}
                </CardsHorizontalStyle>
                <AllCardsButtonStyle to="/homePage_restaurants_all">
                    All Restaurants<AllCardsVectorStyle><img src={Vector} alt="all_restaurants" /></AllCardsVectorStyle>
                </AllCardsButtonStyle>
            </CardsContainerStyle>
        </>
    );
}

export default DishsCards;