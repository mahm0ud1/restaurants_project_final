import { useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { getRestaurantDetails, getRestaurantDishes } from "../../../api/EpicureAPI";
import DishCardDetails from "../../../interfaces/DishCardDetails";
import RestaurantCardDetails from "../../../interfaces/RestaurantCardDetails";
import Card from "../../cards/Card/Card";
import { CardLargSize, CardsVerticalStyle } from "../../cards/Style";
import { RestaurantsListContainerStyle } from "../Restaurants/Style";
import { TimeIcone } from "../../../assets/AllLogo";
import { RestaurantHomePageContainerStyle, RestaurantHedearContainerStyle, RestaurantImageStyle, RestaurantHeaderDownContainerStyle, RestaurantNameStyleStyle, RestaurantDetailsContainerStyle, RestaurantOpenTimeContainerStyle, RestaurantOpenTimeIconStyle, RestaurantTabsContainerStyle } from './Style';
import { Tab, Tabs } from "../../tools/Tabs/Tabs";

const RestaurantHomePage = () => {
    const { restaurant_id } = useParams();
    const restaurantDetails = getRestaurantDetails(restaurant_id);
    const dishes = useRef<DishCardDetails[]>(getRestaurantDishes(restaurant_id));
    const [ selectTab, setSelectedTab ] = useState("breakfast");
    const imgSize = CardLargSize;

    const selectType = (type: string) => {

    }

    return (
        <>
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
                            {"Open now"}
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
                        {dishes.current.map((restaurant: DishCardDetails) =>
                            <Card key={restaurant.id} cardDetails={restaurant} imgSize={imgSize} />
                        )}
                    </CardsVerticalStyle>
                </RestaurantsListContainerStyle>
            </RestaurantHomePageContainerStyle>
        </>
    );
}

export default RestaurantHomePage;