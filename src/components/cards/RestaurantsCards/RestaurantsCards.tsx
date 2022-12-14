import { useRef } from 'react';
import { getRestaurants } from '../../../api/EpicureAPI';
import { Vector } from '../../../assets/AllLogo';
import RestaurantCardDetails from '../../../interfaces/RestaurantCardDetails';
import Card from '../Card/Card';
import { CardsContainerStyle, CardsTitleStyle, CardsHorizontalStyle, AllCardsButtonStyle, AllCardsVectorStyle, LinkStyle } from '../Style'

const RestaurantsCards = () => {
    const restaurants = useRef<RestaurantCardDetails[]>(getRestaurants());

    return (
        <>
            <CardsContainerStyle>
                <CardsTitleStyle>popular restaurant in epicure:</CardsTitleStyle>
                <CardsHorizontalStyle>
                    <div />
                    {restaurants.current.map((restaurant: RestaurantCardDetails) =>
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