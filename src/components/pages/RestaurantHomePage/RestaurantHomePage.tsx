import { useRef } from "react";
import { useParams } from "react-router-dom";
import { getRestaurantDetails, getRestaurantDishes } from "../../../api/EpicureAPI";
import DishCardDetails from "../../../interfaces/DishCardDetails";
import RestaurantCardDetails from "../../../interfaces/RestaurantCardDetails";
import Card from "../../cards/Card/Card";
import { CardLargSize, CardsVerticalStyle } from "../../cards/Style";
import { RestaurantsListContainerStyle } from "../Restaurants/Style";

const RestaurantHomePage = () => {
    const { restaurant_id } = useParams();
    const restaurantDetails = getRestaurantDetails(restaurant_id);
    const dishes = useRef<DishCardDetails[]>(getRestaurantDishes(restaurant_id));
    const imgSize = CardLargSize;


    return (
        <>
            <RestaurantsListContainerStyle>
                <CardsVerticalStyle>
                    {dishes.current.map((restaurant: DishCardDetails) =>
                        <Card key={restaurant.id} cardDetails={restaurant} imgSize={imgSize} />
                    )}
                </CardsVerticalStyle>
            </RestaurantsListContainerStyle>
        </>
    );
}

export default RestaurantHomePage;