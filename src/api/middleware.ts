import axios from "axios";
import Cookies from 'js-cookie';
import OrderCardProps from "../components/cards/OrderCard/OrderCardPorps";

import ChefOfTheWeekInterface from "../interfaces/ChefOfTheWeekInterface";
import LoginResponseInterface from "../interfaces/LoginResponseInterface";
import RestaurantCardDetails from "../interfaces/RestaurantCardDetails";
import RestaurantHPInterface from "../interfaces/RestaurantHomePageInterface";
import SearchResultsInterface from "../interfaces/SearchResultsInterface";
import SignatureDishData from "../interfaces/SignatureDishData";
import UserInfoInterface from "../interfaces/UserInfoInterface";

const backendURL: string = "http://localhost:3001/api";

const getISessionID = () => {
    const cookieValue = Cookies.get('jsessionid');
    return cookieValue;
}

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



export const getChefOfTheWeek = async () => {
    try {
        const { data, status } = await axios.get<ChefOfTheWeekInterface>(
            `${backendURL}/chefs/getChefOfTheWeek`,
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

export const login = async (username: String, password: String) => {
    try {
        const respone = await new Promise<LoginResponseInterface>((resolve, reject) => {
            axios.post<LoginResponseInterface>(
                `${backendURL}/auth/login`,
                {
                    "username": username,
                    "password": password
                }
            ).then((res) => {
                resolve(res.data);
            }).catch(error => {
                resolve(error.response.data);
            });
        })
        Cookies.set('jsessionid', respone.jsessionid, { expires: 1 });
        return {
            responeMessage: respone.Message,
            respone: respone
        };
    }
    catch (error) { }

    return {
        responeMessage: "ERROR"
    };
}

export const createOrder = async (dishID: number, count: number, options: Object) => {
    try {
        const respone = await new Promise<String>((resolve, reject) => {
            axios.post<String>(
                `${backendURL}/orders/createOrder`,
                {
                    "dishID": dishID,
                    "count": count,
                    "dishOptions": options
                },
                {
                    headers: {
                        'jsessionid': getISessionID()
                    }
                }
            ).then((res) => {
                resolve(res.data);
            }).catch(error => {
                resolve(error.response.data);
            });
        })

        return respone;
    }
    catch (error) { }

    return "ERROR";
}

export const getOrders = async () => {
    try {
        const { data, status } = await axios.get<OrderCardProps[]>(
            `${backendURL}/orders/getOrders`,
            {
                headers: {
                    'jsessionid': getISessionID()
                }
            }
        );
        if (status === 200)
            return data;
    }
    catch (error) { }

    return [];
}

export const getUserInfo = async () => {
    try {
        const { data, status } = await axios.get<UserInfoInterface[]>(
            `${backendURL}/auth/getUserInfo`,
            {
                headers: {
                    'jsessionid': getISessionID()
                }
            }
        );
        if (status === 200)
            return data;
    }
    catch (error) { }

    return "ERROR";
}