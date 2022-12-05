import { useEffect, useRef, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { getRestaurantDetails, getRestaurantDishes } from "../../../api/EpicureAPI";
import DishCardDetails from "../../../interfaces/DishCardDetails";
import Card from "../../cards/Card/Card";
import { CardLargSize, CardsVerticalStyle } from "../../cards/Style";
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

    const getRestaurantStatus = () => {
        try {
            const timeOpenList = restaurantDetails?.timeOpen;
            if (timeOpenList !== undefined) {
                const weekday = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];

                const d = new Date();
                let day = weekday[d.getDay()];
                const timeOpen = timeOpenList.find(t => t.day === day);
                if (timeOpen === undefined)
                    return "Closed";
                const current = new Date();
                const startTime = Number((timeOpen?.from as string).replace(":", ""));
                const currentTime = Number(current.getHours() + "" + (current.getMinutes() < 10 ? '0' : '') + current.getMinutes());
                const endTime = Number((timeOpen?.to as string).replace(":", ""));
                if (startTime > currentTime)
                    return "Will Open at " + timeOpen?.from;
                else if (currentTime >= endTime)
                    return "Closed";
                else
                    return "Open now";
            }
        }
        catch (err) { }
        return "Not Definded"
    }

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
                                {getRestaurantStatus()}
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

export default RestaurantHomePage;