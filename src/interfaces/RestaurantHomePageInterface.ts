import DishCardDetails from "./DishCardDetails";
import RestaurantCardDetails from "./RestaurantCardDetails";

interface RestaurantHPInterface {
    restaurant:RestaurantCardDetails,
    dishes:[DishCardDetails]
}

export default RestaurantHPInterface;