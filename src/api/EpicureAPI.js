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
                "sectionResults": restaurants.filter(restaurant => restaurant.title.search(value) !== -1)
                .map(restaurant => {
                    return {
                        url:`/restaurant/${restaurant.id}`,
                        value:restaurant.title
                    }
                })
            },
            {
                "sectionTitle": "Cusine",
                "sectionResults": dishes.filter(dish => dish.title.search(value) !== -1)
                .map(dish => {
                    return {
                        url:`/restaurant/1/dish/1`,
                        value:dish.title
                    }
                })
            },
            {
                "sectionTitle": "Chef",
                "sectionResults": restaurants.filter(restaurant => restaurant.details.search(value) !== -1)
                .map(restaurant => {
                    return {
                        url:`/restaurant/${restaurant.id}`,
                        value:restaurant.details
                    }
                })
            }
        ]
    }
}

export { searchAPI, getRestaurants, getRestaurantDishes, getChefRestaurants, getRestaurantDetails, getOrders }