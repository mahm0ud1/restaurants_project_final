import restaurants from './staticJson/restaurants.json'
import dishes from './staticJson/dishes.json'

const getRestaurants = () => {
    return restaurants;
}

const getRestaurantDishes = (restaurantID) => {
    return dishes;
}

export { getRestaurants, getRestaurantDishes }