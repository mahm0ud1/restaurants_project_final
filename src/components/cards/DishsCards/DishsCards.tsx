import Card from '../Card/Card';
import { Vector } from '../../../assets/AllLogo';

import { CardsContainerStyle, CardsTitleStyle, CardsHorizontalStyle, AllCardsButtonStyle, AllCardsVectorStyle, LinkStyle } from '../Style'
import { useEffect, useState } from 'react';
import SignatureDishData from '../../../interfaces/SignatureDishData';
import { getSignatureDishes } from '../../../api/middleware';

const DishsCards = () => {
    const [dishes, setDishes] = useState<SignatureDishData[]>([]);

    useEffect(() => {
        fetchRestaurants();
    }, [])

    const fetchRestaurants = async () => {
        try {
            const dishes = await getSignatureDishes();
            if (dishes == null)
                setDishes([]);
            else
                setDishes(dishes);
        }
        catch (error) { }
    }

    return (
        <>
            <CardsContainerStyle>
                <CardsTitleStyle>Signature Dish Of:</CardsTitleStyle>
                <CardsHorizontalStyle>
                    <div />
                    {dishes.map((dish) => {
                        return (
                            <LinkStyle to={`/restaurant/${dish.restaurantID}/dish/${dish.id}`}>
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