import axios from "axios";
import RestaurantCardDetails from "../interfaces/RestaurantCardDetails";
import RestaurantHPInterface from "../interfaces/RestaurantHomePageInterface";
import SearchResultsInterface from "../interfaces/SearchResultsInterface";
import SignatureDishData from "../interfaces/SignatureDishData";

const backendURL: String = "http://localhost:3001/api";

export const searchValue = async (value: String) => {
    let searchValues: SearchResultsInterface = { searchResultsSections: [] };
    if (value !== undefined && value !== "") {
        try {
            const { data, status } = await axios.get<SearchResultsInterface>(
                `${backendURL}/search/${value}`,
                {
                    headers: {
                        Accept: 'application/json',
                    },
                },
            );

            if (status === 200)
                searchValues = data;
        }
        catch (error) { }
    }

    return searchValues
}

export const getPopularRestaurants = async () => {
    try {
        const { data, status } = await axios.get<RestaurantCardDetails[]>(
            `${backendURL}/restaurants/getPapularRestaurans`,
            {
                headers: {
                    Accept: 'application/json',
                },
            },
        );

        if (status === 200)
            return data;
    }
    catch (error) { }

    return null;
}

export const getSignatureDishes = async () => {
    try {
        const { data, status } = await axios.get<SignatureDishData[]>(
            `${backendURL}/dishes/getSignatureDishes`,
            {
                headers: {
                    Accept: 'application/json',
                },
            },
        );

        if (status === 200)
            return data;
    }
    catch (error) { }

    return null;
}

export const getRestaurants = async () => {
    try {
        const { data, status } = await axios.get<RestaurantCardDetails[]>(
            `${backendURL}/restaurants/getRestaurants`,
            {
                headers: {
                    Accept: 'application/json',
                },
            },
        );

        if (status === 200)
            return data;
    }
    catch (error) { }

    return null;
}

export const getRestaurantDishes = async (restaurantID: String) => {
    try {
        const { data, status } = await axios.get<RestaurantCardDetails[]>(
            `${backendURL}/dishes/getRestaurantDishes/${restaurantID}`,
            {
                headers: {
                    Accept: 'application/json',
                },
            },
        );

        if (status === 200)
            return data;
    }
    catch (error) { }

    return null;
}

export const getRestaurantFullInfo = async (restaurantID: String) => {
    try {
        const { data, status } = await axios.get<RestaurantHPInterface>(
            `${backendURL}/restaurants/getRestaurant/${restaurantID}`,
            {
                headers: {
                    Accept: 'application/json',
                },
            },
        );
        if (status === 200)
            return data;
    }
    catch (error) { }

    return null;
}