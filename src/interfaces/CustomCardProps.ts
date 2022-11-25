import DishCardDetails from "./DishCardDetails";
import RestaurantCardDetails from "./RestaurantCardDetails";
import Size from "./SizeInterface";

interface CustomCardProps {
    cardDetails: DishCardDetails | RestaurantCardDetails,
    imgSize: Size
}

export default CustomCardProps;