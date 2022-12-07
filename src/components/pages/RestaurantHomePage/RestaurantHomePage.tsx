import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { getRestaurantDetails, getRestaurantDishes } from "../../../api/EpicureAPI";
import DishCardDetails from "../../../interfaces/DishCardDetails";
import Card from "../../cards/Card/Card";
import { CardsVerticalStyle } from "../../cards/Style";
import { RestaurantsListContainerStyle } from "../Restaurants/Style";
import { CloseButton, TimeIcone } from "../../../assets/AllLogo";
import {
    RestaurantHomePageContainerStyle, RestaurantHedearContainerStyle, RestaurantImageStyle,
    RestaurantHeaderDownContainerStyle, RestaurantNameStyleStyle, RestaurantDetailsContainerStyle,
    RestaurantOpenTimeContainerStyle, RestaurantOpenTimeIconStyle, RestaurantTabsContainerStyle,
    DishContainerStyle, DishCloseContainerStyle, DishCloseButtonStyle, DishLinkStyle
} from './Style';
import { Tab, Tabs } from "../../tools/Tabs/Tabs";
import Dish from "../Dish/Dish";
import RestaurantCardDetails from "../../../interfaces/RestaurantCardDetails";
import moment from 'moment';

const getRestaurantStatus = (restaurantDetails:RestaurantCardDetails|undefined) => {
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
            const openTime = moment(timeOpen.from,'H:mm');
            const closeTime = moment(timeOpen.to, 'H:mm');
            console.log(currentTime,openTime,closeTime);
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

    const restaurantDetails = getRestaurantDetails(restaurant_id);
    const dishes = useRef<DishCardDetails[]>(getRestaurantDishes(restaurant_id));

    useEffect(() => {
        return () => {
            window.scrollTo(0, 0);
        };
    }, []);

    const getDish = () => {
        if (selectedDish === undefined)
            return false;

        const dish = dishes.current.find(dish => dish.id === Number(selectedDish));
        if (dish === undefined)
            return false;

        return (
            <>
                <DishCloseContainerStyle>
                    <DishCloseButtonStyle src={CloseButton} onClick={()=>setSelectedDish("")}/>
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
                        <RestaurantImageStyle src={restaurantDetails?.imageUrl} />
                        <RestaurantHeaderDownContainerStyle>
                            <RestaurantNameStyleStyle>
                                {restaurantDetails?.title}
                            </RestaurantNameStyleStyle>
                            <RestaurantDetailsContainerStyle>
                                {restaurantDetails?.details}
                            </RestaurantDetailsContainerStyle>
                            <RestaurantOpenTimeContainerStyle>
                                <RestaurantOpenTimeIconStyle src={TimeIcone} />
                                {getRestaurantStatus(restaurantDetails)}
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
                            {dishes.current.map((dish: DishCardDetails) =>
                                <div onClick={()=>setSelectedDish(String(dish.id))}>
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

export {RestaurantHomePage, getRestaurantStatus };