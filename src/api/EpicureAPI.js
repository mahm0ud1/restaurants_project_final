import restaurants from './staticJson/restaurants.json'
import dishes from './staticJson/dishes.json'
import orders from './staticJson/orders.json'

const api = "http://localhost:3001/api";

const getData = async (path) => {
    const data = await fetch(`${api}/${path}`, { method: 'GET' })
    .then(response => response.json())
    return data;
}

export const getPopularRestaurants = () => {
    return getData("restaurants/getPapularRestaurans");
}

export const getSignatureDishes = () => {
    return getData("dishes/getSignatureDishes");
}

export const getRestaurants = () => {
    return getData("restaurants/getRestaurants");
}

export const getRestaurantDishes = (restaurantID) => {
    return getData(`dishes/getRestaurantDishes/${restaurantID}`);
}

export const getRestaurantFullInfo = (restaurantID) => {
    return getData(`restaurants/getRestaurant/${restaurantID}`);
}

export const getChefRestaurants = (chefID) => {
    return restaurants;
}

export const getRestaurantDetails = (restaurantID) => {
    return restaurants.find(restaurant => restaurant.id == restaurantID);
}

export const getOrders = () => {
    return orders;
}

export const searchAPI = (value) => {
    return getData(`search/${value}`);
}