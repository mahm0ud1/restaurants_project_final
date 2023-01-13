import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DishCardDetails from "../../../interfaces/DishCardDetails";
import Card from "../../cards/Card/Card";
import { CardsVerticalStyle } from "../../cards/Style";
import { RestaurantsListContainerStyle } from "../Restaurants/Style";
import { CloseButton, TimeIcone } from "../../../assets/AllLogo";
import {
    RestaurantHomePageContainerStyle, RestaurantHedearContainerStyle, RestaurantImageStyle,
    RestaurantHeaderDownContainerStyle, RestaurantNameStyleStyle, RestaurantDetailsContainerStyle,
    RestaurantOpenTimeContainerStyle, RestaurantOpenTimeIconStyle, RestaurantTabsContainerStyle,
    DishContainerStyle, DishCloseContainerStyle, DishCloseButtonStyle
} from './Style';
import { Tab, Tabs } from "../../tools/Tabs/Tabs";
import Dish from "../Dish/Dish";
import RestaurantCardDetails from "../../../interfaces/RestaurantCardDetails";
import moment from 'moment';
import RestaurantDataInterface from "../../../interfaces/RestaurantDataInterface";
import RestaurantHPInterface from "../../../interfaces/RestaurantHomePageInterface";
import { getRestaurantFullInfo } from "../../../api/middleware";

const getRestaurantStatus = (restaurantDetails: RestaurantCardDetails | undefined) => {
    try {
        const timeOpenList = restaurantDetails?.timeOpen;
        if (timeOpenList !== undefined) {
            const weekday = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];

            const date = new Date();
            let day = weekday[date.getDay()];
            const timeOpen = timeOpenList.find(t => t.day === day);
            if (timeOpen === undefined)
                return "Closed";
            const currentTime = moment(date);
            const openTime = moment(timeOpen.from, 'H:mm');
            const closeTime = moment(timeOpen.to, 'H:mm');
            if (currentTime.isBefore(openTime))
                return "Will Open at " + timeOpen?.from;
            else if (currentTime.isBetween(openTime, closeTime))
                return "Open now";
            else
                return "Closed";
        }
    }
    catch (err) { }
    return "Not Definded"
}

const RestaurantHomePage = () => {
    const { restaurant_id, dish_id } = useParams();
    const [selectTab, setSelectedTab] = useState("breakfast");
    const [selectedDish, setSelectedDish] = useState(dish_id);

    const [restaurantData, setRestaurantData] = useState<RestaurantCardDetails>();
    const [dishesData, setDishesData] = useState<DishCardDetails[]>([]);

    useEffect(() => {
        scrollToTop();
        if (restaurant_id === undefined)
            return;
        fetchData(restaurant_id);
    }, [restaurant_id]);

    const fetchData = async (restaurantID: String) => {
        const data = await new Promise<RestaurantHPInterface | null>(async (resolve, reject) => {
            const data = await getRestaurantFullInfo(restaurantID);
            resolve(data);
        });
        if (data != null) {
            setRestaurantData(data.restaurant);
            setDishesData(data.dishes);
        }
    }

    const scrollToTop = () => {
        window.scrollTo(0, 0);
    }

    const selectDish = (dish_id: string) => {
        setSelectedDish(dish_id);
        scrollToTop();
    }

    const getFilteredDishes = () => {
        const dishes = dishesData.filter(dish => {
            return dish.dishType.toLocaleLowerCase() === selectTab.toLocaleLowerCase();
        })
        if (dishes)
            return dishes;
        return [];
    }

    const getDish = () => {
        if (selectedDish === undefined)
            return false;

        const dish = dishesData.find(dish => dish.id === Number(selectedDish));
        if (dish === undefined)
            return false;

        return (
            <>
                <DishCloseContainerStyle>
                    <DishCloseButtonStyle src={CloseButton} onClick={() => setSelectedDish("")} />
                </DishCloseContainerStyle>
                <DishContainerStyle>
                    <Dish props={dish} />
                </DishContainerStyle>
            </>
        )
    }

    return (
        <>
            {
                getDish() ||
                <RestaurantHomePageContainerStyle>
                    <RestaurantHedearContainerStyle>
                        <RestaurantImageStyle src={restaurantData?.imageUrl} />
                        <RestaurantHeaderDownContainerStyle>
                            <RestaurantNameStyleStyle>
                                {restaurantData?.name}
                            </RestaurantNameStyleStyle>
                            <RestaurantDetailsContainerStyle>
                                {restaurantData?.about}
                            </RestaurantDetailsContainerStyle>
                            <RestaurantOpenTimeContainerStyle>
                                <RestaurantOpenTimeIconStyle src={TimeIcone} />
                                {getRestaurantStatus(restaurantData)}
                            </RestaurantOpenTimeContainerStyle>
                        </RestaurantHeaderDownContainerStyle>
                        <RestaurantTabsContainerStyle>
                            <Tabs selected={selectTab} selectTab={setSelectedTab}>
                                <Tab tabName="Breakfast" tabValue="breakfast" />
                                <Tab tabName="Lanch" tabValue="lanch" />
                                <Tab tabName="Dinner" tabValue="dinner" />
                            </Tabs>
                        </RestaurantTabsContainerStyle>
                    </RestaurantHedearContainerStyle>
                    <RestaurantsListContainerStyle>
                        <CardsVerticalStyle>
                            {getFilteredDishes().map((dish: DishCardDetails) =>
                                <div onClick={() => selectDish(String(dish.id))}>
                                    <Card key={dish.id} cardDetails={dish} className="larg" />
                                </div>
                            )}
                        </CardsVerticalStyle>
                    </RestaurantsListContainerStyle>
                </RestaurantHomePageContainerStyle>
            }
        </>
    );
}

export { RestaurantHomePage, getRestaurantStatus };