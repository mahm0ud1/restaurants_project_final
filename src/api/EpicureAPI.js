import restaurants from './staticJson/restaurants.json'
import dishes from './staticJson/dishes.json'
import orders from './staticJson/orders.json'

const getRestaurants = () => {
    return restaurants;
}

const getRestaurantDishes = (restaurantID) => {
    return dishes;
}

const getChefRestaurants = (chefID) => {
    return restaurants;
}

const getRestaurantDetails = (restaurantID) => {
    return restaurants.find(restaurant=>restaurant.id==restaurantID);
}

const getOrders = () => {
    return orders;
}

export { getRestaurants, getRestaurantDishes, getChefRestaurants, getRestaurantDetails, getOrders }