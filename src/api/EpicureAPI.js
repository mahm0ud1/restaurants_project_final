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
    return restaurants.find(restaurant => restaurant.id == restaurantID);
}

const getOrders = () => {
    return orders;
}

const searchAPI = (value) => {
    return {
        "searchResultsSections": [
            {
                "sectionTitle": "Restaurants",
                "sectionResults": restaurants.map(restaurant => restaurant.title)
                    .filter(title => title.search(value) !== -1)
            },
            {
                "sectionTitle": "Cusine",
                "sectionResults": dishes.map(dish => dish.title)
                    .filter(title => title.search(value) !== -1)
            },
            {
                "sectionTitle": "Chef",
                "sectionResults": restaurants.map(restaurant => restaurant.details)
                    .filter(details => details.search(value) !== -1)
            }
        ]
    }
}

export { searchAPI, getRestaurants, getRestaurantDishes, getChefRestaurants, getRestaurantDetails, getOrders }