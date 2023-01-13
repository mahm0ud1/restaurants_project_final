import { useEffect, useState } from 'react';
import { getPopularRestaurants } from '../../../api/middleware';
import { Vector } from '../../../assets/AllLogo';
import RestaurantCardDetails from '../../../interfaces/RestaurantCardDetails';
import Card from '../Card/Card';
import { CardsContainerStyle, CardsTitleStyle, CardsHorizontalStyle, AllCardsButtonStyle, AllCardsVectorStyle, LinkStyle } from '../Style'

const RestaurantsCards = () => {
    const [restaurants, setRestaurants] = useState<RestaurantCardDetails[]>([]);

    useEffect(() => {
        fetchRestaurants();
    }, [])

    const fetchRestaurants = async () => {
        const restaurants = await getPopularRestaurants();
        if (restaurants == null)
            setRestaurants([]);
        else
            setRestaurants(restaurants);
    }

    return (
        <>
            <CardsContainerStyle>
                <CardsTitleStyle>popular restaurant in epicure:</CardsTitleStyle>
                <CardsHorizontalStyle>
                    <div />
                    {restaurants.map((restaurant: RestaurantCardDetails) =>
                        <LinkStyle to={`/restaurant/${restaurant.id}`}>
                            <Card key={restaurant.id} cardDetails={restaurant} className="small" />
                        </LinkStyle>
                    )}
                </CardsHorizontalStyle>
                <AllCardsButtonStyle to="/homePage_restaurants_all">
                    All Restaurants<AllCardsVectorStyle><img src={Vector} alt="all_restaurants" /></AllCardsVectorStyle>
                </AllCardsButtonStyle>
            </CardsContainerStyle>
        </>
    );
}

export default RestaurantsCards;