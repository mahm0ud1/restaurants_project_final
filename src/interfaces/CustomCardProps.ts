import DishCardDetails from "./DishCardDetails";
import RestaurantCardDetails from "./RestaurantCardDetails";

interface CustomCardProps {
    cardDetails: DishCardDetails | RestaurantCardDetails,
    className: string
}

export default CustomCardProps;