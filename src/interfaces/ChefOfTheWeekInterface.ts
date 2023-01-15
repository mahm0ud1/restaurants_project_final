import RestaurantCardDetails from "./RestaurantCardDetails";

interface ChefOfTheWeekInterface {
    id: Number,
    name: string,
    age: Number,
    about: string,
    imageUrl: string,
    chef_restaurants: [RestaurantCardDetails]
}

export default ChefOfTheWeekInterface;